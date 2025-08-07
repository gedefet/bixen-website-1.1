'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Users, Brain, Target, Award } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "World-Class Team",
      shortDescription: "Engineers and researchers that love solving complex challenges creatively.",
      longDescription: "Engineers and researchers that love solving complex challenges creatively."
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Experts",
      shortDescription: "Our team stays ahead in AI and Machine Learning.",
      longDescription: "Our team stays ahead in AI and Machine Learning—Computer Vision, LLMs, Intelligent Agents, and Optimization Models, to name a few—to always know exactly what's best for your project."
    },
    {
      icon: Target,
      title: "Your Business - Our Guide",
      shortDescription: "Aligning technology with your strategy to achieve your business goals.",
      longDescription: "Aligning technology with your strategy to achieve your business goals."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      shortDescription: "Extensive experience in the field.",
      longDescription: "Extensive experience in the field, combining academic rigor and expertise across industries like software, manufacturing, healthcare, and aerospace."
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose Bixen
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full"
              >
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4">
                    <IconComponent className="w-12 h-12 text-emerald-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  {/* Show longer description on desktop, no description on mobile */}
                  <p className="text-white/80 text-sm leading-relaxed hidden md:block">
                    {feature.longDescription}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
