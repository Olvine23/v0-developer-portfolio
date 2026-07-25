"use client"

import { cloneElement, isValidElement, useRef, type ReactElement } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"

gsap.registerPlugin(useGSAP)

/**
 * Pulls its single child toward the cursor on hover. No wrapper element —
 * the ref and handlers attach directly to the child (must be a host element
 * like <a>/<button>/<div>) so it doesn't disturb surrounding grid/flex layout.
 */
export function Magnetic({
  children,
  strength = 0.35,
}: {
  children: ReactElement
  strength?: number
}) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      if (window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return

      const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" })
      const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" })

      function handleMove(event: MouseEvent) {
        const rect = el!.getBoundingClientRect()
        xTo((event.clientX - rect.left - rect.width / 2) * strength)
        yTo((event.clientY - rect.top - rect.height / 2) * strength)
      }

      function handleLeave() {
        xTo(0)
        yTo(0)
      }

      el.addEventListener("mousemove", handleMove)
      el.addEventListener("mouseleave", handleLeave)

      return () => {
        el.removeEventListener("mousemove", handleMove)
        el.removeEventListener("mouseleave", handleLeave)
      }
    },
    { scope: ref }
  )

  if (!isValidElement(children)) return children

  return cloneElement(children as ReactElement<{ ref?: React.Ref<HTMLElement> }>, { ref })
}
