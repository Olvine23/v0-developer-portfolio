"use client"

import { useSection } from "@/components/admin/use-section"
import { EditorShell, ItemCard, Field } from "@/components/admin/editor-shell"
import { ListTextarea, cleanList } from "@/components/admin/list-textarea"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { ExperienceItem } from "@/lib/types"

const emptyItem: ExperienceItem = {
  company: "",
  location: "",
  role: "",
  period: "",
  description: "",
  highlights: [],
}

export default function ExperienceAdminPage() {
  const { items, setItems, loading, saving, error, save, savedAt } = useSection("experience")

  function update(index: number, patch: Partial<ExperienceItem>) {
    setItems(items.map((item, i) => (i === index ? { ...item, ...patch } : item)))
  }

  function remove(index: number) {
    setItems(items.filter((_, i) => i !== index))
  }

  function handleSave() {
    save(items.map((item) => ({ ...item, highlights: cleanList(item.highlights) })))
  }

  if (loading) {
    return <main className="mx-auto max-w-3xl px-6 py-16 text-muted-foreground">Loading…</main>
  }

  return (
    <EditorShell
      title="Experience"
      saving={saving}
      error={error}
      savedAt={savedAt}
      onSave={handleSave}
      onAdd={() => setItems([emptyItem, ...items])}
    >
      {items.map((item, index) => (
        <ItemCard key={index} onRemove={() => remove(index)}>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Company">
              <Input value={item.company} onChange={(e) => update(index, { company: e.target.value })} />
            </Field>
            <Field label="Location">
              <Input value={item.location} onChange={(e) => update(index, { location: e.target.value })} />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Role">
              <Input value={item.role} onChange={(e) => update(index, { role: e.target.value })} />
            </Field>
            <Field label="Period">
              <Input
                value={item.period}
                onChange={(e) => update(index, { period: e.target.value })}
                placeholder="Nov 2023 — May 2025"
              />
            </Field>
          </div>
          <Field label="Description">
            <Textarea
              value={item.description}
              onChange={(e) => update(index, { description: e.target.value })}
              rows={2}
            />
          </Field>
          <Field label="Highlights (one per line)">
            <ListTextarea
              value={item.highlights}
              onChange={(highlights) => update(index, { highlights })}
              rows={4}
            />
          </Field>
        </ItemCard>
      ))}
    </EditorShell>
  )
}
