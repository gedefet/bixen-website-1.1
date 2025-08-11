"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

export default function TeamSection() {
  const team = [
    {
      name: "Federico Lopez",
      role: "Founder & CEO",
      bio: "PhD en IA • 10+ años transformando empresas",
      image: "/images/federico-new.jpg",
      linkedin: "#",
    },
    {
      name: "Alejandro Sagula",
      role: "Corporate Architecture Expert",
      bio: "30+ años en arquitectura empresarial",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alesagula-1gDy7EWJAz339nREa6XP184LtGKXRd.jpeg",
      linkedin: "#",
    },
    {
      name: "Damian Minnock",
      role: "AI & ML Leader",
      bio: "MSc AI • Computer Vision & LLM Expert",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/damian.jpg-QJtCUyZNrHwbqwzufrI74Rs0MtwF4R.jpeg",
      linkedin: "#",
    },
    {
      name: "Florencia Zalazar",
      role: "HR Manager",
      bio: "Construyendo cultura de innovación",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/florencia.jpg-jPdi9r41DvdVPdEoob4Ym8FJYeHe4x.jpeg",
      linkedin: "#",
    },
    {
      name: "Joaquin Cuomo",
      role: "Expert Advisor",
      bio: "MSc • LLM & NLP Specialist",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joaquin.jpg-96rpwQDiOQcEwd3svKiVRDN9SS7Eyc.jpeg",
      linkedin: "#",
    },
  ]

  return (
    <section id="team" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Mentes que{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">Moldean</span>{" "}
            el Futuro
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Expertos con décadas de experiencia construyendo el futuro de la IA
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
              }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* LinkedIn Overlay */}
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute top-4 right-4">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#8B5CF6] group-hover:to-[#06B6D4] transition-all duration-300">
                    {member.name}
                  </h3>
                  <div className="text-[#06B6D4] font-medium mb-3">{member.role}</div>
                  <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-[#06B6D4]/10 rounded-3xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
