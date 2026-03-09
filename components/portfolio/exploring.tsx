import { Sparkles, Cpu, Layers, Zap } from "lucide-react"

const explorations = [
  {
    icon: Sparkles,
    title: "AI Agents in Flutter",
    description: "Building conversational agents that can understand context, call tools, and provide intelligent responses within mobile apps."
  },
  {
    icon: Cpu,
    title: "Tool Calling & Function Execution",
    description: "Implementing structured tool calling patterns that allow AI models to interact with native device features and external APIs."
  },
  {
    icon: Layers,
    title: "Agentic App Architecture",
    description: "Designing application architectures that support autonomous AI agents with planning, memory, and multi-step reasoning capabilities."
  },
  {
    icon: Zap,
    title: "On-Device AI",
    description: "Exploring ML Kit and TensorFlow Lite for privacy-preserving, low-latency AI features that run entirely on mobile devices."
  },
]

export function Exploring() {
  return (
    <section
      id="exploring"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Currently exploring"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Currently Exploring
        </h2>
      </div>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Currently Exploring
        </h3>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {explorations.map((item, index) => (
            <div 
              key={index}
              className="group relative rounded-lg border border-border bg-card/50 p-6 transition-all hover:border-primary/30 hover:bg-secondary/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h4 className="font-medium text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
