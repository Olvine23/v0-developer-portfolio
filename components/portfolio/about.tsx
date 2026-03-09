export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>
      
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          My journey into tech started with curiosity and a smartphone. Growing up in Kenya, 
          I was fascinated by how mobile apps could solve real problems for people around me. 
          That curiosity led me to <span className="text-foreground font-medium">Flutter</span>, 
          where I discovered the joy of building beautiful, cross-platform experiences with a single codebase.
        </p>
        
        <p>
          Today, I spend my time at the intersection of <span className="text-foreground font-medium">mobile development and artificial intelligence</span>. 
          I&apos;m particularly excited about AI agents and how they can be integrated into Flutter apps to create 
          more intelligent, context-aware mobile experiences. From tool calling to agentic architectures, 
          I&apos;m exploring what&apos;s possible when we bring AI capabilities directly into the apps people use every day.
        </p>
        
        <p>
          Beyond code, I&apos;m deeply invested in <span className="text-foreground font-medium">community building</span>. 
          I organize developer meetups, speak at conferences, and mentor aspiring developers across Africa. 
          I believe that technology is only as powerful as the communities that build and share it.
        </p>
        
        <p>
          When I&apos;m not coding or writing, you&apos;ll find me documenting my learnings through 
          <span className="text-foreground font-medium"> technical articles</span>, 
          contributing to open source, or exploring Nairobi&apos;s vibrant tech scene.
        </p>
      </div>
    </section>
  )
}
