import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">R</span>
            </div>
            <span className="text-xl font-bold">
              <span className="text-foreground">Rev</span>
              <span className="text-primary">Repo</span>
            </span>
          </Link>

          {/* Contact info */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a
              href="mailto:sales@revrepo.in"
              className="transition-colors hover:text-foreground"
            >
              sales@revrepo.in
            </a>
            <span className="text-muted-foreground/50">·</span>
            <a
              href="https://www.revrepo.in"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              www.revrepo.in
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 RevRepo. All rights reserved.
          </p>
        </div>

        {/* Bottom links */}
        <div className="mt-8 flex items-center gap-6 border-t border-border/50 pt-6">
          <Link
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms & Support
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
