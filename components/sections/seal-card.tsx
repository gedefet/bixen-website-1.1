import Image from "next/image"

export default function SealCard() {
  return (
    <section className="bg-[#203a43]">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="bg-[#01F9C6] rounded-full p-2">
                <span className="sr-only">{'Certified by Bixen'}</span>
                <div className="h-6 w-6 rounded-full bg-black" aria-hidden="true"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">The Bixen Seal</h3>
            </div>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              All our engineers pass a proprietary certification process that includes AI technical challenges, code
              reviews, and soft skills evaluation. Only then do they obtain the “Certified by Bixen” seal — your
              guarantee of quality and execution.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/bixen-seal-stamp.png"
              alt="The Bixen Seal — Professional Certification"
              width={800}
              height={500}
              className="w-full h-auto rounded-xl border border-white/10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
