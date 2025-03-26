"use client"

import { Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div className="space-y-4">
            <h2 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl text-white">Get in Touch</h2>

            <p className="text-white md:text-xl">Ready to create something extraordinary? Let's talk.</p>
          </div>
          <div className="space-y-4 mt-16">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-[#01F9C6] shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white">Our Location</h3>
                <p className="text-white">Ing. Enrique Butty 275 Capital Federal, C1001 AFA, Buenos Aires</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-[#01F9C6] shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white">Email Us</h3>
                <p className="text-white">contact@bixen.ai</p>
              </div>
            </div>
          </div>
          <div className="mt-8 aspect-video w-full rounded-xl overflow-hidden bg-[#004953] relative">
            {/* OpenStreetMap iframe which doesn't require an API key */}
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-58.37631%2C-34.60297%2C-58.36631%2C-34.59297&amp;layer=mapnik&amp;marker=-34.59797%2C-58.37131"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bixen Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
        <div id="contact-form" className="bg-[#004953]/80 backdrop-blur-sm p-8 rounded-xl border border-[#008794]/30">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-medium text-white mb-4">Send us an email</h3>
              <p className="text-white/80 text-lg mb-8">
                To discuss your project or explore partnership opportunities, please send an email to our team at:
              </p>
              <div className="flex justify-center mb-4">
                <a
                  href="mailto:contact@bixen.ai?subject=Inquiry from Bixen Website"
                  className="bg-white/10 px-6 py-4 rounded-lg border border-[#01F9C6]/30 hover:bg-white/20 transition-colors"
                >
                  <p className="text-[#01F9C6] text-xl font-medium">contact@bixen.ai</p>
                </a>
              </div>
            </div>

            <p className="text-white/60 text-center text-sm">We'll get back to you as soon as possible.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

