export default function PartnersSection() {
  return (
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-[800px] mx-auto mb-12">
        <h2 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl text-white">
          WORKING WITH TOP-100 UNIVERSITIES AND SOTA TECHNOLOGIES
        </h2>
        <p className="mt-4 text-white md:text-xl">
          Partnering with leading institutions to push the boundaries of innovation.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="p-6 flex items-center justify-center bg-[#004953]/80 backdrop-blur-sm rounded-xl hover:shadow-md transition-all duration-200 border border-[#008794]/30"
          >
            <img
              src={`/placeholder.svg?height=80&width=200&text=Partner ${index + 1}`}
              alt={`Partner ${index + 1}`}
              className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
