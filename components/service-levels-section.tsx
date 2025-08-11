"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ServiceLevelsSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Elegí tu nivel de transformación</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Misma excelencia técnica, adaptada a tu ambición y presupuesto
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-8 mb-16">
          {/* MOONSHOT Card */}
          <div className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-red-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-3xl">🚀</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">MOONSHOT</h3>
                  <Badge className="bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/10">COMPLEJO</Badge>
                </div>
                <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                  Lo que otros dicen que es imposible. Optimización de plantas completas, modelos de IA propietarios,
                  Computer Vision industrial.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-400">
                  <div>
                    <span className="text-zinc-300 font-medium">Duración:</span> 6-12 meses
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Inversión:</span> $200K+
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Equipo:</span> PhD dedicado
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Casos:</span> ABInBev • Netflix • Confidencial
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TRANSFORMACIÓN Card */}
          <div className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-purple-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-3xl">⚡</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">TRANSFORMACIÓN</h3>
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/10">
                    ESTRATÉGICO
                  </Badge>
                </div>
                <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                  Automatización de procesos críticos, Computer Vision para QA, sistemas de predicción y forecasting con
                  ML.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-400">
                  <div>
                    <span className="text-zinc-300 font-medium">Duración:</span> 2-6 meses
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Inversión:</span> $50K-$200K
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Equipo:</span> Equipo senior
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">ROI típico:</span> 3.2x en 6 meses
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK WIN Card */}
          <div className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-emerald-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-3xl">🎯</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">QUICK WIN</h3>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/10">
                    RÁPIDO
                  </Badge>
                </div>
                <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                  Chatbots inteligentes, dashboards con IA, automatización RPA, análisis predictivo básico. Resultados
                  rápidos y medibles.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-400">
                  <div>
                    <span className="text-zinc-300 font-medium">Duración:</span> 2-6 semanas
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Inversión:</span> $15K-$50K
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Equipo:</span> 1-2 developers
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Tiempo a producción:</span> 30 días promedio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 p-8 bg-zinc-900/30 rounded-xl border border-zinc-800">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent mb-2">
              67%
            </div>
            <p className="text-zinc-400 text-sm">de clientes enterprise empezaron con Quick Win</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-zinc-400 text-sm">de proyectos entregados con ROI positivo</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <p className="text-zinc-400 text-sm">años de experiencia en IA aplicada</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            ¿No sabés por dónde empezar? Hacemos un assessment gratuito de tu caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200 font-medium px-8 py-3">
              Agendar Assessment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white font-medium px-8 py-3 bg-transparent"
            >
              Ver Casos de Éxito
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
