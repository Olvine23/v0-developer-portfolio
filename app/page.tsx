import { Intro } from "@/components/journal/intro"
import { CurrentFocus } from "@/components/journal/current-focus"
import { Systems } from "@/components/journal/systems"
import { Ideas } from "@/components/journal/ideas"
import { Evolution } from "@/components/journal/evolution"
import { Connect } from "@/components/journal/connect"
import { Colophon } from "@/components/journal/colophon"
import { Spotlight } from "@/components/journal/spotlight"
import { Navbar } from "@/components/journal/navbar"
import { Experience } from "@/components/journal/experience"
import { Community } from "@/components/journal/community"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Mouse-follow spotlight effect */}
      <Spotlight />
      
      {/* Subtle noise texture overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <Navbar />

      {/* Chapters */}
      <Intro />
      
      <div className="mx-auto max-w-6xl">
        <CurrentFocus />
        <Systems />
        <Experience />
        <Community />
      </div>
      
      <Ideas />
      
      <div className="mx-auto max-w-6xl">
        <Evolution />
        <Connect />
      </div>
      
      <Colophon />
    </main>
  )
}
