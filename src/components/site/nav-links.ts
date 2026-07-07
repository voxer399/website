import { asset } from "@/lib/asset"

export type PageKey = "home" | "how-i-work" | "program" | "about" | "prices" | "contact"

export const NAV_LINKS: { key: PageKey; href: string; label: string }[] = [
  { key: "home", href: asset("index.html"), label: "Home" },
  { key: "how-i-work", href: asset("how-i-work.html"), label: "How I Work" },
  { key: "program", href: asset("program.html"), label: "Self-Building Program" },
  { key: "about", href: asset("about.html"), label: "About Me" },
  { key: "prices", href: asset("prices.html"), label: "Prices & Info" },
  { key: "contact", href: asset("contact.html"), label: "Contact" },
]

export const CALENDLY_URL = "https://calendly.com/andrea-foran/30min"
