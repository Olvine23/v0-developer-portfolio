"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FramedImage } from "@/components/media/framed-image"

gsap.registerPlugin(ScrollTrigger, useGSAP)

/** Wraps FramedImage with a clip-path wipe-in as it scrolls into view. */
export function ImageReveal({
  src,
  alt,
  containerClassName,
  priority,
}: {
  src: string
  alt: string
  containerClassName?: string
  priority?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          containerRef.current,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
      })
      return () => mm.revert()
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className={containerClassName}>
      <FramedImage src={src} alt={alt} priority={priority} onLoad={() => ScrollTrigger.refresh()} />
    </div>
  )
}
