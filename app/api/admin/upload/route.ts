import crypto from "node:crypto"
import { NextResponse } from "next/server"
import { isAuthorizedRequest } from "@/lib/auth"
import { screenshotsStore } from "@/lib/blob-store"

const EXTENSION_BY_MIME: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
}

export async function POST(request: Request) {
  if (!isAuthorizedRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const formData = await request.formData()
  const file = formData.get("file")

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 })
  }

  const extension = EXTENSION_BY_MIME[file.type]
  if (!extension) {
    return NextResponse.json({ error: "Unsupported image type" }, { status: 400 })
  }

  const arrayBuffer = await file.arrayBuffer()
  const hash = crypto.createHash("sha256").update(Buffer.from(arrayBuffer)).digest("hex").slice(0, 24)
  const key = `${hash}.${extension}`

  const store = screenshotsStore()
  await store.set(key, arrayBuffer, { metadata: { contentType: file.type } })

  return NextResponse.json({ url: `/api/images/${key}` })
}
