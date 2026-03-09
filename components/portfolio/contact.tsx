import { ArrowUpRight, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Contact
        </h2>
      </div>
      
      <div className="max-w-lg">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          {"Let's Connect"}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          {"I'm always excited to chat about Flutter, AI, community building, or new opportunities. "} 
          Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is open.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="mailto:hello@olvine.dev"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mail className="h-4 w-4" />
            Send an Email
          </Link>
          
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <MessageCircle className="h-4 w-4" />
            DM on Twitter
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  )
}
