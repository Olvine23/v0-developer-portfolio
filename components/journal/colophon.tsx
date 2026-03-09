export function Colophon() {
  return (
    <footer className="border-t border-border px-6 py-16 md:px-12 lg:px-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        {/* Left side */}
        <div>
        
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Designed and built by Olvine George 💙<br/> A small corner of the internet
            documenting the journey.
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
  );
}
