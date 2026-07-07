import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { asset } from "@/lib/asset"
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/site/theme-toggle"
import { NAV_LINKS, CALENDLY_URL, type PageKey } from "@/components/site/nav-links"

export function Header({ current }: { current: PageKey }) {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-hairline">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-5 px-6 py-3.5">
        <a href={asset("index.html")} aria-label="Andrea Forán, Psychologist – home" className="flex items-center gap-3">
          <img src={asset("assets/images/favicon-180.png")} alt="" className="h-11 w-11 shrink-0" />
          <span className="leading-tight whitespace-nowrap">
            <span className="block font-heading text-[1.2rem] font-semibold uppercase tracking-wide text-navy">
              Andrea Forán
            </span>
            <span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-ink-muted">
              Licensed Psychologist
            </span>
          </span>
        </a>

        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  aria-current={current === link.key ? "page" : undefined}
                  className={cn(
                    "inline-block rounded-lg px-4 py-2.5 text-[1rem] font-semibold text-navy transition-colors duration-200 hover:bg-cream hover:text-burgundy",
                    current === link.key && "bg-cream text-burgundy",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener"
                className="inline-block rounded-lg bg-burgundy px-4 py-2.5 text-[1rem] font-semibold text-white transition-colors duration-200 hover:bg-burgundy-dark"
              >
                Book a Session
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-navy text-navy lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <nav aria-label="Main navigation" className="mt-10 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.key}>
                    <a
                      href={link.href}
                      aria-current={current === link.key ? "page" : undefined}
                      className={cn(
                        "rounded-lg px-4 py-3.5 text-[1.1rem] font-semibold text-navy",
                        current === link.key && "bg-cream text-burgundy",
                      )}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener"
                  className="mt-3 rounded-lg bg-burgundy px-4 py-3.5 text-center text-[1.1rem] font-bold text-white"
                >
                  Book a Session
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
