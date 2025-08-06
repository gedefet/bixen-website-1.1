import { Lightbulb, Rocket, Zap } from 'lucide-react'

export default function TransformativeSection() {
  return (
    <div className="container px-4 md:px-6 py-16">
      <div className="text-center max-w-[800px] mx-auto mb-12">
        <h2 className="text-4xl font-light sm:text-5xl md:text-6xl text-white">
          Unique Solutions
        </h2>
        <p className="mt-4 text-lg text-white/80">
          We specialize in crafting distinctive and highly effective solutions to complex challenges,
          ensuring your business stands out and thrives.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <Lightbulb className="h-12 w-12 text-[#01F9C6] mb-4" />
          <h3 className="text-2xl font-medium text-white mb-2">Creative Problem Solving</h3>
          <p className="text-white/80">
            Our approach goes beyond the ordinary, finding novel ways to tackle your toughest problems.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Rocket className="h-12 w-12 text-[#01F9C6] mb-4" />
          <h3 className="text-2xl font-medium text-white mb-2">Breakthrough Innovation</h3>
          <p className="text-white/80">
            We push boundaries to deliver solutions that redefine industry standards and create new opportunities.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Zap className="h-12 w-12 text-[#01F9C6] mb-4" />
          <h3 className="text-2xl font-medium text-white mb-2">Tailored for Impact</h3>
          <p className="text-white/80">
            Every solution is custom-built to fit your unique needs, ensuring maximum impact and sustainable growth.
          </p>
        </div>
      </div>
    </div>
  )
}
