"use client"

import { useState } from "react"
import Image from "next/image"
import { useSection } from "@/components/admin/use-section"
import { EditorShell, ItemCard, Field } from "@/components/admin/editor-shell"
import { ListTextarea, cleanList } from "@/components/admin/list-textarea"
import { uploadImage } from "@/components/admin/upload-image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import type { Project, ProjectStatus } from "@/lib/types"

const STATUSES: ProjectStatus[] = ["Live", "In Progress", "Community"]

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function emptyProject(): Project {
  return {
    slug: "",
    title: "",
    category: "Mobile App",
    summary: "",
    caseStudy: "",
    technologies: [],
    link: null,
    repoLink: null,
    year: String(new Date().getFullYear()),
    status: "In Progress",
    coverImage: null,
    screenshots: [],
  }
}

export default function ProjectsAdminPage() {
  const { items, setItems, loading, saving, error, save, savedAt } = useSection("projects")
  const [uploading, setUploading] = useState<string | null>(null)

  function update(index: number, patch: Partial<Project>) {
    setItems(items.map((item, i) => (i === index ? { ...item, ...patch } : item)))
  }

  function remove(index: number) {
    setItems(items.filter((_, i) => i !== index))
  }

  function handleSave() {
    save(items.map((item) => ({ ...item, technologies: cleanList(item.technologies) })))
  }

  async function handleCoverUpload(index: number, file: File) {
    setUploading(`cover-${index}`)
    try {
      const url = await uploadImage(file)
      update(index, { coverImage: url })
    } finally {
      setUploading(null)
    }
  }

  async function handleScreenshotUpload(index: number, files: FileList) {
    setUploading(`screenshots-${index}`)
    try {
      const urls = await Promise.all(Array.from(files).map(uploadImage))
      update(index, { screenshots: [...items[index].screenshots, ...urls] })
    } finally {
      setUploading(null)
    }
  }

  function removeScreenshot(index: number, url: string) {
    update(index, { screenshots: items[index].screenshots.filter((s) => s !== url) })
  }

  if (loading) {
    return <main className="mx-auto max-w-3xl px-6 py-16 text-muted-foreground">Loading…</main>
  }

  return (
    <EditorShell
      title="Projects"
      saving={saving}
      error={error}
      savedAt={savedAt}
      onSave={handleSave}
      onAdd={() => setItems([emptyProject(), ...items])}
    >
      {items.map((item, index) => (
        <ItemCard key={index} onRemove={() => remove(index)}>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Title">
              <Input
                value={item.title}
                onChange={(e) => {
                  const title = e.target.value
                  const shouldAutoSlug = !item.slug || item.slug === slugify(item.title)
                  update(index, { title, slug: shouldAutoSlug ? slugify(title) : item.slug })
                }}
              />
            </Field>
            <Field label="Slug (used in the URL)">
              <Input
                value={item.slug}
                onChange={(e) => update(index, { slug: slugify(e.target.value) })}
              />
            </Field>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Field label="Category">
              <Input value={item.category} onChange={(e) => update(index, { category: e.target.value })} />
            </Field>
            <Field label="Year">
              <Input value={item.year} onChange={(e) => update(index, { year: e.target.value })} />
            </Field>
            <Field label="Status">
              <select
                value={item.status}
                onChange={(e) => update(index, { status: e.target.value as ProjectStatus })}
                className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none"
              >
                {STATUSES.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Card summary">
            <Textarea
              value={item.summary}
              onChange={(e) => update(index, { summary: e.target.value })}
              rows={2}
            />
          </Field>

          <Field label="Product thinking (shown on the case-study page)">
            <Textarea
              value={item.caseStudy}
              onChange={(e) => update(index, { caseStudy: e.target.value })}
              rows={8}
              placeholder="What was the problem? What decisions did you make, and why? What did you learn? Separate paragraphs with a blank line."
            />
          </Field>

          <Field label="Technologies (comma separated)">
            <ListTextarea
              value={item.technologies}
              onChange={(technologies) => update(index, { technologies })}
              separator=","
              rows={2}
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Live link">
              <Input
                value={item.link ?? ""}
                onChange={(e) => update(index, { link: e.target.value || null })}
              />
            </Field>
            <Field label="Repo link">
              <Input
                value={item.repoLink ?? ""}
                onChange={(e) => update(index, { repoLink: e.target.value || null })}
              />
            </Field>
          </div>

          <Field label="Cover image">
            <div className="flex items-center gap-4">
              {item.coverImage && (
                <Image
                  src={item.coverImage}
                  alt=""
                  width={96}
                  height={64}
                  className="h-16 w-24 rounded border border-border object-cover"
                />
              )}
              <input
                type="file"
                accept="image/*"
                disabled={uploading === `cover-${index}`}
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) void handleCoverUpload(index, file)
                  e.target.value = ""
                }}
                className="text-sm"
              />
              {item.coverImage && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => update(index, { coverImage: null })}
                >
                  Remove
                </Button>
              )}
            </div>
          </Field>

          <Field label="Screenshots">
            <div className="space-y-3">
              {item.screenshots.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {item.screenshots.map((url) => (
                    <div key={url} className="relative">
                      <Image
                        src={url}
                        alt=""
                        width={96}
                        height={64}
                        className="h-16 w-24 rounded border border-border object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeScreenshot(index, url)}
                        className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs text-white"
                        aria-label="Remove screenshot"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                multiple
                disabled={uploading === `screenshots-${index}`}
                onChange={(e) => {
                  if (e.target.files?.length) void handleScreenshotUpload(index, e.target.files)
                  e.target.value = ""
                }}
                className="text-sm"
              />
            </div>
          </Field>
        </ItemCard>
      ))}
    </EditorShell>
  )
}
