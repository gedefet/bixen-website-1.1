"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

export default function ProblemSolutionSection() {
  const problems = [
    "El 73% de proyectos de IA fallan",
    "Equipos sin expertise real",
    "Soluciones genéricas que no escalan",
    "Meses de desarrollo sin resultados",
  ]

  const solutions = [
    "100% de proyectos entregados con ROI+",
    "PhDs + Ingenieros Sr. dedicados",
    "IA custom que crece con tu negocio",
    "MVPs funcionales en 4 semanas",
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
            La{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">Brecha</span>{" "}
            Tecnológica
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            La diferencia entre intentar implementar IA y realmente transformar tu negocio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-4">Sin Bixen</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto lg:mx-0 rounded-full" />
            </div>

            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-red-500/10 border border-red-500/20 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-1">
                  <X size={14} className="text-red-400" />
                </div>
                <p className="text-white/80 leading-relaxed">{problem}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#10B981] mb-4">Con Bixen</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] mx-auto lg:mx-0 rounded-full" />
            </div>

            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-[#10B981]/10 border border-[#10B981]/20 rounded-2xl backdrop-blur-sm hover:bg-[#10B981]/15 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-[#10B981]/20 rounded-full flex items-center justify-center mt-1">
                  <Check size={14} className="text-[#10B981]" />
                </div>
                <p className="text-white/80 leading-relaxed">{solution}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
