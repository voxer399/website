export type PageKey = "home" | "how-i-work" | "program" | "about" | "prices" | "contact"

export const NAV_LINKS: { key: PageKey; href: string; label: string }[] = [
  { key: "home", href: "index.html", label: "Home" },
  { key: "how-i-work", href: "how-i-work.html", label: "How I Work" },
  { key: "program", href: "program.html", label: "Self-Building Program" },
  { key: "about", href: "about.html", label: "About Me" },
  { key: "prices", href: "prices.html", label: "Prices & Info" },
  { key: "contact", href: "contact.html", label: "Contact" },
]

export const CALENDLY_URL = "https://calendly.com/andrea-foran/30min"
