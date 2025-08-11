"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

type TeamMember = {
  name: string
  role: string
  description: string
  image: string
  skills: string[]
  linkedin?: string
  email?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Federico Lopez",
    role: "Founder & CEO",
    description: "AI strategist with 10+ years building scalable solutions for Fortune 500 companies.",
    image: "/images/federico-new.jpg",
    skills: ["AI Strategy", "Product Leadership", "Team Building"],
    linkedin: "https://linkedin.com/in/federicolopez",
    email: "federico@bixen.co",
  },
  {
    name: "Senior AI Consultant",
    role: "Technical Lead",
    description: "Expert in machine learning and deep learning with extensive experience in computer vision.",
    image: "/images/senior-ai-consultant.png",
    skills: ["Machine Learning", "Computer Vision", "MLOps"],
  },
  {
    name: "Solo Developer",
    role: "Full Stack Developer",
    description: "Focused developer specializing in AI-powered applications and modern web technologies.",
    image: "/images/solo-developer-focused.png",
    skills: ["React", "Python", "AI Integration"],
  },
  {
    name: "Award Winner",
    role: "Data Scientist",
    description: "Award-winning data scientist with expertise in predictive analytics and business intelligence.",
    image: "/images/person-with-award-ribbon.png",
    skills: ["Data Science", "Analytics", "Business Intelligence"],
  },
]

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center max-w-[900px] mx-auto mb-12 md:mb-16">
        <h2 className="text-4xl font-light sm:text-5xl md:text-6xl mb-4 text-white">Meet Our Team</h2>
        <p className="text-white/80 text-lg md:text-xl">Exceptional talent driving innovation in AI and technology.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="group overflow-hidden bg-[#004953]/80 backdrop-blur-sm border-[#008794]/30 glass-hover"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-[#004953]">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="h-full w-full object-cover image-grade transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 pointer-events-none photo-grade" />

              {/* Social links overlay */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-[#0dc4a8]/20 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-[#0dc4a8]/20 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-white text-xl font-semibold tracking-tight mb-1">{member.name}</h3>
              <p className="text-[#01F9C6] text-sm font-medium mb-3">{member.role}</p>
              <p className="text-white/75 text-sm leading-relaxed mb-4">{member.description}</p>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-[#0dc4a8]/10 text-[#0dc4a8] border-[#0dc4a8]/20 text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-300" />
          </Card>
        ))}
      </div>
    </section>
  )
}
