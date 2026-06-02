"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import Image from "next/image"

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Layout: row 1 = 3 cards, row 2 = 2 cards centered (via 6-col grid). Adding a 6th case breaks the 3+2 alignment.
  const caseStudies = [
    // Row 1
    [
      {
        title: "Ongoing conversations - ABInBev Process Optimization",
        client: "ABInBev",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhR4SR5hnlCjbhOcXVdmY6jj7udXYS.png",
        logoBg: "white" as const,
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
        logoBg: "transparent" as const,
        category: "Retail",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7205978275846713346",
        hasModal: false,
      },
      {
        title: "Customer Service Center Reduction",
        client: "US Logistics",
        logo: "/images/logistics-truck-logo.png",
        logoBg: "white" as const,
        category: "Logistics",
        hasModal: true,
        modalData: {
          title: "Intelligent Customer Service System (IVR)",
          company: "US Logistics is a US-based non-emergency transportation company. To reduce costs, they were embarked on a plan to reduce their staff dedicated to handling customer calls.",
          challenge: "An intelligent customer service system (IVR) was designed and implemented for call flow management. A proprietary algorithm was designed for elderly person management based on audio matching against the person database.",
          benefits: [
            "45% improvement in voice recognition for people over 75 years old",
            "60% reduction in operational costs",
          ],
          technology: [
            "NLP",
            "Speech to text",
            "Proprietary voice understanding technology",
          ],
        },
      },
    ],
    // Row 2
    [
      {
        title: "Banking Assistant Evolution",
        client: "Banking Institution",
        logo: "/images/red-flame-logo.png",
        logoBg: "black" as const,
        category: "Banking",
        hasModal: true,
        modalData: {
          title: "Banking Assistant Evolution",
          company: "A major banking institution needed to improve the performance of their IBM Watson implementation.",
          challenge: "Improve IBM Watson performance by working on the NLP pipeline, introducing proprietary technology to identify word roots and transform the information sent to IBM Watson to facilitate its work.",
          benefits: [
            "IBM Watson accuracy improved from 60% to 82%",
          ],
          technology: [
            "Natural Language Processing (AI-Deep Learning)",
            "Data Science",
            "Custom word root identification technology",
          ],
        },
      },
      {
        title: "Internal Process Automation",
        client: "América Móvil",
        logo: "/images/red-circular-logo.png",
        logoBg: "white" as const,
        category: "Telecommunications",
        hasModal: true,
        modalData: {
          title: "Process Automation Implementation",
          company: "Leading telecommunications service provider in Latin America with operations in 18 countries in the American continent and 7 countries in Europe. Along with Telmex, Telcel, and Telesites, it is controlled by Grupo Carso, whose majority shareholder is Carlos Slim.",
          challenge: "Implementation of Robot automation cell for the automation of company processes. Facilitate the task for operators and reuse human resources in tasks where they add more value. Provide speed to the portability process.",
          benefits: [
            "Reduction of human resources dedicated to portability and corporate travel validation processes (27 people)",
            "Optimization of integration with SAP CRM and other applications",
          ],
          technology: [
            "RPA (Robot Process Automation). UIPath",
            "Python for automation",
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

  const getLogoBgClass = (logoBg: string) => {
    if (logoBg === "black") return "bg-black"
    if (logoBg === "white") return "bg-white"
    return "bg-white/10"
  }

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
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {row.map((study, cardIndex) => {
                const globalIndex = getCardIndex(rowIndex, cardIndex)
                return (
                  <div
                    key={cardIndex}
                    className={`relative h-[300px] perspective-1000 cursor-pointer md:col-span-2 ${row.length === 2 && cardIndex === 0 ? "md:col-start-2" : ""}`}
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
                        <div className={`absolute inset-0 ${study.client === "Intuitivo" ? "bg-white/10 backdrop-blur-sm" : getLogoBgClass(study.logoBg)} border border-white/20 rounded-[1.5rem] overflow-hidden flex items-center justify-center`}>
                          {study.client === "Intuitivo" ? (
                            <div className="flex flex-col items-center justify-center gap-3 p-8 w-full h-full">
                              <Image
                                src={study.logo}
                                alt={`${study.client} logo`}
                                width={150}
                                height={60}
                                className="max-h-[80px] w-auto"
                              />
                              <div className="w-12 h-[1px] bg-white/30" />
                              <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-knYRYz3jiSN6JoRImKNt306xaJdeci.png"
                                alt="Meta logo"
                                width={150}
                                height={60}
                                className="max-h-[80px] w-auto"
                              />
                            </div>
                          ) : (
                            <Image
                              src={study.logo}
                              alt={`${study.client} logo`}
                              width={400}
                              height={300}
                              className="w-full h-full object-contain p-8"
                            />
                          )}
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
                    <h3 className="text-[#01F9C6] text-base mb-1">CASE STUDY</h3>
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
                      <h3 className="text-[#01F9C6] text-base mb-1">BENEFITS</h3>
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
                  <div className={`${getLogoBgClass(selectedCase.logoBg)} rounded-xl overflow-hidden p-6 flex items-center justify-center`}>
                    <Image
                      src={selectedCase.logo}
                      alt={`${selectedCase.client} logo`}
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
