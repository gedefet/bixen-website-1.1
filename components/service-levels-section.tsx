"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ServiceLevelsSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Choose Your Transformation Level</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Same technical excellence, adapted to your ambition and budget
          </p>
        </div>

        {/* Service Cards - True Inverted Pyramid */}
        <div className="space-y-4 mb-16">
          {/* MOONSHOT Card - Largest (100%) */}
          <div className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-red-500 w-full mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-3xl">🚀</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">MOONSHOT</h3>
                  <Badge className="bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/10">COMPLEX</Badge>
                </div>
                <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                  What others say is impossible. Complete plant optimization, proprietary AI models, industrial Computer
                  Vision.
                </p>
                <div className="text-sm text-zinc-400">
                  <span className="text-zinc-300 font-medium">Cases:</span> ABInBev • Netflix • Confidential
                </div>
              </div>
            </div>
          </div>

          {/* TRANSFORMATION Card - Medium (75%) */}
          <div className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-purple-500 w-[75%] mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-3xl">⚡</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">TRANSFORMATION</h3>
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/10">
                    STRATEGIC
                  </Badge>
                </div>
                <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                  Critical process automation, Computer Vision for QA, prediction and forecasting systems with ML.
                </p>
                <div className="text-sm text-zinc-400">
                  <span className="text-zinc-300 font-medium">Typical ROI:</span> 3.2x in 6 months
                </div>
              </div>
            </div>
          </div>

          {/* QUICK WIN Card - Smallest (50%) */}
          <div className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-emerald-500 w-[50%] mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-3xl">🎯</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">QUICK WIN</h3>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/10">
                    FAST
                  </Badge>
                </div>
                <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                  Intelligent chatbots, AI dashboards, RPA automation, basic predictive analytics. Fast and measurable
                  results.
                </p>
                <div className="text-sm text-zinc-400">
                  <span className="text-zinc-300 font-medium">Average time to production:</span> 30 days
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
            <p className="text-zinc-400 text-sm">of enterprise clients started with Quick Win</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-zinc-400 text-sm">of projects delivered with positive ROI</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <p className="text-zinc-400 text-sm">years of applied AI experience</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Don't know where to start? We provide a free assessment of your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200 font-medium px-8 py-3">
              Schedule Assessment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white font-medium px-8 py-3 bg-transparent"
            >
              View Success Cases
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
