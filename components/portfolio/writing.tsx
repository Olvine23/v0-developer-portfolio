import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "Building AI Agents in Flutter: A Practical Guide",
    description: "How to integrate LLM-powered agents with tool calling capabilities into your Flutter applications.",
    publication: "Medium",
    date: "2024",
    link: "https://medium.com"
  },
  {
    title: "State Management Patterns for AI-Powered Apps",
    description: "Exploring Riverpod patterns for managing async AI responses and streaming data in Flutter.",
    publication: "Dev.to",
    date: "2024",
    link: "https://dev.to"
  },
  {
    title: "From Dart to AI: My Journey into Agentic Architecture",
    description: "Personal reflections on transitioning from traditional mobile development to AI-integrated applications.",
    publication: "Medium",
    date: "2024",
    link: "https://medium.com"
  },
  {
    title: "Building Developer Communities in Africa",
    description: "Lessons learned from organizing 50+ meetups and growing Flutter Kenya to 500+ members.",
    publication: "Dev.to",
    date: "2023",
    link: "https://dev.to"
  },
]

export function Writing() {
  return (
    <section
      id="writing"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected writing"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Writing
        </h2>
      </div>
      
      <div>
        <ul className="group/list">
          {articles.map((article, index) => (
            <li key={index} className="mb-8">
              <Link
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
              >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  {article.date} · {article.publication}
                </header>
                
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground group-hover:text-primary transition-colors inline-flex items-baseline">
                    {article.title}
                    <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1" />
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {article.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="mt-8">
          <Link 
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium leading-tight text-foreground hover:text-primary transition-colors group"
          >
            View all articles
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
