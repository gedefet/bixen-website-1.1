import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TransformativeSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Transformative Solutions for Complex Challenges
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Bixen, we don't just solve problems—we transform them into opportunities for growth and innovation.
            </p>
            <ul className="grid gap-3">
              {[
                "Innovative approach to problem-solving",
                "Sustainable and future-proof solutions",
                "Collaborative partnership model",
                "Data-driven decision making",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <Button variant="link" className="p-0 h-auto text-primary font-medium">
                Learn about our approach
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={`/placeholder.svg?height=400&width=400&text=Image ${item}`}
                  alt={`Transformative solution ${item}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

