"use client"

import { motion } from "framer-motion"
import { Bot, Eye, Settings, Map, TrendingUp, MessageSquare } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Agentes Generativos Autónomos",
      description: "Asistentes que piensan, no solo responden",
      gradient: "from-[#8B5CF6] to-[#06B6D4]",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision Avanzado",
      description: "Desde control de calidad hasta diagnósticos médicos",
      gradient: "from-[#06B6D4] to-[#10B981]",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "MLOps & Escalamiento",
      description: "De prototipo a producción sin fricciones",
      gradient: "from-[#10B981] to-[#8B5CF6]",
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Estrategia & Roadmap IA",
      description: "Co-creamos tu visión tecnológica",
      gradient: "from-[#8B5CF6] to-[#06B6D4]",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Optimización & Forecasting",
      description: "Predice el futuro, optimiza el presente",
      gradient: "from-[#06B6D4] to-[#10B981]",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "NLP & Análisis de Sentimiento",
      description: "Entiende a tus clientes a escala masiva",
      gradient: "from-[#10B981] to-[#8B5CF6]",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Capacidades que{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Transforman
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Tecnologías de vanguardia aplicadas a problemas reales de negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
              }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 h-full">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                />

                {/* Floating Icon */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotateZ: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className={`inline-flex p-4 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#8B5CF6] group-hover:to-[#06B6D4] transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed">{service.description}</p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} blur-xl opacity-20 rounded-3xl`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
