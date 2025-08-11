"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, Rocket, Target, Zap, Settings, TrendingUp } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      week: "Semana 1",
      title: "Descubrimiento",
      description: "Análisis profundo de necesidades y oportunidades",
      icon: <Target className="w-6 h-6" />,
      color: "from-[#8B5CF6] to-[#06B6D4]",
    },
    {
      week: "Semana 2",
      title: "Estrategia IA",
      description: "Roadmap técnico y arquitectura de solución",
      icon: <Settings className="w-6 h-6" />,
      color: "from-[#06B6D4] to-[#10B981]",
    },
    {
      week: "Semanas 3-4",
      title: "Prototipo Rápido",
      description: "MVP funcional para validación temprana",
      icon: <Zap className="w-6 h-6" />,
      color: "from-[#10B981] to-[#8B5CF6]",
    },
    {
      week: "Semana 5",
      title: "Validación",
      description: "Testing con usuarios reales y métricas",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-[#8B5CF6] to-[#06B6D4]",
    },
    {
      week: "Semanas 6-8",
      title: "Desarrollo",
      description: "Implementación completa y optimización",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-[#06B6D4] to-[#10B981]",
    },
    {
      week: "Semana 9",
      title: "Deployment",
      description: "Lanzamiento en producción y monitoreo",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-[#10B981] to-[#8B5CF6]",
    },
    {
      week: "∞",
      title: "Optimización Continua",
      description: "Mejoras iterativas y escalamiento",
      icon: <Clock className="w-6 h-6" />,
      color: "from-[#8B5CF6] to-[#06B6D4]",
    },
  ]

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nuestro Framework de{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">7 Pasos</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Metodología probada que garantiza resultados medibles en cada etapa
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#10B981] transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-4 shadow-lg relative z-10`}
                  >
                    {step.icon}
                  </motion.div>

                  <div className="space-y-2">
                    <div className="text-sm text-white/60 font-medium">{step.week}</div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
