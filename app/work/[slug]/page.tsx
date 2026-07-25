import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"
import { getProject } from "@/lib/content"

export const dynamic = "force-dynamic"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Olvine George`,
    description: project.summary,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24">
      <Link
        href="/#projects"
        className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <div className="mb-8 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
          {project.category}
        </span>
        <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        <span className="font-mono text-xs text-muted-foreground">· {project.status}</span>
      </div>

      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{project.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/80">
        {project.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.link || project.repoLink) && (
        <div className="mt-8 flex flex-wrap gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              View live
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Github className="h-4 w-4" />
              View source
            </a>
          )}
        </div>
      )}

      {project.coverImage && (
        <div className="relative mt-16 aspect-video w-full overflow-hidden rounded-lg border border-border">
          <Image src={project.coverImage} alt={project.title} fill className="object-cover" priority />
        </div>
      )}

      {project.caseStudy && (
        <div className="mt-16 max-w-2xl whitespace-pre-line text-base leading-relaxed text-foreground/90">
          {project.caseStudy}
        </div>
      )}

      {project.screenshots.length > 0 && (
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {project.screenshots.map((url) => (
            <div key={url} className="relative aspect-video overflow-hidden rounded-lg border border-border">
              <Image src={url} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
