import Link from "next/link"
import { LogoutButton } from "@/components/admin/logout-button"

const sections = [
  { href: "/admin/projects", label: "Projects", description: "Case studies, links, screenshots" },
  { href: "/admin/writings", label: "Writing", description: "Published articles" },
  { href: "/admin/experience", label: "Experience", description: "Work history" },
  { href: "/admin/community", label: "Community", description: "Leadership & mentorship" },
  { href: "/admin/focus", label: "Current Focus", description: "What you're exploring now" },
]

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-2xl font-medium">Admin</h1>
        <LogoutButton />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <h2 className="font-medium">{section.label}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
