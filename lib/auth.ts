import crypto from "node:crypto"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const SESSION_COOKIE_NAME = "admin_session"
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000
export const SESSION_MAX_AGE_SECONDS = SESSION_DURATION_MS / 1000

function getSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not set")
  }
  return secret
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", getSessionSecret()).update(payload).digest("hex")
}

function timingSafeStringEqual(a: string, b: string): boolean {
  const bufferA = Buffer.from(a)
  const bufferB = Buffer.from(b)
  if (bufferA.length !== bufferB.length) return false
  return crypto.timingSafeEqual(bufferA, bufferB)
}

export function createSessionToken(): string {
  const expires = String(Date.now() + SESSION_DURATION_MS)
  return `${expires}.${sign(expires)}`
}

export function isValidSessionToken(token: string | undefined | null): boolean {
  if (!token) return false
  const [expires, signature] = token.split(".")
  if (!expires || !signature) return false
  if (!timingSafeStringEqual(signature, sign(expires))) return false
  return Number(expires) > Date.now()
}

export function checkPassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    throw new Error("ADMIN_PASSWORD is not set")
  }
  return timingSafeStringEqual(password, adminPassword)
}

/** Redirects to /admin/login if the current request has no valid session. Use in admin server components/pages. */
export async function requireAdmin(): Promise<void> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value
  if (!isValidSessionToken(token)) {
    redirect("/admin/login")
  }
}

/** Use in route handlers, where redirect() isn't appropriate — return 401 instead. */
export function isAuthorizedRequest(request: Request): boolean {
  const cookieHeader = request.headers.get("cookie") ?? ""
  const match = cookieHeader.match(new RegExp(`${SESSION_COOKIE_NAME}=([^;]+)`))
  const token = match?.[1]
  return isValidSessionToken(token ? decodeURIComponent(token) : undefined)
}
