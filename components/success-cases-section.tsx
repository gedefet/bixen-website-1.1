"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"
import { useState } from "react"

export default function SuccessCasesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cases = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      company: "Fintech/ABInBev",
      title: "De 3 días a 3 minutos",
      description: "Automatización de aprobación crediticia con Computer Vision",
      metrics: ["97% menos tiempo de proceso", "$2.3M ahorrados/año"],
      gradient: "from-[#8B5CF6] to-[#06B6D4]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      company: "Healthcare/Intuitivo",
      title: "94% precisión diagnóstica",
      description: "Detección temprana con modelos propietarios",
      metrics: ["10,000+ pacientes impactados", "40% reducción en falsos positivos"],
      gradient: "from-[#06B6D4] to-[#10B981]",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      company: "Media/Netflix",
      title: "Personalización a escala",
      description: "Sistema de recomendación next-gen",
      metrics: ["+23% engagement", "5M+ usuarios diarios"],
      gradient: "from-[#10B981] to-[#8B5CF6]",
    },
  ]

  return (
    <section id="cases" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transformaciones{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">Reales</span>,
            <br />
            Resultados Medibles
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Casos de éxito que demuestran el poder transformador de la IA aplicada correctamente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                }}
                className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 h-full"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${case_.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className={`inline-flex p-3 bg-gradient-to-r ${case_.gradient} rounded-2xl mb-6`}>
                  {case_.icon}
                </div>

                {/* Company */}
                <div className="text-sm text-white/60 mb-2">{case_.company}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#8B5CF6] group-hover:to-[#06B6D4] transition-all duration-300">
                  {case_.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">{case_.description}</p>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  {case_.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                      <span className="text-sm text-white/80">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors group/btn"
                >
                  Ver Case Study
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>

                {/* Hover Indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredCard === index ? 1 : 0 }}
                  className="absolute top-4 right-4 w-3 h-3 bg-[#10B981] rounded-full"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
