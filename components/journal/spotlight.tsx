"use client"

import { useEffect, useState } from "react"

export function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Primary glow - larger and softer */}
      <div
        className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: position.x,
          top: position.y,
          background: `radial-gradient(circle, oklch(0.58 0.15 230 / 0.08) 0%, oklch(0.58 0.15 230 / 0.03) 35%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />
      {/* Secondary glow - smaller, slightly more visible core */}
      <div
        className="absolute h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: position.x,
          top: position.y,
          background: `radial-gradient(circle, oklch(0.58 0.15 230 / 0.06) 0%, transparent 60%)`,
          filter: "blur(20px)",
        }}
      />
    </div>
  )
}
