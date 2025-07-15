"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function CaseStudiesSection() {
  const [showABInBevDetails, setShowABInBevDetails] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const caseStudies = [
    // Row 1
    [
      {
        title: "Retail Innovation with Meta Technology",
        client: "Intuitivo",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png",
        category: "Retail",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7205978275846713346",
        hasDetails: false
      },
      {
        title: "Barley Drying Process Optimization",
        client: "ABInBev",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhR4SR5hnlCjbhOcXVdmY6jj7udXYS.png",
        category: "Manufacturing",
        link: "#",
        hasDetails: true,
        isABInBev: true
      },
      {
        title: "AI-Powered Healthcare Solutions",
        client: "MedTech Corp",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png", // Placeholder
        category: "Healthcare",
        link: "#",
        hasDetails: false
      }
    ],
    // Row 2
    [
      {
        title: "Supply Chain Optimization Platform",
        client: "LogiFlow",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png", // Placeholder
        category: "Logistics",
        link: "#",
        hasDetails: false
      },
      {
        title: "Smart Agriculture IoT System",
        client: "AgroTech",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png", // Placeholder
        category: "Agriculture",
        link: "#",
        hasDetails: false
      },
      {
        title: "Financial Risk Assessment AI",
        client: "FinSecure",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png", // Placeholder
        category: "Fintech",
        link: "#",
        hasDetails: false
      }
    ],
    // Row 3
    [
      {
        title: "Predictive Maintenance System",
        client: "IndustrialAI",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png", // Placeholder
        category: "Manufacturing",
        link: "#",
        hasDetails: false
      },
      {
        title: "Energy Optimization Platform",
        client: "GreenPower",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png", // Placeholder
        category: "Energy",
        link: "#",
        hasDetails: false
      },
      {
        title: "Autonomous Vehicle Navigation",
        client: "AutoDrive",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png", // Placeholder
        category: "Automotive",
        link: "#",
        hasDetails: false
      }
    ]
  ]

  const handleCardClick = (study, rowIndex, cardIndex) => {
    if (study.isABInBev) {
      setShowABInBevDetails(true)
    } else if (study.link !== "#") {
      window.open(study.link, "_blank")
    }
  }

  const getCardIndex = (rowIndex, cardIndex) => rowIndex * 3 + cardIndex

  return (
    <div className="container px-4 md:px-6 py-16" id="case-studies">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div className="max-w-[600px]">
          <h2 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white">
            Success Stories
          </h2>
          <p className="text-white/80 md:text-xl">Real-world examples of how Bixen drives exceptional results.</p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl">
        <div className="space-y-8">
          {caseStudies.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {row.map((study, cardIndex) => {
                const globalIndex = getCardIndex(rowIndex, cardIndex)
                return (
                  <div
                    key={cardIndex}
                    className="relative h-[300px] perspective-1000 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(globalIndex)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => handleCardClick(study, rowIndex, cardIndex)}
                  >
                    <div
                      className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                        hoveredCard === globalIndex ? 'rotate-y-180' : ''
                      }`}
                    >
                      {/* Front of card - Logo only */}
                      <div className="absolute inset-0 w-full h-full backface-hidden">
                        {/* Logo container with depth */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/20 rounded-[1.5rem] transform translate-z-4">
                          <div className="h-full flex flex-col items-center justify-center p-8">
                            {/* Logo */}
                            <div className="flex-1 flex items-center justify-center mb-4">
                              {study.client === "ABInBev" ? (
                                <div className="bg-white rounded-xl p-6 w-full max-w-[200px] flex items-center justify-center">
                                  <Image
                                    src={study.logo}
                                    alt={`${study.client} logo`}
                                    width={150}
                                    height={60}
                                    className="max-h-[60px] w-auto object-contain"
                                  />
                                </div>
                              ) : study.client === "Intuitivo" ? (
                                <div className="flex flex-col items-center justify-center gap-3 bg-white/10 rounded-xl p-6 w-full">
                                  <Image
                                    src={study.logo}
                                    alt={`${study.client} logo`}
                                    width={120}
                                    height={40}
                                    className="max-h-[40px] w-auto"
                                  />
                                  <div className="w-12 h-[1px] bg-white/30"></div>
                                  <Image
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-knYRYz3jiSN6JoRImKNt306xaJdeci.png"
                                    alt="Meta logo"
                                    width={120}
                                    height={40}
                                    className="max-h-[40px] w-auto"
                                  />
                                </div>
                              ) : (
                                <div className="bg-white/10 rounded-xl p-6 w-full flex items-center justify-center">
                                  <Image
                                    src={study.logo}
                                    alt={`${study.client} logo`}
                                    width={120}
                                    height={60}
                                    className="max-h-[60px] w-auto object-contain"
                                  />
                                </div>
                              )}
                            </div>
                            
                            {/* Category badge */}
                            <div className="mt-auto">
                              <Badge variant="secondary" className="bg-[#01F9C6]/80 text-[#004953] text-xs">
                                {study.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Back of card - Title only */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                        <div className="h-full bg-gradient-to-br from-[#01F9C6]/30 to-[#008794]/30 backdrop-blur-sm border border-[#01F9C6]/50 rounded-[1.5rem] flex items-center justify-center p-8">
                          <div className="text-center">
                            <h3 className="text-white text-xl md:text-2xl font-medium leading-tight">
                              {study.title}
                            </h3>
                            <div className="mt-4 flex items-center justify-center text-[#01F9C6]">
                              <span className="text-sm">View Case Study</span>
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* ABInBev Case Study Modal */}
      {showABInBevDetails && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4">
          <div className="bg-[#004953] rounded-[1.5rem] max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-4 md:p-6 relative">
              <button
                className="absolute top-3 right-3 text-black hover:bg-white/50 rounded-full p-2 bg-white z-10"
                onClick={() => setShowABInBevDetails(false)}
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-6">
                    <h3 className="text-[#01F9C6] text-base mb-1">CASE STUDY 2025</h3>
                    <h2 className="text-2xl font-bold text-white mb-3">
                      UY - Optimization of the barley drying process in production plant
                    </h2>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">THE COMPANY</h3>
                      <p className="text-white/90 text-sm">
                        ABInBev is the world's largest beer manufacturer, with a portfolio of more than 500 global and
                        local brands, including Budweiser, Corona, Stella Artois, Beck's, Leffe, and Hoegaarden. The
                        company was formed in 2008 after the acquisition of Anheuser-Busch by InBev.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">THE CHALLENGE</h3>
                      <p className="text-white/90 text-sm">
                        ABInBev needs to optimize the barley drying process at its plant in Uruguay, to reduce the
                        plant's energy consumption while also reducing the operating windows of the barley drying
                        process.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">EXPECTED BENEFITS</h3>
                      <ul className="text-white/90 list-disc pl-5 space-y-1 text-sm">
                        <li>High reduction in energy consumption</li>
                        <li>Plant operation optimization</li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">TECHNOLOGY</h3>
                      <ul className="text-white/90 list-disc pl-5 space-y-1 text-sm">
                        <li>Deep Learning/Machine Learning</li>
                        <li>Reinforcement Learning</li>
                        <li>Analytics/Data Science</li>
                        <li>IIoT (Industrial IoT)</li>
                        <li>AWS</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="bg-white rounded-xl overflow-hidden p-6 flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhR4SR5hnlCjbhOcXVdmY6jj7udXYS.png"
                      alt="ABInBev logo"
                      width={300}
                      height={150}
                      className="w-auto max-h-[150px]"
                    />
                  </div>

                  <div className="mt-auto pt-4 flex justify-end">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuente%20blanca%20fondo%20transparente_registrado-DEnxY22L1XvDKGRhofoq1uFyEv75Po.png"
                      alt="Bixen Logo"
                      width={100}
                      height={30}
                      className="h-6 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}