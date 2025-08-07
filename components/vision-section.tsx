"use client"

import { useEffect, useRef } from "react"

// A detailed, accessible SVG compass with cardinal markings and a rotating needle.
// The face is static; only the needle rotates on desktop scroll.
// Hidden on mobile; visible from md+ to keep the section clean on small screens.

type CompassSVGProps = {
  size?: number
}

// Forward a ref to the needle <g> so we can rotate only the needle from the parent.
function CompassSVG({ size = 320 }: CompassSVGProps) {
  // SVG coordinate system is 0..200 for both x and y for crisp scaling.
  const cx = 100
  const cy = 100
  const outerR = 94
  const labelR = 70
  const ordinalR = 58

  // Generate tick marks (60 ticks = every 6 degrees)
  const ticks = Array.from({ length: 60 }, (_, i) => i)

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-labelledby="compassTitle compassDesc"
      className="block"
    >
      <title id="compassTitle">{'Business Direction Compass'}</title>
      <desc id="compassDesc">
        {'A detailed compass showing cardinal directions (N, E, S, W), minor tick marks, and a rotating needle that indicates direction based on scroll.'}
      </desc>

      <defs>
        <radialGradient id="faceGrad" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.10)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
        </radialGradient>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.65)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.35)" />
        </filter>
      </defs>

      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={outerR} fill="none" stroke="url(#ringGrad)" strokeWidth="3" />

      {/* Face background */}
      <circle cx={cx} cy={cy} r={outerR - 3} fill="url(#faceGrad)" />

      {/* Ticks */}
      {ticks.map((i) => {
        const angle = (i * 6 * Math.PI) / 180
        const isMajor = i % 15 === 0 // 0, 90, 180, 270
        const isMedium = !isMajor && i % 5 === 0 // every 30 deg
        const len = isMajor ? 12 : isMedium ? 9 : 5
        const r1 = outerR - 4
        const r2 = r1 - len
        const x1 = cx + r1 * Math.cos(angle)
        const y1 = cy + r1 * Math.sin(angle)
        const x2 = cx + r2 * Math.cos(angle)
        const y2 = cy + r2 * Math.sin(angle)
        const opacity = isMajor ? 0.9 : isMedium ? 0.7 : 0.45

        return (
          <line
            key={`tick-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="white"
            strokeOpacity={opacity}
            strokeWidth={isMajor ? 1.8 : 1}
            shapeRendering="geometricPrecision"
          />
        )
      })}

      {/* Cardinal labels */}
      <text
        x={cx}
        y={cy - labelR}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12"
        fontWeight={700}
        fill="white"
      >
        {'N'}
      </text>
      <text
        x={cx + labelR}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12"
        fontWeight={700}
        fill="white"
      >
        {'E'}
      </text>
      <text
        x={cx}
        y={cy + labelR}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12"
        fontWeight={700}
        fill="white"
      >
        {'S'}
      </text>
      <text
        x={cx - labelR}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12"
        fontWeight={700}
        fill="white"
      >
        {'W'}
      </text>

      {/* Ordinal labels (NE, SE, SW, NW) */}
      <text
        x={cx + ordinalR * Math.SQRT1_2}
        y={cy - ordinalR * Math.SQRT1_2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="8.5"
        fontWeight={600}
        fill="rgba(255,255,255,0.9)"
      >
        {'NE'}
      </text>
      <text
        x={cx + ordinalR * Math.SQRT1_2}
        y={cy + ordinalR * Math.SQRT1_2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="8.5"
        fontWeight={600}
        fill="rgba(255,255,255,0.9)"
      >
        {'SE'}
      </text>
      <text
        x={cx - ordinalR * Math.SQRT1_2}
        y={cy + ordinalR * Math.SQRT1_2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="8.5"
        fontWeight={600}
        fill="rgba(255,255,255,0.9)"
      >
        {'SW'}
      </text>
      <text
        x={cx - ordinalR * Math.SQRT1_2}
        y={cy - ordinalR * Math.SQRT1_2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="8.5"
        fontWeight={600}
        fill="rgba(255,255,255,0.9)"
      >
        {'NW'}
      </text>

      {/* Needle (rotated via transform attribute from parent effect) */}
      <g id="needle" transform={`rotate(0 ${cx} ${cy})`} filter="url(#softShadow)">
        {/* North pointer (accent) */}
        <polygon
          points={`${cx},${cy - 64} ${cx - 5.5},${cy + 10} ${cx + 5.5},${cy + 10}`}
          fill="#10b981"
        />
        {/* South counterweight */}
        <polygon
          points={`${cx},${cy + 64} ${cx - 5.5},${cy - 10} ${cx + 5.5},${cy - 10}`}
          fill="rgba(255,255,255,0.85)"
        />
        {/* Center cap */}
        <circle cx={cx} cy={cy} r="5.5" fill="white" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" />
      </g>

      {/* Inner ring */}
      <circle cx={cx} cy={cy} r={32} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
    </svg>
  )
}

export default function VisionSection() {
  const needleRef = useRef<SVGGElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let raf = 0
    let ticking = false

    const rotateNeedle = (deg: number) => {
      // Rotate the needle around the SVG center (100, 100)
      if (needleRef.current) {
        needleRef.current.setAttribute("transform", `rotate(${deg} 100 100)`)
      }
    }

    const update = () => {
      ticking = false
      if (prefersReducedMotion) {
        rotateNeedle(0)
        return
      }
      const rect = wrapper.getBoundingClientRect()
      const vh = window.innerHeight
      const total = vh + rect.height
      const visible = vh - rect.top // how far into view
      const progress = Math.max(0, Math.min(1, visible / total))
      const rotation = progress * 360 // full spin while it passes through viewport
      rotateNeedle(rotation)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        raf = requestAnimationFrame(update)
      }
    }

    const onResize = () => {
      update()
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    update() // initial

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="container px-2 md:px-6 py-6 md:py-16">
      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-5 md:p-12 shadow-xl">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 items-center">
          <div className="space-y-3 md:space-y-6">
            <h2 className="hidden md:block text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl text-white">
              {'Your business vision is our compass'}
            </h2>
            <p className="hidden md:block text-white/80 text-xl md:text-2xl">
              {"We don't just build technology; we align it with your strategic goals to create meaningful impact."}
            </p>
            <p className="hidden md:block text-white/80 text-xl md:text-2xl">
              {'Every solution is designed to move your business forward, ensuring that innovation serves your vision.'}
            </p>
          </div>

          {/* Compass: hidden on mobile, visible on desktop */}
          <div className="flex justify-center" ref={wrapperRef}>
            <div className="hidden md:flex relative items-center justify-center">
              {/* Inline SVG face + needle. We keep a separate invisible needle group ref to rotate */}
              <div className="w-[16rem] h-[16rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem]">
                <svg
                  viewBox="0 0 200 200"
                  width="100%"
                  height="100%"
                  role="img"
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                >
                  {/* We draw only the needle to get a ref here and keep the rich face from the component below.
                      This ensures perfect overlay alignment and crisp transforms. */}
                  <g ref={needleRef} transform="rotate(0 100 100)">
                    {/* North pointer */}
                    <polygon points="100,36 94.5,110 105.5,110" fill="#10b981" />
                    {/* South counterweight */}
                    <polygon points="100,164 94.5,90 105.5,90" fill="rgba(255,255,255,0.85)" />
                    <circle cx="100" cy="100" r="5.5" fill="white" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" />
                  </g>
                </svg>

                {/* Static face below; needle overlays above for silky rotation */}
                <CompassSVG />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
