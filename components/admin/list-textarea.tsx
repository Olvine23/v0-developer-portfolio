"use client"

import { Textarea } from "@/components/ui/textarea"

export function cleanList(list: string[]): string[] {
  return list.map((item) => item.trim()).filter(Boolean)
}

export function ListTextarea({
  value,
  onChange,
  separator = "\n",
  rows = 4,
  placeholder,
}: {
  value: string[]
  onChange: (value: string[]) => void
  separator?: string
  rows?: number
  placeholder?: string
}) {
  return (
    <Textarea
      value={value.join(separator)}
      onChange={(event) =>
        onChange(event.target.value.split(separator).map((item) => item.trim()))
      }
      rows={rows}
      placeholder={placeholder}
    />
  )
}
