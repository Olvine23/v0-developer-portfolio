import { ArrowUpRight } from "lucide-react"
import { getSection } from "@/lib/content"

export async function Ideas() {
  const writings = await getSection("writings")

  return (
    <section className="relative bg-secondary/30 px-6 py-32 md:px-12 lg:px-24">
      {/* Chapter header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">05</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Technical Ideas & Writing
        </span>
      </div>

      {/* Chapter title */}
      <h2 className="mb-6 max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
        Thoughts I&apos;ve written down
      </h2>

      <p className="mb-16 max-w-2xl text-lg leading-relaxed  text-foreground/80">
        Writing helps me think. These are attempts to explain things I&apos;ve learned,
        patterns I&apos;ve noticed, and problems I&apos;m still figuring out.
      </p>

      {/* Articles grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {writings.map((article, index) => (
          <a
            key={index}
            href={article.link}
            className="group flex flex-col border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                {article.publication}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {article.date}
              </span>
            </div>

            <h3 className="mb-3 text-lg font-medium leading-snug transition-all duration-300 group-hover:text-primary">
              {article.title}
            </h3>

            <p className="mb-6 flex-1 text-sm leading-relaxed  text-foreground/80">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:gap-3">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">Read article</span>
              <ArrowUpRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
