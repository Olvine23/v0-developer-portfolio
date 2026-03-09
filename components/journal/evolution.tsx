"use client"

const milestones = [
  {
    year: "2024",
    title: "The AI Turn",
    description: "Started seriously exploring AI agents and LLMs. Built my first RAG system, contributed to open source AI tools, and began thinking about how mobile apps will change with on-device intelligence.",
    technologies: ["LangChain", "OpenAI", "Vector DBs", "Python"]
  },
  {
    year: "2023",
    title: "Going Deeper",
    description: "Moved beyond building apps to understanding systems. Started contributing to the Flutter community, gave my first tech talk, and began writing about what I learned.",
    technologies: ["Flutter Advanced", "Riverpod", "Custom Painters", "Technical Writing"]
  },
  {
    year: "2022",
    title: "The Flutter Chapter",
    description: "Discovered Flutter and fell in love with the developer experience. Built my first production app, learned Dart deeply, and started understanding why cross-platform development matters.",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs"]
  },
  {
    year: "2021",
    title: "First Code",
    description: "Started learning to code with Python and web technologies. Built small projects, broke things, fixed them, and realized this is what I wanted to do.",
    technologies: ["Python", "HTML/CSS", "JavaScript", "Git"]
  }
]

export function Evolution() {
  return (
    <section className="relative px-6 py-32 md:px-12 lg:px-24">
      {/* Chapter header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">04</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          How I Got Here
        </span>
      </div>

      {/* Chapter title */}
      <h2 className="mb-6 max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
        The evolution of a developer
      </h2>
      
      <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Every year brought new tools, new problems, and new ways of thinking. 
        Here&apos;s the path that led me to where I am now.
      </p>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute bottom-0 left-4 top-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

        {milestones.map((milestone, index) => (
          <div 
            key={index}
            className={`relative mb-16 flex flex-col gap-8 last:mb-0 md:flex-row md:items-start ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background md:left-1/2">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>

            {/* Year badge - centered on desktop */}
            <div className="absolute left-4 top-12 md:left-1/2 md:top-0 md:-translate-x-1/2 md:-translate-y-full md:pb-4">
              <span className="font-mono text-2xl font-medium text-primary">
                {milestone.year}
              </span>
            </div>

            {/* Content */}
            <div className={`ml-16 flex-1 md:ml-0 ${
              index % 2 === 0 ? "md:pr-24 md:text-right" : "md:pl-24"
            }`}>
              <div className="mt-10 md:mt-0">
                <h3 className="mb-3 text-xl font-medium">{milestone.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {milestone.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}>
                  {milestone.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden flex-1 md:block" />
          </div>
        ))}
      </div>
    </section>
  )
}
