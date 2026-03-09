"use client"

import { ArrowUpRight } from "lucide-react"

const systems = [
  {
    title: "Maisha",
    category: "Mobile App",
    description: "A personal finance companion built with Flutter. Real-time expense tracking, smart categorization, and insights that actually help people understand their spending patterns.",
    technologies: ["Flutter", "Firebase", "ML Kit"],
    link: "#",
    year: "2024"
  },
  {
    title: "DocuMind",
    category: "AI Tool",
    description: "An AI-powered documentation assistant that learns your codebase. Ask questions in natural language, get answers with context. Built during my deep dive into RAG systems.",
    technologies: ["Python", "LangChain", "Pinecone"],
    link: "#",
    year: "2024"
  },
  {
    title: "FlutterFlow Plugins",
    category: "Open Source",
    description: "A collection of custom actions and widgets for FlutterFlow. Bridging the gap between no-code and code, making advanced functionality accessible.",
    technologies: ["Dart", "Flutter", "FlutterFlow"],
    link: "#",
    year: "2023"
  },
  {
    title: "Nairobi Dev Community",
    category: "Community",
    description: "Co-organizing monthly Flutter meetups and technical workshops. Building a space where developers in Kenya can learn, share, and grow together.",
    technologies: ["Community", "Education", "Mentorship"],
    link: "#",
    year: "2023"
  }
]

export function Systems() {
  return (
    <section className="relative px-6 py-32 md:px-12 lg:px-24">
      {/* Chapter header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">02</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Systems I&apos;ve Built
        </span>
      </div>

      {/* Chapter title */}
      <h2 className="mb-6 max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
        Things I&apos;ve shipped and experiments that taught me something
      </h2>
      
      <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Not everything here is perfect. Some are polished products, others are 
        learning projects that helped me understand something new.
      </p>

      {/* Systems list */}
      <div className="space-y-1">
        {systems.map((system, index) => (
          <a
            key={index}
            href={system.link}
            className="group block border-t border-border py-8 transition-all duration-300 first:border-t-0 hover:bg-secondary/30 hover:pl-4"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              {/* Left side */}
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-4">
                  <h3 className="text-xl font-medium transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                    {system.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary group-hover:opacity-100" />
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {system.description}
                </p>
              </div>

              {/* Right side */}
              <div className="flex flex-col items-start gap-2 md:items-end md:text-right">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  {system.category}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {system.year}
                </span>
                <div className="mt-2 flex flex-wrap gap-2 md:justify-end">
                  {system.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground transition-all duration-200 group-hover:border-primary/30 group-hover:text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
