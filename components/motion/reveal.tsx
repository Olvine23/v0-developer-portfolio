"use client"

import { useRef, type ReactNode } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const EASE = "power3.out"

// Tailwind's `transition-all` on hover cards fights with GSAP writing
// opacity/transform inline on every tick, and the CSS transition can win the
// final value instead of GSAP — leaving the element stuck invisible.
// clearProps hands the properties back to CSS once the tween finishes, so
// there's a clean, uncontested handoff instead of two engines fighting.
const CLEAR_PROPS = "opacity,transform"

/** Fades + slides a single block into view as it scrolls into the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(ref.current, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          delay,
          ease: EASE,
          clearProps: CLEAR_PROPS,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      })
      return () => mm.revert()
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

/** Same fade + slide treatment, staggered across each direct child. */
export function StaggerReveal({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(ref.current ? Array.from(ref.current.children) : [], {
          opacity: 0,
          y: 24,
          duration: 0.7,
          stagger,
          ease: EASE,
          clearProps: CLEAR_PROPS,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      })
      return () => mm.revert()
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
