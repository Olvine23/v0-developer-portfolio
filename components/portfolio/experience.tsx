import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "2023 — Present",
    title: "Flutter Developer & AI Explorer",
    company: "Independent",
    description: "Building mobile applications with Flutter while exploring the integration of AI agents and tool calling into mobile experiences. Experimenting with agentic app architectures.",
    technologies: ["Flutter", "Dart", "AI SDK", "LangChain", "Firebase"],
    link: null
  },
  {
    period: "2022 — Present",
    title: "Community Lead",
    company: "Flutter Kenya",
    description: "Organizing developer meetups, workshops, and hackathons. Building a vibrant community of Flutter developers across Kenya and East Africa. Mentoring over 50 developers.",
    technologies: ["Community Building", "Event Planning", "Mentorship"],
    link: "https://flutter.dev"
  },
  {
    period: "2022 — Present",
    title: "Technical Writer",
    company: "Medium & Dev.to",
    description: "Writing in-depth technical articles about Flutter, AI integration, and mobile development best practices. Building an audience of 5,000+ readers.",
    technologies: ["Technical Writing", "Documentation", "Flutter", "AI"],
    link: "https://medium.com"
  },
  {
    period: "2021 — 2023",
    title: "Mobile Developer",
    company: "Tech Startup",
    description: "Led mobile development for a fintech startup, building cross-platform applications that served thousands of users across multiple African countries.",
    technologies: ["Flutter", "Firebase", "REST APIs", "State Management"],
    link: null
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>
      
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  {exp.period}
                </header>
                
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    {exp.link ? (
                      <Link 
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {exp.title} · <span className="inline-block">{exp.company}</span>
                          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
                        </span>
                      </Link>
                    ) : (
                      <span>
                        {exp.title} · <span className="inline-block">{exp.company}</span>
                      </span>
                    )}
                  </h3>
                  
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {exp.description}
                  </p>
                  
                  <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
                    {exp.technologies.map((tech) => (
                      <li key={tech}>
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
