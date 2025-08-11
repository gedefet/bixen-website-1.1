import { Search, Briefcase, CheckSquare, Gamepad2, Truck, Rocket, BarChart3 } from "lucide-react"

const journeySteps = [
  {
    title: "AI DISCOVERY",
    subtitle: "MAP",
    icon: Search,
    position: { top: "10%", left: "8%" },
  },
  {
    title: "DIAGNÓSTICO",
    subtitle: "& BUSINESS CASE",
    icon: Briefcase,
    position: { top: "45%", left: "15%" },
  },
  {
    title: "ROADMAP",
    subtitle: "& PRIORIZACIÓN",
    icon: CheckSquare,
    position: { top: "25%", left: "35%" },
  },
  {
    title: "PROTOTYPE &",
    subtitle: "VALIDATION",
    icon: Gamepad2,
    position: { top: "60%", left: "42%" },
  },
  {
    title: "MVP BUILD",
    subtitle: "",
    icon: Truck,
    position: { top: "15%", left: "65%" },
  },
  {
    title: "GO LIVE",
    subtitle: "& ADOPTION",
    icon: Rocket,
    position: { top: "50%", left: "72%" },
  },
  {
    title: "SCALE &",
    subtitle: "CONTINUOUS VALUE",
    icon: BarChart3,
    position: { top: "20%", left: "88%" },
  },
]

export default function AIJourneySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-teal-800 to-teal-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Our AI Journey Framework</h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            We help you integrate AI across all your organization, in a 7-step framework proven by Bixen.
          </p>
        </div>

        {/* Journey Visualization */}
        <div className="relative h-[600px] md:h-[500px] lg:h-[400px] mb-8">
          {/* Curved Path SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>

            {/* Main curved path */}
            <path
              d="M 80 80 Q 200 200 350 100 Q 500 240 650 60 Q 800 200 920 80"
              stroke="url(#pathGradient)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
            />

            {/* Arrow at the end */}
            <polygon points="920,70 940,80 920,90" fill="#D97706" />
          </svg>

          {/* Journey Steps */}
          {journeySteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="absolute transform -translate-x-1/2 -translate-y-1/2" style={step.position}>
                {/* Step Circle */}
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-teal-800 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>

                  {/* Step Label */}
                  <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-center min-w-[120px]">
                    <h3 className="text-white font-bold text-sm md:text-base leading-tight">{step.title}</h3>
                    {step.subtitle && <p className="text-teal-200 text-xs md:text-sm mt-1">{step.subtitle}</p>}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bixen Logo */}
        <div className="absolute bottom-8 left-8">
          <div className="text-white font-bold text-lg tracking-wider">
            BIXEN<sup className="text-xs">®</sup>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="text-center mt-12">
          <p className="text-teal-100 text-lg max-w-4xl mx-auto leading-relaxed">
            From initial discovery to continuous scaling, our proven methodology ensures successful AI integration that
            delivers measurable business value at every stage of your transformation journey.
          </p>
        </div>
      </div>
    </section>
  )
}
