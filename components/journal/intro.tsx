"use client"

import { ArrowDown } from "lucide-react"

export function Intro() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-8 py-24 md:px-16 lg:px-32">
      {/* Subtle grid texture on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Soft glow accent */}
      <div className="pointer-events-none absolute right-[10%] top-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-[20%] h-[200px] w-[200px] rounded-full bg-primary/3 blur-[80px]" />

      {/* Chapter indicator */}
      <div className="relative z-10 mb-10 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">00</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Entry Point
        </span>
      </div>

      {/* Main statement - centered with max-width */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
          I build things that live on screens and think about how software shapes the way we work.
        </h1>
        
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Currently exploring the intersection of mobile development and AI agents. 
          Based in Kenya, shipping Flutter apps and documenting the journey.
        </p>
      </div>

      {/* Identity block */}
      <div className="relative z-10 mt-14 grid max-w-3xl gap-8 border-t border-border pt-8 md:grid-cols-3">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Name
          </span>
          <p className="mt-2">Olvine George</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Focus
          </span>
          <p className="mt-2">Flutter, AI, Technical Writing</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Location
          </span>
          <p className="mt-2">Kenya</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-mono text-xs uppercase tracking-widest">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
