"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const caseStudies = [
    // Row 1
    [
      {
        title: "Ongoing conversations - ABInBev Process Optimization",
        client: "ABInBev",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhR4SR5hnlCjbhOcXVdmY6jj7udXYS.png",
        category: "Manufacturing",
        hasModal: true,
        modalData: {
          title: "UY - Optimization of the barley drying process in production plant",
          company: "ABInBev is the world's largest beer manufacturer, with a portfolio of more than 500 global and local brands, including Budweiser, Corona, Stella Artois, Beck's, Leffe, and Hoegaarden. The company was formed in 2008 after the acquisition of Anheuser-Busch by InBev.",
          challenge: "ABInBev needs to optimize the barley drying process at its plant in Uruguay, to reduce the plant's energy consumption while also reducing the operating windows of the barley drying process.",
          benefits: [
            "High reduction in energy consumption",
            "Plant operation optimization",
          ],
          technology: [
            "Deep Learning/Machine Learning",
            "Reinforcement Learning",
            "Analytics/Data Science",
            "IIoT (Industrial IoT)",
            "AWS",
          ],
        },
      },
      {
        title: "Retail Innovation with Meta Technology",
        client: "Intuitivo",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png",
        category: "Retail",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7205978275846713346",
        hasModal: false,
      },
      {
        title: "3D Body Scan Validation",
        client: null,
        logo: null,
        category: "Healthcare",
        hasModal: true,
        modalData: {
          title: "3D Body Scan Validation System",
          company: "Confidential client in the healthcare sector.",
          challenge: "Develop an AI-based validation system for detecting and classifying deficient body scans using a database of 29,000 scans across different body parts.",
          benefits: [
            "98.4% precision in health parameter detection",
            "250% growth in first year",
          ],
          technology: [
            "Deep Learning",
            "Computer Vision",
            "Classification Models",
            "Data Science",
          ],
        },
      },
    ],
    // Row 2
    [
      {
        title: "Customer Service Center Reduction",
        client: null,
        logo: null,
        category: "Logistics",
        hasModal: true,
        modalData: {
          title: "Intelligent Customer Service System (IVR)",
          company: "Confidential client in the logistics sector.",
          challenge: "Design and implement an intelligent voice assistant (IVA) system for call flow management, with proprietary algorithms for elderly voice recognition.",
          benefits: [
            "45% improvement in voice recognition for people over 75 years",
            "60% reduction in operational costs",
          ],
          technology: [
            "Natural Language Processing",
            "Voice Processing",
            "IVA System",
            "Proprietary Algorithms",
          ],
        },
      },
      {
        title: "Banking Assistant Evolution",
        client: null,
        logo: null,
        category: "Banking",
        hasModal: true,
        modalData: {
          title: "Banking Assistant Evolution",
          company: "Confidential banking client.",
          challenge: "Enhance IBM Watson performance through a custom NLP pipeline and root word identification technology to improve conversational accuracy.",
          benefits: [
            "Watson accuracy improved from 60% to 82%",
          ],
          technology: [
            "Natural Language Processing",
            "IBM Watson",
            "Custom NLP Pipeline",
            "Root Word Identification",
          ],
        },
      },
      {
        title: "Internal Process Automation",
        client: null,
        logo: null,
        category: "Telecommunications",
        hasModal: true,
        modalData: {
          title: "Internal Process Automation",
          company: "Confidential telecommunications client.",
          challenge: "Implement a robotic process automation (RPA) cell for internal company processes to facilitate operator tasks and optimize human resource allocation.",
          benefits: [
            "Reduced 27 personnel dedicated to portability processes",
            "Optimized corporate travel validation processes",
          ],
          technology: [
            "Robotic Process Automation (RPA)",
            "Process Optimization",
            "Workflow Automation",
          ],
        },
      },
    ],
  ]

  const handleCardClick = (study) => {
    if (study.client === "Intuitivo") {
      window.open(study.link, "_blank")
    } else if (study.hasModal) {
      setSelectedCase(study)
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
                    onClick={() => handleCardClick(study)}
                  >
                    <div
                      className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                        hoveredCard === globalIndex ? "rotate-y-180" : ""
                      }`}
                    >
                      {/* Front of card */}
                      <div className="absolute inset-0 w-full h-full backface-hidden">
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/20 rounded-[1.5rem] transform translate-z-4">
                          <div className="h-full flex flex-col items-center justify-center p-8">
                            <div className="flex-1 flex items-center justify-center mb-4 w-full">
                              {study.logo ? (
                                study.client === "ABInBev" ? (
                                  <div className="bg-white rounded-xl p-6 w-full max-w-[250px] flex items-center justify-center">
                                    <Image
                                      src={study.logo}
                                      alt={`${study.client} logo`}
                                      width={200}
                                      height={80}
                                      className="max-h-[80px] w-auto object-contain"
                                    />
                                  </div>
                                ) : (
                                  <div className="flex flex-col items-center justify-center gap-3 bg-white/10 rounded-xl p-6 w-full">
                                    <Image
                                      src={study.logo}
                                      alt={`${study.client} logo`}
                                      width={150}
                                      height={60}
                                      className="max-h-[60px] w-auto"
                                    />
                                    <div className="w-12 h-[1px] bg-white/30" />
                                    <Image
                                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-knYRYz3jiSN6JoRImKNt306xaJdeci.png"
                                      alt="Meta logo"
                                      width={150}
                                      height={60}
                                      className="max-h-[60px] w-auto"
                                    />
                                  </div>
                                )
                              ) : (
                                <div className="bg-white/10 rounded-xl p-6 w-full flex items-center justify-center">
                                  <p className="text-white/70 text-center text-sm font-medium leading-snug">
                                    {study.title}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div className="mt-auto">
                              <Badge variant="secondary" className="bg-[#01F9C6]/80 text-[#004953] text-xs">
                                {study.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Back of card */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                        <div className="h-full bg-gradient-to-br from-[#01F9C6]/30 to-[#008794]/30 backdrop-blur-sm border border-[#01F9C6]/50 rounded-[1.5rem] flex items-center justify-center p-8">
                          <div className="text-center">
                            <h3 className="text-white text-xl md:text-2xl font-medium leading-tight">
                              {study.title}
                            </h3>
                            <div className="mt-4 flex items-center justify-center text-[#01F9C6]">
                              <span className="text-sm">
                                {study.client === "Intuitivo" ? "View on LinkedIn" : "View Case Study"}
                              </span>
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

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4">
          <div className="bg-[#004953] rounded-[1.5rem] max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-4 md:p-6 relative">
              <button
                className="absolute top-3 right-3 text-black hover:bg-white/50 rounded-full p-2 bg-white z-10"
                onClick={() => setSelectedCase(null)}
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-6">
                    <h3 className="text-[#01F9C6] text-base mb-1">CASE STUDY 2025</h3>
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {selectedCase.modalData.title}
                    </h2>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">THE COMPANY</h3>
                      <p className="text-white/90 text-sm">{selectedCase.modalData.company}</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">THE CHALLENGE</h3>
                      <p className="text-white/90 text-sm">{selectedCase.modalData.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">EXPECTED BENEFITS</h3>
                      <ul className="text-white/90 list-disc pl-5 space-y-1 text-sm">
                        {selectedCase.modalData.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">TECHNOLOGY</h3>
                      <ul className="text-white/90 list-disc pl-5 space-y-1 text-sm">
                        {selectedCase.modalData.technology.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  {selectedCase.logo ? (
                    <div className="bg-white rounded-xl overflow-hidden p-6 flex items-center justify-center">
                      <Image
                        src={selectedCase.logo}
                        alt={`${selectedCase.client} logo`}
                        width={300}
                        height={150}
                        className="w-auto max-h-[150px]"
                      />
                    </div>
                  ) : (
                    <div className="bg-white/10 rounded-xl p-6 flex items-center justify-center">
                      <Badge variant="secondary" className="bg-[#01F9C6]/80 text-[#004953] text-sm px-4 py-2">
                        {selectedCase.category}
                      </Badge>
                    </div>
                  )}

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
