import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Flutter AI Chat",
    description: "A mobile chat application powered by AI agents with tool calling capabilities. Built to explore how agentic architectures can enhance mobile UX.",
    technologies: ["Flutter", "Dart", "OpenAI", "Firebase"],
    github: "https://github.com",
    demo: null,
    featured: true
  },
  {
    title: "Community Events App",
    description: "Event management app for Flutter Kenya community. Handles registrations, schedules, and networking features for over 500 community members.",
    technologies: ["Flutter", "Supabase", "Riverpod"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true
  },
  {
    title: "AI Document Scanner",
    description: "Mobile app that uses on-device ML for document scanning and AI for intelligent text extraction and summarization.",
    technologies: ["Flutter", "ML Kit", "GPT-4"],
    github: "https://github.com",
    demo: null,
    featured: true
  },
  {
    title: "Expense Tracker",
    description: "Personal finance app with M-Pesa integration for the Kenyan market. Features AI-powered spending insights and categorization.",
    technologies: ["Flutter", "Firebase", "M-Pesa API"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false
  },
  {
    title: "Developer Portfolio Template",
    description: "Open-source Flutter web portfolio template with smooth animations and responsive design. Used by 100+ developers.",
    technologies: ["Flutter Web", "Animations", "Responsive"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>
      
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <Link 
                      href={project.demo || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}
                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
                      </span>
                    </Link>
                  </h3>
                  
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-4">
                    {project.github && (
                      <Link 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    )}
                    {project.demo && (
                      <Link 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                  
                  <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {project.featured && (
                  <div className="z-10 sm:order-1 sm:col-span-2">
                    <span className="text-xs font-medium text-primary/60">Featured</span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
