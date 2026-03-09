"use client"

import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@olvine.dev", label: "Email" },
]

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
]

export function Hero() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <Link href="/" className="hover:text-primary transition-colors duration-300">
            Olvine George
          </Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
          Flutter Developer | AI Explorer | Community Builder
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          I build delightful mobile experiences, explore AI agents, and document the journey. 
          Based in Kenya, building at the intersection of Flutter and AI.
        </p>
        
        <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
          <ul className="w-max">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="group flex items-center py-3"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social links">
        {socialLinks.map((social) => (
          <li key={social.label}>
            <Link 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
