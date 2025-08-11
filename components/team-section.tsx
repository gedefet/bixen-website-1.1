"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Star, ExternalLink } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface TeamMember {
  id: number
  name: string
  role: string
  location: string
  experience: string
  rating: number
  skills: string[]
  image: string
  availability: "Available" | "Busy" | "In Project"
  hourlyRate: string
  description: string
  projects: number
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Senior AI Engineer",
    location: "San Francisco, CA",
    experience: "8+ years",
    rating: 4.9,
    skills: ["TensorFlow", "PyTorch", "Computer Vision", "MLOps"],
    image: "/images/senior-ai-consultant.png",
    availability: "Available",
    hourlyRate: "$150-200",
    description: "Specialized in computer vision and deep learning with experience at top tech companies.",
    projects: 47,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "ML Engineer",
    location: "Austin, TX",
    experience: "6+ years",
    rating: 4.8,
    skills: ["Python", "Scikit-learn", "AWS", "Data Pipeline"],
    image: "/images/solo-developer-focused.png",
    availability: "In Project",
    hourlyRate: "$120-160",
    description: "Expert in building scalable ML pipelines and production systems.",
    projects: 32,
  },
  {
    id: 3,
    name: "Elena Kowalski",
    role: "NLP Specialist",
    location: "Berlin, Germany",
    experience: "7+ years",
    rating: 4.9,
    skills: ["BERT", "GPT", "Transformers", "LangChain"],
    image: "/images/person-with-award-ribbon.png",
    availability: "Available",
    hourlyRate: "$140-180",
    description: "Leading expert in natural language processing and large language models.",
    projects: 38,
  },
  {
    id: 4,
    name: "David Kim",
    role: "AI Product Manager",
    location: "Seoul, South Korea",
    experience: "10+ years",
    rating: 4.7,
    skills: ["Product Strategy", "AI Ethics", "Team Leadership", "Agile"],
    image: "/images/drone-aerial-view.png",
    availability: "Busy",
    hourlyRate: "$180-220",
    description: "Strategic leader with deep understanding of AI product development and market needs.",
    projects: 52,
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Data Scientist",
    location: "Mumbai, India",
    experience: "5+ years",
    rating: 4.8,
    skills: ["Statistics", "R", "Python", "Visualization"],
    image: "/images/office-workspace-hero.png",
    availability: "Available",
    hourlyRate: "$80-120",
    description: "Data science expert with strong statistical background and business acumen.",
    projects: 28,
  },
  {
    id: 6,
    name: "James Wilson",
    role: "MLOps Engineer",
    location: "London, UK",
    experience: "6+ years",
    rating: 4.9,
    skills: ["Kubernetes", "Docker", "MLflow", "CI/CD"],
    image: "/images/federico-new.jpg",
    availability: "Available",
    hourlyRate: "$130-170",
    description: "Infrastructure specialist focused on deploying and scaling ML systems.",
    projects: 35,
  },
]

const availabilityColors = {
  Available: "bg-green-500/20 text-green-400 border-green-500/30",
  Busy: "bg-red-500/20 text-red-400 border-red-500/30",
  "In Project": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
}

export default function TeamSection() {
  const [selectedFilter, setSelectedFilter] = useState<"All" | "Available" | "Busy" | "In Project">("All")

  const filteredMembers = teamMembers.filter(
    (member) => selectedFilter === "All" || member.availability === selectedFilter,
  )

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
            Meet Our <span className="text-[#01F9C6]">Curated Humans</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Hand-picked AI professionals with proven track records. Each expert is thoroughly vetted for technical
            excellence and cultural fit.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Available", "Busy", "In Project"].map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter as any)}
                className={cn(
                  "transition-all duration-200",
                  selectedFilter === filter
                    ? "bg-[#01F9C6] text-black hover:bg-[#01F9C6]/90"
                    : "border-white/20 text-white hover:bg-white/10",
                )}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <Card
              key={member.id}
              className="group overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 glass-hover"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Availability badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={cn("border", availabilityColors[member.availability])}>
                      {member.availability}
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 left-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{member.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-[#01F9C6] font-medium mb-2">{member.role}</p>

                    <div className="flex items-center text-white/60 text-sm space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{member.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{member.experience}</span>
                      </div>
                    </div>

                    <p className="text-white/80 text-sm mb-4 line-clamp-2">{member.description}</p>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {member.skills.slice(0, 3).map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-white/10 text-white border-white/20 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {member.skills.length > 3 && (
                        <Badge variant="secondary" className="bg-white/10 text-white border-white/20 text-xs">
                          +{member.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Stats and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-white/60">
                      <div>{member.projects} projects</div>
                      <div className="font-medium text-white">{member.hourlyRate}/hr</div>
                    </div>
                    <Button size="sm" className="bg-[#01F9C6] text-black hover:bg-[#01F9C6]/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-[#01F9C6] text-black hover:bg-[#01F9C6]/90 shadow-[0_0_10px_rgba(1,249,198,0.3)] hover:shadow-[0_0_15px_rgba(1,249,198,0.5)] btn-hover"
          >
            Browse All Talent
          </Button>
        </div>
      </div>
    </section>
  )
}
