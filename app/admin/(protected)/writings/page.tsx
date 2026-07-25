"use client"

import { useSection } from "@/components/admin/use-section"
import { EditorShell, ItemCard, Field } from "@/components/admin/editor-shell"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Writing } from "@/lib/types"

const emptyWriting: Writing = {
  title: "",
  excerpt: "",
  publication: "Medium",
  date: "",
  link: "",
}

export default function WritingsAdminPage() {
  const { items, setItems, loading, saving, error, save, savedAt } = useSection("writings")

  function update(index: number, patch: Partial<Writing>) {
    setItems(items.map((item, i) => (i === index ? { ...item, ...patch } : item)))
  }

  function remove(index: number) {
    setItems(items.filter((_, i) => i !== index))
  }

  if (loading) {
    return <main className="mx-auto max-w-3xl px-6 py-16 text-muted-foreground">Loading…</main>
  }

  return (
    <EditorShell
      title="Writing"
      saving={saving}
      error={error}
      savedAt={savedAt}
      onSave={() => save()}
      onAdd={() => setItems([emptyWriting, ...items])}
    >
      {items.map((item, index) => (
        <ItemCard key={index} onRemove={() => remove(index)}>
          <Field label="Title">
            <Input value={item.title} onChange={(e) => update(index, { title: e.target.value })} />
          </Field>
          <Field label="Excerpt">
            <Textarea
              value={item.excerpt}
              onChange={(e) => update(index, { excerpt: e.target.value })}
              rows={3}
            />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Publication">
              <Input
                value={item.publication}
                onChange={(e) => update(index, { publication: e.target.value })}
              />
            </Field>
            <Field label="Date">
              <Input
                value={item.date}
                onChange={(e) => update(index, { date: e.target.value })}
                placeholder="March 2026"
              />
            </Field>
          </div>
          <Field label="Link">
            <Input value={item.link} onChange={(e) => update(index, { link: e.target.value })} />
          </Field>
        </ItemCard>
      ))}
    </EditorShell>
  )
}
