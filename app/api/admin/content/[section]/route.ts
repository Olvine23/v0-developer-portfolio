import { NextResponse } from "next/server"
import { isAuthorizedRequest } from "@/lib/auth"
import { getSection, saveSection } from "@/lib/content"
import type { SectionName } from "@/lib/types"

const VALID_SECTIONS: SectionName[] = ["projects", "writings", "experience", "community", "focus"]

function isSectionName(value: string): value is SectionName {
  return (VALID_SECTIONS as string[]).includes(value)
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ section: string }> }
) {
  if (!isAuthorizedRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { section } = await params
  if (!isSectionName(section)) {
    return NextResponse.json({ error: "Unknown section" }, { status: 404 })
  }

  const data = await getSection(section)
  return NextResponse.json(data)
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ section: string }> }
) {
  if (!isAuthorizedRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { section } = await params
  if (!isSectionName(section)) {
    return NextResponse.json({ error: "Unknown section" }, { status: 404 })
  }

  const body = await request.json().catch(() => null)
  if (!Array.isArray(body)) {
    return NextResponse.json({ error: "Expected an array" }, { status: 400 })
  }

  await saveSection(section, body)
  return NextResponse.json({ ok: true })
}
