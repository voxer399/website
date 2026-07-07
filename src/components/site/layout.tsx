import type { ReactNode } from "react"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import type { PageKey } from "@/components/site/nav-links"

export function Layout({ current, children }: { current: PageKey; children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="fixed left-0 top-0 z-[1000] -translate-x-full rounded-br-lg bg-navy px-5 py-3 text-white focus:translate-x-0"
      >
        Skip to main content
      </a>
      <Header current={current} />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
