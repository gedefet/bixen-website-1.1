import { Brain, Users, Compass, Trophy } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-[#01F9C6]" />,
      title: "World-Class Team",
      description: (
        <>
          Engineers and researchers that <span className="font-bold">love solving complex challenges creatively</span>.
        </>
      ),
      mobileDescription: "Engineers who solve complex challenges creatively.",
    },
    {
      icon: <Brain className="h-10 w-10 text-[#01F9C6]" />,
      title: "AI & Machine Learning Experts",
      description: (
        <>
          Our team stays ahead in AI and Machine Learning—
          <span className="font-bold">Computer Vision, LLMs, Intelligent Agents, and Optimization Models</span>, to name
          a few—to always know exactly what's best for your project.
        </>
      ),
      mobileDescription: "Experts in Computer Vision, LLMs, and Intelligent Agents.",
      highlight: true,
    },
    {
      icon: <Compass className="h-10 w-10 text-[#01F9C6]" />,
      title: "Your Business - Our Guide",
      description: (
        <>
          Aligning technology with your strategy <span className="font-bold">to achieve your business goals</span>.
        </>
      ),
      mobileDescription: "Technology aligned with your business strategy.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-[#01F9C6]" />,
      title: "Proven Track Record",
      description: (
        <>
          Extensive experience in the field, combining academic rigor and expertise across{" "}
          <span className="font-bold">industries like software, manufacturing, healthcare, and aerospace</span>.
        </>
      ),
      mobileDescription: "Experience across software, manufacturing, and healthcare.",
    },
  ]

  return (
    <div className="container px-2 md:px-6 py-4 md:py-16">
      <div className="text-center max-w-[800px] mx-auto mb-6 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-light sm:text-5xl md:text-6xl text-white">
          Why Choose <span className="text-white">Bixen</span>
        </h2>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-4 md:p-12 shadow-xl">
        {/* Updated to a 2x2 grid on sm+ screens, keeping styling intact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-3 md:p-6 rounded-[1.5rem] border transition-all duration-200 hover:shadow-lg flex flex-col h-full ${
                feature.highlight
                  ? "bg-[#01F9C6]/20 border-[#01F9C6] shadow-[0_0_15px_rgba(1,249,198,0.3)]"
                  : "bg-white/5 border-white/20 hover:border-[#01F9C6]/50"
              }`}
            >
              <div className="flex justify-center mb-2 md:mb-4">
                {feature.highlight ? (
                  <div className="bg-[#01F9C6]/30 p-2 md:p-3 rounded-full">{feature.icon}</div>
                ) : (
                  feature.icon
                )}
              </div>
              <h3
                className={`text-sm md:text-2xl lg:text-3xl font-medium mb-1 md:mb-3 text-center ${
                  feature.highlight ? "text-[#01F9C6]" : "text-white"
                }`}
              >
                {feature.title}
              </h3>
              <div className="flex-grow flex items-center justify-center">
                <p className="md:hidden text-white/80 text-center text-xs">{feature.mobileDescription}</p>
                <p className="hidden md:block text-white/80 text-center text-lg md:text-xl">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
