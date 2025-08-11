"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export default function ServiceLevelsSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tu camino hacia la transformación digital</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Elegí el nivel de compromiso que necesitás. Todos los servicios, diferentes intensidades.
          </p>
        </div>

        {/* Service Cards - True Inverted Pyramid */}
        <div className="space-y-6 mb-16">
          {/* NIVEL 1 - TRANSFORMACIÓN COMPLETA (100% width) */}
          <div className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500 w-full mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-3xl">🚀</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">Enterprise Transformation</h3>
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/10">
                    FULL JOURNEY
                  </Badge>
                </div>
                <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                  El programa completo de transformación. Implementamos nuestro AI Journey de 7 pasos con un equipo
                  dedicado que diseña tu estrategia, construye tus productos y entrena a tu organización.
                </p>

                {/* Services Included */}
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">AI Journey completo (7 pasos)</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">Product Strategy & Roadmap</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">Desarrollo de múltiples soluciones IA</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">Equipo curado dedicado (5-10 personas)</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">Change management y training</span>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-400 mb-4">
                  <div>
                    <span className="text-zinc-300 font-medium">Duración:</span> 6-12 meses
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Inversión:</span> $200K+
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Equipo:</span> PhD + Seniors + PMs dedicados
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Resultado:</span> Transformación organizacional completa
                  </div>
                </div>

                <div className="text-sm text-zinc-400">
                  <span className="text-zinc-300 font-medium">Ideal para:</span> Empresas que quieren liderar su
                  industria con IA
                </div>
              </div>
            </div>
          </div>

          {/* NIVEL 2 - PROYECTO INTEGRADO (75% width) */}
          <div className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-purple-500 w-[75%] mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-3xl">⚡</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">Integrated Project</h3>
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/10">
                    SOLUCIÓN END-TO-END
                  </Badge>
                </div>
                <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                  Un proyecto completo con equipo temporal. Diseñamos el producto, construimos la solución de IA, y
                  dejamos todo funcionando con tu equipo entrenado.
                </p>

                {/* Services Included */}
                <div className="grid gap-3 mb-6">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">Product Design & UX</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">Desarrollo de solución IA específica</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">2-4 Curated Humans temporales</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">AI Journey simplificado (3 pasos core)</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">Documentación y handoff</span>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-400 mb-4">
                  <div>
                    <span className="text-zinc-300 font-medium">Duración:</span> 2-6 meses
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Inversión:</span> $50K-$200K
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Equipo:</span> 2-4 seniors + PM
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Resultado:</span> Producto completamente funcional
                  </div>
                </div>

                <div className="text-sm text-zinc-400">
                  <span className="text-zinc-300 font-medium">Ideal para:</span> Empresas con un problema claro que
                  resolver
                </div>
              </div>
            </div>
          </div>

          {/* NIVEL 3 - SOLUCIÓN ESPECÍFICA (50% width) */}
          <div className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-emerald-500 w-[50%] mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-3xl">🎯</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">Quick Solution</h3>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/10">
                    RESULTADO RÁPIDO
                  </Badge>
                </div>
                <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                  ¿Necesitás algo puntual? Elegí el servicio específico y lo resolvemos rápido con excelencia.
                </p>

                {/* Service Options */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-zinc-800/30 rounded-lg border border-zinc-700/50">
                    <div className="font-medium text-white mb-1">AI Solution</div>
                    <div className="text-sm text-zinc-400">
                      Un modelo, un problema, una solución (Chatbot, Computer Vision, Predicción)
                    </div>
                  </div>
                  <div className="p-4 bg-zinc-800/30 rounded-lg border border-zinc-700/50">
                    <div className="font-medium text-white mb-1">Product Design</div>
                    <div className="text-sm text-zinc-400">
                      MVP o rediseño de producto existente (Research, UX/UI, Prototipo)
                    </div>
                  </div>
                  <div className="p-4 bg-zinc-800/30 rounded-lg border border-zinc-700/50">
                    <div className="font-medium text-white mb-1">Curated Human</div>
                    <div className="text-sm text-zinc-400">
                      1-2 expertos para tu equipo (ML Engineer, Data Scientist, Product Designer)
                    </div>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid gap-2 text-sm text-zinc-400 mb-4">
                  <div>
                    <span className="text-zinc-300 font-medium">Duración:</span> 2-6 semanas
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Inversión:</span> $15K-$50K
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Equipo:</span> 1-2 especialistas
                  </div>
                  <div>
                    <span className="text-zinc-300 font-medium">Resultado:</span> Entregable específico funcionando
                  </div>
                </div>

                <div className="text-sm text-zinc-400">
                  <span className="text-zinc-300 font-medium">Ideal para:</span> Startups, PyMEs, o pruebas piloto
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
            <p className="text-zinc-400 text-sm">de clientes enterprise empezaron con Quick Solution</p>
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
