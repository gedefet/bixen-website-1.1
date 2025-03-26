"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
}

export default function AnimatedSection({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  direction = "up",
  duration = 600,
}: AnimatedSectionProps) {
  const { ref, animationClasses } = useScrollAnimation({
    threshold,
    delay,
    direction,
    duration,
  })

  return (
    <div ref={ref} className={cn(animationClasses, className)}>
      {children}
    </div>
  )
}

