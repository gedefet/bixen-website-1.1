"use client"

import { useEffect, useRef, useState, useCallback } from "react"

type AnimationDirection = "up" | "down" | "left" | "right" | "none"

interface UseScrollAnimationProps {
  threshold?: number
  delay?: number
  direction?: AnimationDirection
  duration?: number
}

export function useScrollAnimation({
  threshold = 0.1,
  delay = 0,
  direction = "up",
  duration = 600,
}: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const getAnimationClasses = useCallback(() => {
    const baseClasses = `opacity-0 transition-all duration-${duration} ease-out`
    const delayClass = delay > 0 ? ` delay-${delay}` : ""

    let transformClass = ""
    switch (direction) {
      case "up":
        transformClass = " translate-y-10"
        break
      case "down":
        transformClass = " -translate-y-10"
        break
      case "left":
        transformClass = " translate-x-10"
        break
      case "right":
        transformClass = " -translate-x-10"
        break
      default:
        transformClass = ""
    }

    const visibleClass = isVisible ? "opacity-100 transform-none" : ""

    return `${baseClasses}${transformClass}${delayClass} ${visibleClass}`
  }, [delay, direction, duration, isVisible])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { ref, isVisible, animationClasses: getAnimationClasses() }
}

