import { contentStore } from "@/lib/blob-store"
import { defaults } from "@/lib/defaults"
import type { ContentMap, SectionName } from "@/lib/types"

export async function getSection<K extends SectionName>(
  name: K
): Promise<ContentMap[K]> {
  try {
    const store = contentStore()
    const saved = await store.get(name, { type: "json" })
    return (saved as ContentMap[K] | null) ?? defaults[name]
  } catch {
    // Netlify Blobs has no context outside a Netlify build/runtime
    // (e.g. a plain local `next build`) — degrade to the fallback content.
    return defaults[name]
  }
}

export async function saveSection<K extends SectionName>(
  name: K,
  data: ContentMap[K]
): Promise<void> {
  const store = contentStore()
  await store.setJSON(name, data)
}

export async function getProject(slug: string) {
  const projects = await getSection("projects")
  return projects.find((project) => project.slug === slug) ?? null
}
