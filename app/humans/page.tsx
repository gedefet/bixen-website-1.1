"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck, UserCheck, Users, Brain, ShieldCheck, ArrowRight, Mail } from "lucide-react"
import Image from "next/image"

export default function HumansPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-slate-900/20"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Curated Humans by <span className="text-green-400 drop-shadow-lg">Bixen</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Certified AI talent, ready to build.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-green-400 hover:bg-green-500 text-slate-900 font-semibold px-8 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-green-400/25 transition-all duration-300 animate-bounce"
          >
            <a href="mailto:contact@bixen.ai" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Solicitar perfiles
            </a>
          </Button>
        </div>
      </section>

      {/* Sello Bixen Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <BadgeCheck className="w-8 h-8 text-green-400" />
                <h2 className="text-4xl font-bold text-white">El Sello Bixen</h2>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                Cada ingeniero pasa por nuestra certificación propietaria que garantiza las mejores habilidades técnicas
                y blandas. No contratamos talento,
                <span className="text-green-400 font-semibold"> lo creamos</span>.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                Nuestro proceso de selección y entrenamiento asegura que cada profesional no solo domine las tecnologías
                más avanzadas, sino que también tenga la mentalidad y comunicación necesarias para integrarse
                perfectamente a tu equipo.
              </p>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
                alt="Certified AI talent"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Curated Modes */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Tres modalidades curadas</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elige la modalidad que mejor se adapte a las necesidades de tu proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Solo Bixener */}
            <Card className="bg-slate-900 border-2 border-green-400/20 hover:border-green-400 rounded-2xl shadow-2xl hover:shadow-green-400/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <UserCheck className="w-12 h-12 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Solo Bixener</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Un ingeniero de IA certificado, dedicado 40 horas por semana a tu proyecto.
                </p>
                <div className="text-green-400 font-semibold">Ideal para proyectos específicos</div>
              </CardContent>
            </Card>

            {/* Curated Squad */}
            <Card className="bg-slate-900 border-2 border-green-400/20 hover:border-green-400 rounded-2xl shadow-2xl hover:shadow-green-400/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Curated Squad</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  PM + Ingeniero de IA + Desarrollador. Entrega end-to-end completa.
                </p>
                <div className="text-green-400 font-semibold">Solución integral</div>
              </CardContent>
            </Card>

            {/* AI Advisor */}
            <Card className="bg-slate-900 border-2 border-green-400/20 hover:border-green-400 rounded-2xl shadow-2xl hover:shadow-green-400/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Brain className="w-12 h-12 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">AI Advisor</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Experto senior fraccional, 8-16 horas por semana para consultoría estratégica.
                </p>
                <div className="text-green-400 font-semibold">Guía experta</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Selection process"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-8">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">Proceso de selección detallado</h2>
                <p className="text-xl text-green-400 font-semibold">Talento excepcional, sin dudas</p>
              </div>

              <div className="space-y-6">
                {[
                  { step: 1, title: "Portfolio & CV review", desc: "Análisis exhaustivo de experiencia y proyectos" },
                  {
                    step: 2,
                    title: "72h code-challenge (MLOps / LLM)",
                    desc: "Desafío técnico real en tecnologías de IA",
                  },
                  { step: 3, title: "Technical deep-dive interview", desc: "Entrevista técnica profunda con expertos" },
                  {
                    step: 4,
                    title: "Behavioral event interview",
                    desc: "Evaluación de habilidades blandas y comunicación",
                  },
                  { step: 5, title: "2-week internal sandbox QA", desc: "Prueba práctica en ambiente controlado" },
                  {
                    step: 6,
                    title: "Certification & client onboarding",
                    desc: "Certificación final y preparación para cliente",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-400 text-slate-900 rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantía de Excelencia */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop"
                alt="Excellence guarantee"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-green-400" />
                <h2 className="text-4xl font-bold text-white">Garantía de excelencia</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900 p-6 rounded-2xl border border-green-400/20">
                  <h4 className="text-xl font-semibold text-green-400 mb-2">Reemplazo rápido</h4>
                  <p className="text-gray-300">
                    Si no estás satisfecho, reemplazamos al profesional en menos de 10 días.
                  </p>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl border border-green-400/20">
                  <h4 className="text-xl font-semibold text-green-400 mb-2">NPS garantizado</h4>
                  <p className="text-gray-300">Mantenemos un NPS ≥ 8 o te devolvemos un mes completo.</p>
                </div>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed">
                Nuestra reputación se basa en la excelencia de nuestros profesionales. Por eso respaldamos cada
                contratación con garantías reales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            ¿Listo para sumar un <span className="text-green-400">Curated Human</span>?
          </h2>

          <Button
            asChild
            size="lg"
            className="bg-green-400 hover:bg-green-500 text-slate-900 font-semibold px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-green-400/25 transition-all duration-300"
          >
            <a href="mailto:contact@bixen.ai" className="flex items-center gap-3">
              Solicitar perfiles
              <ArrowRight className="w-6 h-6" />
            </a>
          </Button>

          <p className="text-gray-400 mt-8 text-sm">Certified by Bixen • 2025</p>
        </div>
      </section>
    </div>
  )
}
