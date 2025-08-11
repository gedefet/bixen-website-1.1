"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Download, Zap } from "lucide-react"

export default function FinalCTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #8B5CF6 0%, transparent 70%)",
              "radial-gradient(circle at 80% 50%, #06B6D4 0%, transparent 70%)",
              "radial-gradient(circle at 50% 20%, #10B981 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-0 opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            El Futuro{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              no Espera
            </span>
          </h2>

          <p className="text-2xl md:text-3xl text-white/80 mb-4 max-w-4xl mx-auto leading-relaxed">
            ¿Listo para dejar de competir y empezar a dominar?
          </p>

          <p className="text-xl text-white/60 mb-12 max-w-3xl mx-auto">
            Agenda 30 minutos con nuestros expertos. Sin costo, sin compromiso, solo insights que pueden cambiar tu
            negocio.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full font-bold text-xl text-white shadow-2xl shadow-[#8B5CF6]/30 flex items-center gap-3"
            >
              <Calendar size={24} />
              Agendar Llamada Estratégica
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-bold text-xl text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
            >
              <Download size={24} />
              Descargar Casos de Éxito
            </motion.button>
          </div>

          {/* Urgency Ticker */}
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-full text-[#F59E0B] font-medium"
          >
            <Zap size={20} />3 slots disponibles esta semana
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
