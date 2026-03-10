"use client";

import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "GitHub",
    description: "Code, experiments, and open source contributions",
    href: "https://github.com/Olvine23",
    icon: Github,
  },
  {
    label: "Twitter / X",
    description: "Thoughts on Flutter, AI, and building in public",
    href: "https://twitter.com/GeorgeOlivine",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    description: "Professional background and connections",
    href: "https://www.linkedin.com/in/olivine-george-020404193/",
    icon: Linkedin,
  },
  {
    label: "Email",
    description: "For collaborations, questions, or just to say hello",
    href: "mailto:olivinegeorge@gmail.com",
    icon: Mail,
  },
];

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

      <p className="mb-16 max-w-2xl text-lg leading-relaxed  text-foreground/80">
        If any part of this journey resonated with you, feel free to reach out.
        I’m always open to conversations, collaborations, or simply connecting
        with fellow builders.
      </p>

      {/* Links grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-secondary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:scale-110">
              <link.icon className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="relative font-medium transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:text-primary group-hover:after:w-full">
                  {link.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary group-hover:opacity-100" />
              </div>
              <p className="text-sm  text-foreground/80">
                {link.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
