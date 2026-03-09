"use client"

import { ArrowDown } from "lucide-react"

export function Intro() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 py-24 md:px-12 lg:px-24">
      {/* Chapter indicator */}
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">00</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Entry Point
        </span>
      </div>

      {/* Main statement */}
      <div className="max-w-4xl">
        <h1 className="text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl">
          I build things that live on screens and think about how software shapes the way we work.
        </h1>
        
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Currently exploring the intersection of mobile development and AI agents. 
          Based in Kenya, shipping Flutter apps and documenting the journey.
        </p>
      </div>

      {/* Identity block */}
      <div className="mt-16 grid gap-8 border-t border-border pt-8 md:grid-cols-3">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Name
          </span>
          <p className="mt-2 text-lg">Olvine George</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Focus
          </span>
          <p className="mt-2 text-lg">Flutter, AI, Technical Writing</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Location
          </span>
          <p className="mt-2 text-lg">Kenya</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-mono text-xs uppercase tracking-widest">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
