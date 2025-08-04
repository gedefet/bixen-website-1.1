"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, User, Brain, Shield, ArrowRight, BadgeCheck } from "lucide-react"

export default function HumansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#004953] via-[#004953] to-[#008794]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              CURATED HUMANS by{" "}
              <span className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuente%20blanca%20fondo%20transparente_registrado-DEnxY22L1XvDKGRhofoq1uFyEv75Po.png"
                  alt="Bixen"
                  width={200}
                  height={60}
                  className="inline-block h-12 md:h-16 w-auto"
                />
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Certified AI talent, ready to build.
          </p>
          <Button
            asChild
            className="bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90 text-lg px-8 py-6 rounded-xl font-semibold animate-bounce"
          >
            <a href="mailto:contact@bixen.ai">Solicitar perfiles</a>
          </Button>
        </div>
      </section>

      {/* El Sello Bixen */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BadgeCheck className="h-8 w-8 text-[#01F9C6]" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">El Sello Bixen</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Todos nuestros ingenieros superan un proceso de certificación propio que incluye retos técnicos de IA,
                code‑challenge de 72 h y evaluación de soft skills. Sólo el 5% obtiene el sello{" "}
                <span className="text-[#01F9C6] font-semibold">'Certified by Bixen'</span>.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
                alt="Certification Process"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tres Modos de Contratación */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Tres modos de contratación</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Solo Bixener */}
            <Card className="bg-white/10 backdrop-blur-sm border-[#01F9C6]/30 hover:scale-105 transition-transform duration-300 rounded-2xl shadow-2xl">
              <CardContent className="p-8 text-center">
                <User className="h-12 w-12 text-[#01F9C6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Solo Bixener</h3>
                <p className="text-gray-300 mb-6">
                  1 AI Engineer dedicado
                  <br />
                  40 h/sem
                </p>
                <Badge className="bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90">Certified by Bixen</Badge>
              </CardContent>
            </Card>

            {/* Curated Squad */}
            <Card className="bg-white/10 backdrop-blur-sm border-[#01F9C6]/30 hover:scale-105 transition-transform duration-300 rounded-2xl shadow-2xl">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-[#01F9C6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Curated Squad</h3>
                <p className="text-gray-300 mb-6">
                  PM + AI Dev + Engineer
                  <br />
                  Célula lista para entregar valor sprint a sprint
                </p>
                <Badge className="bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90">Certified by Bixen</Badge>
              </CardContent>
            </Card>

            {/* AI Advisor */}
            <Card className="bg-white/10 backdrop-blur-sm border-[#01F9C6]/30 hover:scale-105 transition-transform duration-300 rounded-2xl shadow-2xl">
              <CardContent className="p-8 text-center">
                <Brain className="h-12 w-12 text-[#01F9C6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">AI Advisor</h3>
                <p className="text-gray-300 mb-6">
                  Experto senior fractional
                  <br />
                  8–16 h/sem para definir visión y desbloquear decisiones críticas
                </p>
                <Badge className="bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90">Certified by Bixen</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proceso de Selección */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Selection Process"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Proceso de selección detallado</h2>
              <div className="space-y-6">
                {[
                  "Revisión de CV y portfolio",
                  "Code‑challenge real de 72 h (LLM/MLOps)",
                  "Entrevista técnica deep‑dive",
                  "Entrevista de soft skills (BEI)",
                  "QA piloto interno de 2 semanas",
                  "Certificación y onboarding con el cliente",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#01F9C6] text-[#004953] rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 text-lg">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-[#01F9C6]/10 rounded-xl border border-[#01F9C6]/30">
                <p className="text-[#01F9C6] font-semibold text-lg">
                  Resultado: talento excepcional, sin dudas de su expertise en IA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantía de Excelencia */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-[#01F9C6]" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Garantía de Excelencia</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">Reemplazo &lt;10 días + NPS≥8 o mes gratis.</p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop"
                alt="Excellence Guarantee"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#004953] to-[#008794]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
            ¿Listo para sumar un <span className="text-[#01F9C6]">Curated Human</span>?
          </h2>
          <Button
            asChild
            className="bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90 text-xl px-12 py-8 rounded-xl font-semibold"
          >
            <a href="mailto:contact@bixen.ai" className="flex items-center gap-3">
              Contactar ahora
              <ArrowRight className="h-6 w-6" />
            </a>
          </Button>
          <p className="text-gray-400 text-sm mt-8">Certified by Bixen • 2025</p>
        </div>
      </section>
    </div>
  )
}
