import Link from "next/link"

export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
      <p className="leading-relaxed">
        Loosely inspired by{" "}
        <Link 
          href="https://brittanychiang.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Brittany Chiang
        </Link>
        {" "}and coded in{" "}
        <Link 
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Visual Studio Code
        </Link>
        . Built with{" "}
        <Link 
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Next.js
        </Link>
        {" "}and{" "}
        <Link 
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Tailwind CSS
        </Link>
        , deployed on{" "}
        <Link 
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Vercel
        </Link>
        .
      </p>
    </footer>
  )
}
