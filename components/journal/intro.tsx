"use client"

import { ArrowDown } from "lucide-react"

export function Intro() {
  return (
    <section id="about" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-8 py-24 md:px-16 lg:px-32">
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

      <div className="pointer-events-none absolute right-[10%] top-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-[20%] h-[200px] w-[200px] rounded-full bg-primary/3 blur-[80px]" />

      <div className="relative z-10 mb-6 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">00</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Entry Point
        </span>
      </div>

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
          Olvine George
        </h1>
        <p className="mt-3 font-mono text-sm uppercase tracking-widest text-primary md:text-base">
         Software Developer & Builder
        </p>
      </div>

      <div className="relative z-10 mt-12 max-w-2xl md:mt-16">
        <p className="text-xl leading-relaxed text-secondary-foreground md:text-2xl">
          I build software across mobile and web, and explore how systems shape the way we work.
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
          Currently exploring the intersection of software systems, mobile experiences, and AI agents.
          Based in Kenya, building applications and documenting the journey.
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2">
        <div className="group flex cursor-pointer flex-col items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-primary">
          <span className="font-mono text-xs uppercase tracking-widest transition-all duration-300 group-hover:tracking-[0.2em]">
            Scroll to explore
          </span>
          <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
        </div>
      </div>
    </section>
  )
}