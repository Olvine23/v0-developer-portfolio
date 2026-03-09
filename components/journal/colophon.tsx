export function Colophon() {
  return (
    <footer className="border-t border-border px-6 py-16 md:px-12 lg:px-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        {/* Left side */}
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Colophon
          </p>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Built with Next.js and Tailwind CSS. Typeset in Space Grotesk and JetBrains Mono. 
            The Flutter blue accent is a nod to where this journey started.
          </p>
        </div>

        {/* Right side */}
        <div className="text-right">
          <p className="font-mono text-xs text-muted-foreground">
            Olvine George
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Kenya, {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
