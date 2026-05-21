"use client"

import { useEffect } from "react"

export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: "-8% 0px -8% 0px", threshold: 0 }
    )

    const observe = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el))
    }

    observe()

    // Re-run after a tick so dynamically rendered elements are picked up
    const t = setTimeout(observe, 200)
    return () => { clearTimeout(t); io.disconnect() }
  }, [])

  return null
}
