"use client"

const milestones = [
  {
    year: "2026",
    title: "Building and Sharing",
    description:
      "By this point, development had become more than writing code. I was building applications across mobile and web, documenting what I learned, and contributing to developer communities while continuing to grow through practice.",
    technologies: ["Mobile Apps", "Web Development", "Technical Writing", "Community"]
  },
  {
    year: "2022",
    title: "Discovering Flutter",
    description:
      "After exploring different web and mobile frameworks, I discovered Flutter and quickly connected with the developer experience. It became a major part of how I built applications and how I started sharing what I was learning.",
    technologies: ["Flutter", "Dart", "Firebase", "Cross-Platform"]
  },
  {
    year: "2021",
    title: "Frontend and Mobile Exploration",
    description:
      "This was a season of experimentation. I spent time building interfaces with React and later explored React Native, learning how different tools approached the same problems and expanding how I thought about application development.",
    technologies: ["React", "React Native", "JavaScript", "REST APIs"]
  },
  {
    year: "2019",
    title: "First Lines of Code",
    description:
      "I wrote my first Hello World with Python and began experimenting with Django and basic web development. The projects were small, but they sparked the curiosity that pushed me deeper into software development.",
    technologies: ["Python", "Django", "HTML/CSS", "Git"]
  }
]

export function Evolution() {
  return (
    <section className="relative px-6 py-32 md:px-12 lg:px-24">
      {/* Chapter header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">06</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          How I Got Here
        </span>
      </div>

      {/* Chapter title */}
      <h2 className="mb-6 max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
        The evolution of a developer
      </h2>
      
      <p className="mb-16 max-w-2xl text-lg leading-relaxed  text-foreground/80">
        Every year brought new tools, new problems, and new ways of thinking. 
        Here&apos;s the path that led me to where I am now.
      </p>

      {/* Timeline - Mobile: simple left-aligned, Desktop: centered alternating */}
      <div className="relative">
        {/* Vertical line - left on mobile, center on desktop */}
        <div className="absolute bottom-0 left-[11px] top-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

        <div className="space-y-10 md:space-y-16">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`relative md:flex md:items-start ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot - Mobile */}
              <div className="absolute left-0 top-0 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background md:hidden">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              {/* Timeline dot - Desktop */}
              <div className="group/dot absolute left-1/2 top-0 z-10 hidden h-8 w-8 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background transition-all duration-300 hover:scale-125 hover:border-primary/50 md:flex">
                <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover/dot:scale-150" />
              </div>

              {/* Year badge - Desktop only, above the dot */}
              <div className="hidden md:absolute md:left-1/2 md:top-0 md:block md:-translate-x-1/2 md:-translate-y-full md:pb-4">
                <span className="font-mono text-2xl font-medium text-primary">
                  {milestone.year}
                </span>
              </div>

              {/* Content */}
              <div className={`pl-10 md:flex-1 md:pl-0 ${
                index % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"
              }`}>
                {/* Year badge - Mobile only, inline */}
                <span className="mb-1 block font-mono text-sm font-medium text-primary md:hidden">
                  {milestone.year}
                </span>
                
                <h3 className="mb-2 text-lg font-medium transition-colors duration-300 hover:text-primary md:text-xl">
                  {milestone.title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed  text-foreground/80">
                  {milestone.description}
                </p>
                <div className={`flex flex-wrap gap-1.5 md:gap-2 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}>
                  {milestone.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spacer for alternating layout - Desktop only */}
              <div className="hidden flex-1 md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
