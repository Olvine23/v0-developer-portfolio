"use client"

import { Users, Mic, GraduationCap } from "lucide-react"

const community = [
  {
    icon: Users,
    role: "Community Lead",
    title: "Flutter Kisumu",
    description:
      "Helping organize developer meetups and workshops around Flutter and mobile development within the Kisumu tech ecosystem."
  },
  {
    icon: Mic,
    role: "GDSC Lead",
    title: "Google Developer Student Clubs — MMUST",
    description:
      "Led the developer community at Masinde Muliro University (2022–2023), organizing workshops, technical talks, and supporting students learning modern software development."
  },
  {
    icon: GraduationCap,
    role: "Mentor",
    title: "Developer Mentorship",
    description:
      "Supporting upcoming developers by sharing practical knowledge about building real-world applications and navigating the tech industry."
  }
]

export function Community() {
  return (
    <section
      id="community"
      className="relative scroll-mt-24 px-6 py-32 md:px-12 lg:px-24"
    >
      {/* Chapter header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">04</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Community
        </span>
      </div>

      {/* Title */}
      <h2 className="mb-6 max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
        Contributing to the developer ecosystem
      </h2>

      <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Beyond building software, I enjoy supporting developer communities —
        creating spaces where people can learn, collaborate, and grow together.
      </p>

      {/* Community items */}
      <div className="grid gap-6 md:grid-cols-3">
        {community.map((item, index) => (
          <div
            key={index}
            className="group border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary/40"
          >
            <item.icon className="mb-4 h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />

            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {item.role}
            </p>

            <h3 className="mt-2 mb-3 text-lg font-medium transition-colors duration-300 group-hover:text-primary">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}