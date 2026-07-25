"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FramedImage } from "@/components/media/framed-image"
import type { Project, ProjectStatus } from "@/lib/types"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const STATUS_COLORS: Record<ProjectStatus, string> = {
  Live: "bg-green-500",
  "In Progress": "bg-yellow-500",
  Community: "bg-blue-500",
}

type ViewTransition = {
  ready: Promise<void>
  finished: Promise<void>
  updateCallbackDone: Promise<void>
}

function navigateWithViewTransition(
  event: React.MouseEvent,
  href: string,
  router: ReturnType<typeof useRouter>
) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
    return // let modifier-clicks / middle-click behave normally (open in new tab, etc.)
  }
  const canUseViewTransition = typeof document !== "undefined" && "startViewTransition" in document
  if (!canUseViewTransition) return // plain Link navigation, no enhancement available

  event.preventDefault()
  const doc = document as unknown as {
    startViewTransition: (cb: () => void | Promise<void>) => ViewTransition
  }

  const transition = doc.startViewTransition(
    () =>
      new Promise<void>((resolve) => {
        router.push(href)
        // `/work/[slug]` is force-dynamic, so this navigation is a real
        // server round-trip — there's no reliable "committed" signal from
        // router.push() itself, so poll for the URL to actually change,
        // bounded well under the browser's own ~4s abort timeout so a slow
        // response degrades to "transition fires slightly early" rather
        // than "navigation silently fails."
        const deadline = performance.now() + 1500
        const poll = () => {
          if (window.location.pathname === href || performance.now() > deadline) {
            resolve()
          } else {
            requestAnimationFrame(poll)
          }
        }
        requestAnimationFrame(poll)
      })
  )

  // A transition that can't complete (e.g. the browser aborts it) must never
  // take the navigation down with it as an unhandled rejection.
  transition.finished.catch(() => {})
  transition.ready.catch(() => {})
}

function ProjectImage({ project }: { project: Project }) {
  const cover = project.coverImage ?? project.screenshots[0] ?? null

  if (!cover) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary via-background to-primary/10">
        <span className="font-mono text-8xl font-medium text-foreground/10">
          {project.title.slice(0, 1)}
        </span>
      </div>
    )
  }

  return <FramedImage src={cover} alt={project.title} />
}

function CarouselCard({
  project,
  onNavigate,
}: {
  project: Project
  onNavigate: (event: React.MouseEvent, href: string) => void
}) {
  const href = `/work/${project.slug}`

  return (
    <Link
      href={href}
      onClick={(e) => onNavigate(e, href)}
      className="group relative block aspect-[4/5] w-[85vw] shrink-0 snap-center overflow-hidden rounded-xl border border-border sm:w-[70vw] md:w-[520px]"
      style={project.coverImage ? { viewTransitionName: `project-cover-${project.slug}` } : undefined}
    >
      {/* FramedImage's own blurred backdrop layer already scales up for
          buffer, so this wrapper just needs to be the parallax target. */}
      <div className="absolute inset-0" data-parallax-image>
        <ProjectImage project={project} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent transition-opacity duration-300 group-hover:from-background/95" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-2 py-1 text-xs font-mono text-muted-foreground backdrop-blur-sm">
            <span className={`h-2 w-2 rounded-full ${STATUS_COLORS[project.status]}`} />
            {project.status}
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-medium text-foreground transition-transform duration-300 group-hover:translate-x-1">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary group-hover:opacity-100" />
        </div>

        <p className="max-w-md text-sm leading-relaxed text-foreground/80">{project.summary}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/60 bg-background/50 px-2 py-0.5 font-mono text-xs text-muted-foreground backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const router = useRouter()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(projects.length > 1)

  function handleNavigate(event: React.MouseEvent, href: string) {
    navigateWithViewTransition(event, href, router)
  }

  function cardStep() {
    const el = scrollRef.current
    const first = el?.children[0] as HTMLElement | undefined
    if (!el || !first) return 0
    const gap = parseFloat(getComputedStyle(el).columnGap || "0")
    return first.getBoundingClientRect().width + gap
  }

  function scrollByCard(direction: 1 | -1) {
    scrollRef.current?.scrollBy({ left: direction * cardStep(), behavior: "smooth" })
  }

  function scrollToIndex(index: number) {
    const el = scrollRef.current
    if (!el) return
    el.scrollTo({ left: index * cardStep(), behavior: "smooth" })
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    function updateFromScroll() {
      if (!el) return
      const step = cardStep()
      if (step > 0) setActiveIndex(Math.round(el.scrollLeft / step))
      setCanScrollPrev(el.scrollLeft > 8)
      setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
    }

    updateFromScroll()
    el.addEventListener("scroll", updateFromScroll, { passive: true })
    window.addEventListener("resize", updateFromScroll)
    return () => {
      el.removeEventListener("scroll", updateFromScroll)
      window.removeEventListener("resize", updateFromScroll)
    }
  }, [projects.length])

  // Subtle parallax: each card's image drifts opposite the carousel's own
  // scroll direction as it crosses the visible width, using GSAP's documented
  // pattern for a horizontally-scrolling container as its own ScrollTrigger
  // scroller (not the page scroll Lenis manages).
  useGSAP(
    () => {
      const container = scrollRef.current
      if (!container) return
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const images = container.querySelectorAll<HTMLElement>("[data-parallax-image]")
        images.forEach((img) => {
          const card = img.closest("a")
          if (!card) return
          gsap.fromTo(
            img,
            { xPercent: -6 },
            {
              xPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                scroller: container,
                horizontal: true,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          )
        })
      })
      return () => mm.revert()
    },
    { scope: scrollRef, dependencies: [projects.length] }
  )

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <CarouselCard key={project.slug} project={project} onNavigate={handleNavigate} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              aria-label={`Go to ${project.title}`}
              onClick={() => scrollToIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous project"
            disabled={!canScrollPrev}
            onClick={() => scrollByCard(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            disabled={!canScrollNext}
            onClick={() => scrollByCard(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
