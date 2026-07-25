import { getSection } from "@/lib/content"
import { Reveal, StaggerReveal } from "@/components/motion/reveal"

export async function Experience() {
  const experiences = await getSection("experience")

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 px-6 py-32 md:px-12 lg:px-24"
    >
      {/* Chapter header */}
      <Reveal className="mb-16 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">03</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Where I&apos;ve Worked
        </span>
      </Reveal>

      {/* Title */}
      <Reveal delay={0.1}>
        <h2 className="mb-6 max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
          The places that shaped how I build software
        </h2>

        <p className="mb-16 max-w-2xl text-lg leading-relaxed  text-foreground/80">
          Over the past few years I've worked across mobile, web, and developer
          ecosystems, building products, supporting developers, and learning how
          good software teams operate.
        </p>
      </Reveal>

      {/* Experience list */}
      <StaggerReveal className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-t border-border pt-8 first:border-t-0 first:pt-0"
          >
            <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">

              {/* Timeline */}
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  {exp.period}
                </p>
                <p className="mt-1 text-sm  text-foreground/80">
                  {exp.location}
                </p>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-medium">
                  {exp.role}{" "}
                  <span className="text-muted-foreground">
                    · {exp.company}
                  </span>
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed  text-foreground/80">
                  {exp.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-secondary-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </StaggerReveal>
    </section>
  )
}
