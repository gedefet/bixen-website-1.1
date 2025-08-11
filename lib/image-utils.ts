/**
 * Utility functions for image optimization and WebP support detection
 */

// Check if browser supports WebP format
export function supportsWebP(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = new Image()
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2)
    }
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
  })
}

// Generate optimized image URLs based on device capabilities
export function getOptimizedImageUrl(
  src: string,
  width: number,
  quality = 85,
  format?: "webp" | "avif" | "jpeg" | "png",
): string {
  // If it's already an optimized URL or external URL, return as is
  if (src.startsWith("http") || src.includes("/_next/image")) {
    return src
  }

  const params = new URLSearchParams({
    url: src,
    w: width.toString(),
    q: quality.toString(),
  })

  if (format) {
    params.set("f", format)
  }

  return `/_next/image?${params.toString()}`
}

// Generate blur placeholder for progressive loading
export function generateBlurPlaceholder(width = 8, height = 6): string {
  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext("2d")
  if (!ctx) return ""

  // Create a simple gradient blur placeholder
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, "#f3f4f6")
  gradient.addColorStop(0.5, "#e5e7eb")
  gradient.addColorStop(1, "#d1d5db")

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  return canvas.toDataURL("image/jpeg", 0.1)
}

// Preload critical images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// Get responsive image sizes based on breakpoints
export function getResponsiveSizes(breakpoints?: {
  sm?: string
  md?: string
  lg?: string
  xl?: string
}): string {
  const defaultBreakpoints = {
    sm: "100vw",
    md: "50vw",
    lg: "33vw",
    xl: "25vw",
    ...breakpoints,
  }

  return [
    `(max-width: 640px) ${defaultBreakpoints.sm}`,
    `(max-width: 768px) ${defaultBreakpoints.md}`,
    `(max-width: 1024px) ${defaultBreakpoints.lg}`,
    defaultBreakpoints.xl,
  ].join(", ")
}
