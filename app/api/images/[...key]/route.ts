import { NextResponse } from "next/server"
import { screenshotsStore } from "@/lib/blob-store"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ key: string[] }> }
) {
  const { key } = await params
  const store = screenshotsStore()
  const result = await store.getWithMetadata(key.join("/"), { type: "arrayBuffer" })

  if (!result) {
    return new NextResponse("Not found", { status: 404 })
  }

  const contentType = (result.metadata.contentType as string | undefined) ?? "application/octet-stream"

  return new NextResponse(result.data, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
