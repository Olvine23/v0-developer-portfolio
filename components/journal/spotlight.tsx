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

  console.log("[v0] Spotlight position:", position, "visible:", isVisible)
  
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Primary glow - larger and softer */}
      <div
        className="absolute h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: position.x,
          top: position.y,
          background: `radial-gradient(circle, rgba(1, 117, 194, 0.15) 0%, rgba(1, 117, 194, 0.05) 40%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      {/* Secondary glow - smaller, more visible core */}
      <div
        className="absolute h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: position.x,
          top: position.y,
          background: `radial-gradient(circle, rgba(1, 117, 194, 0.12) 0%, rgba(1, 117, 194, 0.04) 50%, transparent 70%)`,
          filter: "blur(30px)",
        }}
      />
    </div>
  )
}
