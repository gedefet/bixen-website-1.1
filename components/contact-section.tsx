"use client"

import { Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <div className="container px-2 md:px-6">
      <div className="grid gap-4 md:gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-3 md:space-y-4">
          <div className="space-y-2 md:space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              Get in Touch
            </h2>

            <p className="text-foreground text-sm md:text-xl">Ready to create something extraordinary? Let's talk.</p>
          </div>
          <div className="space-y-3 md:space-y-4 mt-8 md:mt-16">
            <div className="flex items-start gap-3 md:gap-4">
              <MapPin className="h-4 w-4 md:h-6 md:w-6 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground text-sm md:text-base">Our Location</h3>
                <p className="text-muted-foreground text-xs md:text-base">
                  Ing. Enrique Butty 275 Capital Federal, C1001 AFA, Buenos Aires
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4">
              <Mail className="h-4 w-4 md:h-6 md:w-6 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground text-sm md:text-base">Email Us</h3>
                <p className="text-muted-foreground text-xs md:text-base">contact@bixen.ai</p>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-8 aspect-video w-full rounded-xl overflow-hidden bg-muted relative">
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
        <div id="contact-form" className="bg-card/80 backdrop-blur-sm p-4 md:p-8 rounded-xl border border-border">
          <div className="flex flex-col items-center justify-center h-full space-y-4 md:space-y-8">
            <div className="text-center">
              <h3 className="text-lg md:text-2xl font-medium text-foreground mb-2 md:mb-4">Send us an email</h3>
              <p className="text-muted-foreground text-sm md:text-lg mb-4 md:mb-8">
                To discuss your project or explore partnership opportunities, please send an email to our team at:
              </p>
              <div className="flex justify-center mb-2 md:mb-4">
                <a
                  href="mailto:contact@bixen.ai?subject=Inquiry from Bixen Website"
                  className="bg-muted px-4 md:px-6 py-3 md:py-4 rounded-lg border border-secondary/30 hover:bg-muted/80 transition-colors"
                >
                  <p className="text-secondary text-lg md:text-xl font-medium">contact@bixen.ai</p>
                </a>
              </div>
            </div>

            <p className="text-muted-foreground text-center text-xs md:text-sm">
              We'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
