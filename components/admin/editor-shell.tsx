"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"

export function EditorShell({
  title,
  saving,
  error,
  savedAt,
  onSave,
  onAdd,
  children,
}: {
  title: string
  saving: boolean
  error: string | null
  savedAt: number | null
  onSave: () => void
  onAdd: () => void
  children: ReactNode
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <Link href="/admin" className="text-sm text-muted-foreground hover:text-primary">
            ← Admin
          </Link>
          <h1 className="mt-2 text-2xl font-medium">{title}</h1>
        </div>
        <div className="flex items-center gap-3">
          {error && <span className="text-sm text-destructive">{error}</span>}
          {!error && savedAt && <span className="text-sm text-muted-foreground">Saved</span>}
          <Button type="button" variant="outline" onClick={onAdd}>
            Add
          </Button>
          <Button type="button" onClick={onSave} disabled={saving}>
            {saving ? "Saving…" : "Save"}
          </Button>
        </div>
      </div>
      <div className="space-y-6">{children}</div>
    </main>
  )
}

export function ItemCard({
  onRemove,
  children,
}: {
  onRemove: () => void
  children: ReactNode
}) {
  return (
    <div className="space-y-4 border border-border bg-card p-6">
      {children}
      <div className="flex justify-end border-t border-border pt-4">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onRemove}
          className="text-destructive hover:text-destructive"
        >
          Remove
        </Button>
      </div>
    </div>
  )
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium">{label}</span>
      {children}
    </label>
  )
}
