"use client"

import { ArrowUpRight } from "lucide-react"

const writings = [
  {
    title: "How to Build an AI Agent in Flutter Using Tool Calling",
    excerpt: "Learn how to build an AI agent in Flutter using tool calling. This step-by-step guide explains tools, the agentic loop, and how Flutter apps can execute real actions with AI.",
    publication: "Medium",
    date: "March 2026",
    link: "https://medium.com/@olivinegeorge/how-to-build-an-ai-agent-in-flutter-using-tool-calling-ee7e5be05188"
  },
  {
    title: "Jaspr: Building Websites with Dart the Flutter Way",
    excerpt: "What if Flutter developers could build real websites using Dart without fighting the web platform? Jaspr makes that possible. In this article, we explore how this lightweight framework brings a Flutter-like experience to modern web development.",
    publication: "Medium",
    date: "Jan 2026",
    link: "https://medium.com/@olivinegeorge/jaspr-building-websites-with-dart-the-flutter-way-5e05b0d3a7e1"
  },
  {
    title: "flutter_extend: The Productivity Boost Your Flutter Code Deserves",
    excerpt: "Flutter is great, but sometimes the boilerplate gets in the way. Tasks like navigation, padding, and layout can quickly become repetitive. flutter_extend introduces a cleaner, more expressive way to write Flutter code using simple extensions that reduce clutter and speed up development.",
    publication: "Medium",
    date: "Dec 2025",
    link: "https://medium.com/@olivinegeorge/flutter-extend-the-productivity-boost-your-flutter-code-deserves-093751c94f35"
  },
  {
    title: "Clean Architecture for Dummies",
    excerpt: "Clean Architecture often sounds like something reserved for senior engineers and complex systems. But at its core, it’s simply about organizing code so each part of your application has a clear responsibility. In this article, we break it down using simple analogies and show how separating UI, domain, and data layers makes your code easier to maintain and scale..",
    publication: "Medium",
    date: "Dec 2025",
    link: "https://medium.com/@olivinegeorge/clean-architecture-for-dummies-6a8e48d49756"
  }
]

export function Ideas() {
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
