"use client"

import { Sparkles, Bot, Smartphone } from "lucide-react"

const explorations = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Building autonomous systems that can reason, plan, and execute. Exploring how LLMs can become reliable collaborators in development workflows.",
    status: "Active exploration"
  },
  {
    icon: Smartphone,
    title: "Flutter Internals",
    description: "Going deeper into rendering pipelines, custom painters, and performance optimization. Understanding the framework beyond the widget tree.",
    status: "Ongoing learning"
  },
  {
    icon: Sparkles,
    title: "AI + Mobile",
    description: "Bringing intelligence to mobile apps. On-device ML, smart assistants, and creating experiences that adapt to user behavior.",
    status: "Current project"
  }
]

export function CurrentFocus() {
  return (
    <section className="relative px-6 py-32 md:px-12 lg:px-24">
      {/* Chapter header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">01</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          What I&apos;m Exploring Now
        </span>
      </div>

      {/* Chapter title */}
      <h2 className="mb-6 max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
        The questions I&apos;m currently trying to answer
      </h2>
      
      <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        These are the rabbit holes I find myself in. Not portfolio projects, 
        but genuine curiosities that keep me building late into the night.
      </p>

      {/* Exploration cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {explorations.map((item, index) => (
          <div 
            key={index}
            className="group relative border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-secondary/50 hover:shadow-xl hover:shadow-primary/5"
          >
            {/* Status badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              <span className="font-mono text-xs text-primary">{item.status}</span>
            </div>

            <item.icon className="mb-4 h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
            
            <h3 className="mb-3 text-xl font-medium transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
