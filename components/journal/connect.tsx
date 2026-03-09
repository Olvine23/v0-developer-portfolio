"use client"

import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react"

const links = [
  {
    label: "GitHub",
    description: "Code, experiments, and open source contributions",
    href: "https://github.com/olvinegeorge",
    icon: Github
  },
  {
    label: "Twitter / X",
    description: "Thoughts on Flutter, AI, and building in public",
    href: "https://twitter.com/olvinegeorge",
    icon: Twitter
  },
  {
    label: "LinkedIn",
    description: "Professional background and connections",
    href: "https://linkedin.com/in/olvinegeorge",
    icon: Linkedin
  },
  {
    label: "Email",
    description: "For collaborations, questions, or just to say hello",
    href: "mailto:hello@olvinegeorge.dev",
    icon: Mail
  }
]

export function Connect() {
  return (
    <section className="relative px-6 py-32 md:px-12 lg:px-24">
      {/* Chapter header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">05</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Let&apos;s Connect
        </span>
      </div>

      {/* Chapter title */}
      <h2 className="mb-6 max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
        If any of this resonated, I&apos;d love to hear from you
      </h2>
      
      <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Whether you&apos;re working on something similar, have questions about Flutter or AI, 
        or just want to connect with someone on the same journey.
      </p>

      {/* Links grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 border border-border p-6 transition-all duration-300 hover:border-primary/50 hover:bg-secondary/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
              <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium transition-colors group-hover:text-primary">
                  {link.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100" />
              </div>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
