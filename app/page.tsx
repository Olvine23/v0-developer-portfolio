import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Writing } from "@/components/portfolio/writing"
import { Exploring } from "@/components/portfolio/exploring"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { Spotlight } from "@/components/portfolio/spotlight"

export default function Home() {
  return (
    <div className="group/spotlight relative min-h-screen bg-background">
      {/* Mouse spotlight effect */}
      <Spotlight />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left sticky panel */}
          <Hero />
          
          {/* Right scrollable content */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Writing />
            <Exploring />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/3 blur-3xl" />
      </div>
    </div>
  )
}
