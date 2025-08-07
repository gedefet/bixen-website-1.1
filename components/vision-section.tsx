import Image from "next/image"

export default function VisionSection() {
  return (
    <div className="px-1 md:px-6 py-8 md:py-16">
      <div className="text-center max-w-[800px] mx-auto mb-8 md:mb-12">
        <h2 className="hidden md:block text-4xl font-light sm:text-5xl md:text-6xl mb-4 text-white">
          Your business vision is our compass
        </h2>
        <p className="hidden md:block text-white/80 text-lg md:text-xl leading-relaxed">
          We don't just build technology; we craft solutions that align with your strategic goals. Every line of code,
          every algorithm, and every design decision is guided by your vision for the future.
        </p>
        <p className="hidden md:block text-white/80 text-lg md:text-xl leading-relaxed mt-4">
          Our approach ensures that innovation serves purpose, and technology becomes the bridge between where you are
          and where you want to be.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="hidden md:block relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-[#01F9C6]/20 to-[#008794]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="relative w-full h-full bg-white/5 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
            <div className="w-48 h-48 md:w-60 md:h-60 relative animate-spin-slow">
              <Image
                src="/placeholder.svg?height=240&width=240"
                alt="Compass representing business direction"
                width={240}
                height={240}
                className="w-full h-full object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
