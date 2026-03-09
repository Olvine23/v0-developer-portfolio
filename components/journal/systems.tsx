"use client"

import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "MoviePlug",
    category: "Mobile App",
    description:
      "An AI-powered movie recommendation app built to help users discover what to watch next. Currently live on the Play Store with 1K+ downloads.",
    technologies: ["Flutter", "Firebase", "AI"],
    link: "https://play.google.com/store/apps/details?id=com.ollytech.movieplug",
    year: "2025",
    status: "Live"
  },
  {
    title: "VoiceHub",
    category: "Mobile App",
    description:
      "A platform where artists express creativity through spoken word. VoiceHub allows creators to share poetry, storytelling, and audio art while building a community around voice-driven expression.",
    technologies: ["Flutter", "Firebase"],
    link: "#",
    year: "2024",
    status: "In Progress"
  },
  {
    title: "Stamp",
    category: "Mobile App",
    description:
      "A digital memory journal designed to help people capture meaningful everyday moments. Stamp turns small life experiences into lasting memories through simple entries and reflections.",
    technologies: ["Flutter"],
    link: "#",
    year: "2024",
    status: "In Progress"
  }
]
function StatusBadge({ status }: { status: string }) {
  const colors = {
    Live: "bg-green-500",
    "In Progress": "bg-yellow-500",
    Community: "bg-blue-500"
  }

  return (
    <div className="flex items-center gap-2 rounded-full border border-border px-2 py-1 text-xs font-mono text-muted-foreground">
      <span className={`h-2 w-2 rounded-full ${colors[status as keyof typeof colors]}`} />
      {status}
    </div>
  )
}

export function Systems() {
  return (
    <section id="projects" className="relative px-6 py-32 md:px-12 lg:px-24">
      {/* Chapter header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">02</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          What I&apos;ve Built
        </span>
      </div>

      {/* Chapter title */}
      <h2 className="mb-6 max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
        Things I&apos;ve shipped and experiments that taught me something
      </h2>

      <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Some are polished products. Others are experiments that helped me understand something new.
      </p>

      {/* Projects list */}
      <div className="space-y-1">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-t border-border py-8 transition-all duration-300 first:border-t-0 hover:bg-secondary/30 hover:pl-4"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              
              {/* Left side */}
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-4">
                  <h3 className="text-xl font-medium transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary group-hover:opacity-100" />
                </div>

                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Right side */}
              <div className="flex flex-col items-start gap-3 md:items-end md:text-right">

                <StatusBadge status={project.status} />

                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  {project.category}
                </span>

                <span className="font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>

                <div className="mt-2 flex flex-wrap gap-2 md:justify-end">
                  {project.technologies.map((tech, i) => (
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