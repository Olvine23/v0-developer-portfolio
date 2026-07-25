"use client"

import { useSection } from "@/components/admin/use-section"
import { EditorShell, ItemCard, Field } from "@/components/admin/editor-shell"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import type { CommunityIcon, CommunityItem } from "@/lib/types"

const ICONS: CommunityIcon[] = ["Users", "Mic", "GraduationCap"]

const emptyItem: CommunityItem = {
  icon: "Users",
  role: "",
  title: "",
  description: "",
}

export default function CommunityAdminPage() {
  const { items, setItems, loading, saving, error, save, savedAt } = useSection("community")

  function update(index: number, patch: Partial<CommunityItem>) {
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
      title="Community"
      saving={saving}
      error={error}
      savedAt={savedAt}
      onSave={() => save()}
      onAdd={() => setItems([emptyItem, ...items])}
    >
      {items.map((item, index) => (
        <ItemCard key={index} onRemove={() => remove(index)}>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Role">
              <Input value={item.role} onChange={(e) => update(index, { role: e.target.value })} />
            </Field>
            <Field label="Icon">
              <select
                value={item.icon}
                onChange={(e) => update(index, { icon: e.target.value as CommunityIcon })}
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
          <Field label="Title">
            <Input value={item.title} onChange={(e) => update(index, { title: e.target.value })} />
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
