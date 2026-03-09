"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import clsx from "clsx"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Exploring", href: "#exploring" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-24">
        <a
  href="#top"
  className="group flex items-center"
  aria-label="Go to top"
>
  <div className="flex items-center rounded-md border border-border px-3 py-1.5 text-lg font-semibold tracking-wide transition-all duration-300 group-hover:border-primary/40">
    <span className="text-primary">O</span>
    <span className="text-foreground transition-colors duration-300 group-hover:text-primary">
      G
    </span>
  </div>
</a>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:text-primary md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="mb-12 flex items-center justify-between">
            <span className="text-sm font-medium tracking-wide text-foreground">
               <div className="flex items-center rounded-md border border-border px-3 py-1.5 text-lg font-semibold tracking-wide transition-all duration-300 group-hover:border-primary/40">
    <span className="text-primary">O</span>
    <span className="text-foreground transition-colors duration-300 group-hover:text-primary">
      G
    </span>
  </div>
            </span>

            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:text-primary"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-6">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center gap-4 border-b border-border/50 pb-4"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}