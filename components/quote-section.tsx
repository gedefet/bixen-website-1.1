import { Quote } from "lucide-react"

export default function QuoteSection() {
  return (
    <div className="container px-4 md:px-6" id="quote">
      <div className="max-w-[800px] mx-auto text-center">
        <Quote className="h-12 w-12 mx-auto mb-6 text-[#01F9C6]" />
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-6 text-white">
          "If you look closely, most overnight successes took a long time."
        </blockquote>
        <div>
          <p className="font-bold text-white">Steve Jobs</p>
        </div>
      </div>
    </div>
  )
}

