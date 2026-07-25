import { getSection } from "@/lib/content"
import { Reveal } from "@/components/motion/reveal"
import { ProjectCarousel } from "@/components/journal/project-carousel"

export async function Systems() {
  const projects = await getSection("projects")

  return (
    <section id="projects" className="relative px-6 py-32 md:px-12 lg:px-24">
      {/* Chapter header */}
      <Reveal className="mb-16 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">02</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          What I&apos;ve Built
        </span>
      </Reveal>

      {/* Chapter title */}
      <Reveal delay={0.1}>
        <h2 className="mb-6 max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
          Things I&apos;ve shipped and experiments that taught me something
        </h2>

        <p className="mb-16 max-w-2xl text-lg leading-relaxed  text-foreground/80">
          Some are polished products. Others are experiments that helped me understand something new.
        </p>
      </Reveal>

      <ProjectCarousel projects={projects} />
    </section>
  )
}
