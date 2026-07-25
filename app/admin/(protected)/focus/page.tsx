"use client"

import { useSection } from "@/components/admin/use-section"
import { EditorShell, ItemCard, Field } from "@/components/admin/editor-shell"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import type { FocusIcon, FocusItem } from "@/lib/types"

const ICONS: FocusIcon[] = ["Bot", "Smartphone", "Sparkles"]

const emptyItem: FocusItem = {
  icon: "Bot",
  title: "",
  description: "",
  status: "",
}

export default function FocusAdminPage() {
  const { items, setItems, loading, saving, error, save, savedAt } = useSection("focus")

  function update(index: number, patch: Partial<FocusItem>) {
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
      title="Current Focus"
      saving={saving}
      error={error}
      savedAt={savedAt}
      onSave={() => save()}
      onAdd={() => setItems([emptyItem, ...items])}
    >
      {items.map((item, index) => (
        <ItemCard key={index} onRemove={() => remove(index)}>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Title">
              <Input value={item.title} onChange={(e) => update(index, { title: e.target.value })} />
            </Field>
            <Field label="Icon">
              <select
                value={item.icon}
                onChange={(e) => update(index, { icon: e.target.value as FocusIcon })}
                className={cn(
                  "h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none"
                )}
              >
                {ICONS.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Status">
            <Input
              value={item.status}
              onChange={(e) => update(index, { status: e.target.value })}
              placeholder="Active exploration"
            />
          </Field>
          <Field label="Description">
            <Textarea
              value={item.description}
              onChange={(e) => update(index, { description: e.target.value })}
              rows={3}
            />
          </Field>
        </ItemCard>
      ))}
    </EditorShell>
  )
}
