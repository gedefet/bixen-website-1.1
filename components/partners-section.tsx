"use client"

import { motion } from "framer-motion"

export default function PartnersSection() {
  const techStack = [
    { name: "Google AI", logo: "/tech/googlecloud.svg" },
    { name: "Azure", logo: "/tech/microsoftazure.svg" },
    { name: "AWS", logo: "/tech/amazonaws.svg" },
    { name: "NVIDIA", logo: "/tech/nvidia.svg" },
    { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/tech/pytorch.svg" },
    { name: "OpenAI", logo: "/tech/openai.svg" },
    { name: "Hugging Face", logo: "/tech/huggingface.svg" },
  ]

  const clients = [
    {
      name: "ABInBev",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhR4SR5hnlCjbhOcXVdmY6jj7udXYS.png",
    },
    { name: "Netflix", logo: "/images/netflix-logo.png" },
    {
      name: "Meta",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-knYRYz3jiSN6JoRImKNt306xaJdeci.png",
    },
    {
      name: "Intuitivo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png",
    },
  ]

  return (
    <section id="partners" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Partners &{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Tecnologías
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Trabajamos con las tecnologías más avanzadas y los líderes de la industria
          </p>
        </motion.div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white/80">Tech Stack</h3>
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -100 * techStack.length] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="flex gap-12 items-center"
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <div key={index} className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
                  <img
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Clients */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-white/80">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="max-w-full max-h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
