import { Mail, MapPin } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-[#203a43]">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10 items-start">
          <div className="bg-[#004953]/80 border border-[#008794]/30 rounded-xl p-4 md:p-8">
            <h3 className="text-2xl md:text-3xl text-white font-semibold">Let’s build</h3>
            <p className="mt-2 text-white/80 text-sm md:text-base">
              Tell us about your goals. We’ll propose a path to impact — from pilots to production.
            </p>

            <div className="mt-6 flex items-start gap-3">
              <Mail className="h-5 w-5 text-[#01F9C6] mt-0.5" />
              <div>
                <p className="text-white/80 text-sm">Email</p>
                <a
                  className="text-[#01F9C6] font-medium"
                  href="mailto:contact@bixen.ai?subject=Inquiry%20from%20Bixen%20Website"
                >
                  contact@bixen.ai
                </a>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#01F9C6] mt-0.5" />
              <div>
                <p className="text-white/80 text-sm">Office</p>
                <p className="text-white text-sm">
                  Ing. Enrique Butty 275, CABA, Buenos Aires, Argentina
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#004953] aspect-video">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-58.37631%2C-34.60297%2C-58.36631%2C-34.59297&amp;layer=mapnik&amp;marker=-34.59797%2C-58.37131"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bixen Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
