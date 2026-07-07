import { useEffect, useRef, useState } from "react"

/**
 * Progressive-enhancement scroll reveal. Starts visible (`true`) on the
 * server/first paint so content is never hidden without JS; a mounted
 * effect then flips to false until the element scrolls into view, with a
 * safety-net timeout so nothing can get stuck invisible.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
    const el = ref.current
    if (!el || !("IntersectionObserver" in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )
    observer.observe(el)

    const fallback = window.setTimeout(() => setIsVisible(true), 4000)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return { ref, isVisible: ready ? isVisible : true, ready }
}
