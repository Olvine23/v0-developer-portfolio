"use client"

import { useCallback, useEffect, useState } from "react"
import type { ContentMap, SectionName } from "@/lib/types"

export function useSection<K extends SectionName>(section: K) {
  const [items, setItems] = useState<ContentMap[K]>([] as unknown as ContentMap[K])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [savedAt, setSavedAt] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(`/api/admin/content/${section}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load")
        return res.json()
      })
      .then((data) => {
        if (!cancelled) setItems(data)
      })
      .catch(() => {
        if (!cancelled) setError("Failed to load content.")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [section])

  const save = useCallback(
    async (overrideItems?: ContentMap[K]) => {
      const payload = overrideItems ?? items
      if (overrideItems) setItems(overrideItems)
      setSaving(true)
      setError(null)
      try {
        const res = await fetch(`/api/admin/content/${section}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error("Failed to save")
        setSavedAt(Date.now())
      } catch {
        setError("Failed to save content.")
      } finally {
        setSaving(false)
      }
    },
    [section, items]
  )

  return { items, setItems, loading, saving, error, save, savedAt }
}
