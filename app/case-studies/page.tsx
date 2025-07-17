"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function CaseStudiesPage() {
  const [currentCaseStudy, setCurrentCaseStudy] = useState<any>(null)
  const [showCaseStudyDetails, setShowCaseStudyDetails] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [flippedCards, setFlippedCards] = useState(new Set<number>())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const caseStudies = [
    {
      title: "Retail Innovation with Meta Technology",
      client: "Intuitivo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png",
      category: "Retail",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7205978275846713346",
      hasModal: false,
      summary:
        "Implementing Meta's SAM algorithm to enhance computer vision capabilities for autonomous retail solutions.",
    },
    {
      title: "Barley Drying Process Optimization",
      client: "ABInBev",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhR4SR5hnlCjbhOcXVdmY6jj7udXYS.png",
      category: "Manufacturing",
      hasModal: true,
      summary: "Optimizing barley drying processes to reduce energy consumption and improve plant operations.",
      modalData: {
        title: "UY - Optimization of the barley drying process in production plant",
        company:
          "ABInBev is the world's largest beer manufacturer, with a portfolio of more than 500 global and local brands, including Budweiser, Corona, Stella Artois, Beck's, Leffe, and Hoegaarden. The company was formed in 2008 after the acquisition of Anheuser-Busch by InBev.",
        challenge:
          "ABInBev needs to optimize the barley drying process at its plant in Uruguay, to reduce the plant's energy consumption while also reducing the operating windows of the barley drying process.",
        benefits: ["High reduction in energy consumption", "Plant operation optimization"],
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
      title: "3D Body Scan Validation",
      client: "Netflix",
      logo: "/images/netflix-logo.png",
      category: "Healthcare",
      hasModal: true,
      summary: "Developing AI-based validation systems for 3D body scanning technology achieving 98.4% precision.",
      modalData: {
        title: "3D Body Scan Validation System",
        company:
          "A healthcare technology company was experiencing difficulties with their scans, due to failures both in their quality and in the subject being measured, which made it difficult for them to implement at scale.",
        challenge:
          "The company needed to improve the quality and reliability of their 3D body scanning technology to enable large-scale deployment.",
        benefits: [
          "98.4% precision in the detection of people's health parameters",
          "The product was launched massively in California",
          "250% growth in the first year",
        ],
        technology: ["Computer Vision (AI - Deep Learning)", "Data Science"],
      },
    },
    {
      title: "Customer Service Center Reduction",
      client: "US Logistics",
      logo: "/images/logistics-truck-logo.png",
      category: "Logistics",
      hasModal: true,
      summary: "Implementing intelligent voice recognition systems to reduce customer service costs by 60%.",
      modalData: {
        title: "Intelligent Customer Service System (IVR)",
        company:
          "US Logistics is a US-based non-emergency transportation company. To reduce costs, they were embarked on a plan to reduce their staff dedicated to handling customer calls.",
        challenge:
          "An intelligent customer service system (IVR) was designed and implemented for call flow management. A proprietary algorithm was designed for elderly person management based on audio matching against the person database.",
        benefits: [
          "45% improvement in voice recognition for people over 75 years old",
          "60% reduction in operational costs",
        ],
        technology: ["NLP", "Speech to text", "Proprietary voice understanding technology"],
      },
    },
    {
      title: "Banking Assistant Evolution",
      client: "Banking Institution",
      logo: "/images/red-flame-logo.png",
      category: "Banking",
      hasModal: true,
      summary: "Enhanced IBM Watson performance through custom NLP pipeline and root word identification technology.",
      modalData: {
        title: "Banking Assistant Evolution",
        company: "A major banking institution needed to improve the performance of their IBM Watson implementation.",
        challenge:
          "Improve IBM Watson performance by working on the NLP pipeline, introducing proprietary technology to identify word roots and transform the information sent to IBM Watson to facilitate its work.",
        benefits: ["IBM Watson accuracy improved from 60% to 82%"],
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
      category: "Telecommunications",
      hasModal: true,
      summary: "Implementing RPA automation to reduce 27 personnel and optimize portability processes.",
      modalData: {
        title: "Process Automation Implementation",
        company:
          "Leading telecommunications service provider in Latin America with operations in 18 countries in the American continent and 7 countries in Europe. Along with Telmex, Telcel, and Telesites, it is controlled by Grupo Carso, whose majority shareholder is Carlos Slim.",
        challenge:
          "Implementation of Robot automation cell for the automation of company processes. Facilitate the task for operators and reuse human resources in tasks where they add more value. Provide speed to the portability process.",
        benefits: [
          "Reduction of human resources dedicated to portability and corporate travel validation processes (27 people)",
          "Optimization of integration with SAP CRM and other applications",
        ],
        technology: ["RPA (Robot Process Automation). UIPath", "Python for automation"],
      },
    },
    {
      title: "Supply Chain Optimization Platform",
      client: "Mercado Libre",
      logo: "/images/red-flame-logo.png",
      category: "E-commerce",
      hasModal: true,
      summary: "Optimizing supply chain operations across Latin America reducing delivery times by 30%.",
      modalData: {
        title: "Supply Chain Optimization and Logistics Intelligence",
        company:
          "Mercado Libre is Latin America's leading e-commerce technology company, operating online marketplaces dedicated to e-commerce and online auctions.",
        challenge:
          "Mercado Libre needed to optimize their supply chain operations across Latin America to reduce delivery times and costs while improving inventory management.",
        benefits: ["30% reduction in delivery times", "25% cost savings in logistics", "Improved inventory turnover"],
        technology: [
          "Machine Learning",
          "Predictive Analytics",
          "IoT Integration",
          "Real-time Data Processing",
          "Cloud Computing",
        ],
      },
    },
    {
      title: "Predictive Maintenance System",
      client: "Siemens",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-siemens-logo.png",
      category: "Manufacturing",
      hasModal: true,
      summary: "Industrial predictive maintenance platform to reduce downtime and optimize maintenance schedules.",
      modalData: {
        title: "Industrial Predictive Maintenance Platform",
        company:
          "Siemens is a German multinational conglomerate company and the largest industrial manufacturing company in Europe, with branch offices abroad.",
        challenge:
          "Siemens needed to implement predictive maintenance across their industrial equipment to reduce downtime, optimize maintenance schedules, and extend equipment lifespan.",
        benefits: [
          "40% reduction in unplanned downtime",
          "30% decrease in maintenance costs",
          "Extended equipment lifespan",
        ],
        technology: [
          "Industrial IoT",
          "Machine Learning",
          "Digital Twin Technology",
          "Edge Computing",
          "Time Series Analysis",
        ],
      },
    },
    {
      title: "Energy Grid Optimization",
      client: "Enel",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-enel-logo.png",
      category: "Energy",
      hasModal: true,
      summary:
        "Smart grid optimization and energy management system for improved efficiency and renewable integration.",
      modalData: {
        title: "Smart Grid Optimization and Energy Management",
        company:
          "Enel is an Italian multinational manufacturer and distributor of electricity and gas, serving end users and markets. It is the largest utility company in Europe by revenue.",
        challenge:
          "Enel required an intelligent energy grid management system to optimize energy distribution, integrate renewable sources, and improve grid stability across their network.",
        benefits: [
          "25% improvement in grid efficiency",
          "Better renewable energy integration",
          "Reduced energy losses",
        ],
        technology: [
          "AI/ML Algorithms",
          "Smart Grid Technology",
          "Real-time Analytics",
          "IoT Integration",
          "Cloud Computing",
        ],
      },
    },
  ]

  const handleCaseStudyClick = (e: React.MouseEvent<HTMLAnchorElement>, study: any) => {
    e.preventDefault()
    setCurrentCaseStudy(study)
    setShowCaseStudyDetails(true)
  }

  const handleCardClick = (study: any, index: number) => {
    if (study.client === "Intuitivo") {
      window.open(study.link, "_blank")
    } else if (study.hasModal) {
      setCurrentCaseStudy(study)
      setShowCaseStudyDetails(true)
    }
  }

  // Mobile scroll-based flip detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return // Only for mobile

      const newFlippedCards = new Set<number>()
      const viewportCenter = window.innerHeight / 2

      cardRefs.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect()
          const cardCenter = rect.top + rect.height / 2
          const distanceFromCenter = Math.abs(cardCenter - viewportCenter)

          // Flip when card center is within 100px of viewport center
          if (distanceFromCenter < 100) {
            newFlippedCards.add(index)
          }
        }
      })

      setFlippedCards(newFlippedCards)
    }

    // Only add scroll listener on mobile
    if (window.innerWidth < 768) {
      window.addEventListener("scroll", handleScroll)
      handleScroll() // Initial check
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Desktop hover handlers
  const handleMouseEnter = (index: number) => {
    if (window.innerWidth >= 768) {
      setHoveredCard(index)
      setFlippedCards((prev) => new Set([...prev, index]))
    }
  }

  const handleMouseLeave = (index: number) => {
    if (window.innerWidth >= 768) {
      setHoveredCard(null)
      setFlippedCards((prev) => {
        const newSet = new Set(prev)
        newSet.delete(index)
        return newSet
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#004953] via-[#006B7A] to-[#008794]">
      <div className="container px-4 md:px-6 py-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="text-white hover:text-[#01F9C6] transition-colors flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white">
            All Case Studies
          </h1>
          <p className="text-white/80 md:text-xl max-w-[600px]">
            Explore our complete portfolio of successful AI and technology implementations across various industries.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="relative h-[350px] perspective-1000 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleCardClick(study, index)}
              >
                <div
                  className={`success-story-card w-full h-full card-glow transition-transform duration-700 transform-style-preserve-3d ${
                    flippedCards.has(index) ? "flipped" : ""
                  }`}
                >
                  {/* Front of card - Logo occupying almost entire card */}
                  <div className="card-front absolute inset-0 w-full h-full backface-hidden">
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-[1.5rem] flex flex-col items-center justify-center p-4 hover:bg-white/10 transition-all duration-300">
                      {/* Logo container taking up most of the card */}
                      <div className="logo-float flex-1 flex items-center justify-center w-full">
                        {study.client === "ABInBev" ? (
                          <div className="bg-white rounded-xl p-8 shadow-2xl transform translate-z-30 w-full h-full flex items-center justify-center">
                            <Image
                              src={study.logo || "/placeholder.svg"}
                              alt={`${study.client} logo`}
                              width={280}
                              height={120}
                              className="max-h-[120px] w-auto object-contain"
                            />
                          </div>
                        ) : study.client === "Intuitivo" ? (
                          <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center gap-4 shadow-2xl transform translate-z-30 w-full h-full justify-center">
                            <Image
                              src={study.logo || "/placeholder.svg"}
                              alt={`${study.client} logo`}
                              width={220}
                              height={90}
                              className="max-h-[90px] w-auto object-contain"
                            />
                            <div className="w-16 h-[1px] bg-white/30"></div>
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-knYRYz3jiSN6JoRImKNt306xaJdeci.png"
                              alt="Meta logo"
                              width={220}
                              height={90}
                              className="max-h-[90px] w-auto object-contain"
                            />
                          </div>
                        ) : study.client === "Netflix" ? (
                          <div className="bg-black rounded-xl p-8 shadow-2xl transform translate-z-30 w-full h-full flex items-center justify-center">
                            <Image
                              src={study.logo || "/placeholder.svg"}
                              alt={`${study.client} logo`}
                              width={280}
                              height={120}
                              className="max-h-[120px] w-auto object-contain"
                            />
                          </div>
                        ) : study.client === "US Logistics" ? (
                          <div className="bg-white rounded-xl p-8 shadow-2xl transform translate-z-30 w-full h-full flex items-center justify-center">
                            <Image
                              src={study.logo || "/placeholder.svg"}
                              alt={`${study.client} logo`}
                              width={280}
                              height={200}
                              className="max-h-[200px] w-auto object-contain"
                            />
                          </div>
                        ) : study.client === "Banking Institution" ? (
                          <div className="bg-black rounded-xl p-8 shadow-2xl transform translate-z-30 w-full h-full flex items-center justify-center">
                            <Image
                              src={study.logo || "/placeholder.svg"}
                              alt={`${study.client} logo`}
                              width={200}
                              height={200}
                              className="max-h-[200px] w-auto object-contain"
                            />
                          </div>
                        ) : study.client === "América Móvil" ? (
                          <div className="bg-white rounded-xl p-8 shadow-2xl transform translate-z-30 w-full h-full flex items-center justify-center">
                            <Image
                              src={study.logo || "/placeholder.svg"}
                              alt={`${study.client} logo`}
                              width={200}
                              height={200}
                              className="max-h-[200px] w-auto object-contain"
                            />
                          </div>
                        ) : study.client === "Mercado Libre" ? (
                          <div className="bg-white rounded-xl p-8 shadow-2xl transform translate-z-30 w-full h-full flex items-center justify-center">
                            <Image
                              src={study.logo || "/placeholder.svg"}
                              alt={`${study.client} logo`}
                              width={200}
                              height={200}
                              className="max-h-[200px] w-auto object-contain"
                            />
                          </div>
                        ) : (
                          <div className="bg-white/10 rounded-xl p-8 shadow-2xl transform translate-z-30 w-full h-full flex items-center justify-center">
                            <Image
                              src={study.logo || "/placeholder.svg"}
                              alt={`${study.client} logo`}
                              width={260}
                              height={110}
                              className="max-h-[110px] w-auto object-contain"
                            />
                          </div>
                        )}
                      </div>

                      {/* Category badge */}
                      <div className="mt-4">
                        <Badge variant="secondary" className="bg-[#01F9C6]/80 text-[#004953] text-xs">
                          {study.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Back of card - Case study summary */}
                  <div className="card-back absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="h-full bg-gradient-to-br from-[#01F9C6]/30 to-[#008794]/30 backdrop-blur-sm border border-[#01F9C6]/50 rounded-[1.5rem] p-6 flex flex-col shadow-2xl">
                      <h3 className="text-white text-xl font-medium mb-4 line-clamp-2">{study.title}</h3>

                      <div className="flex-1 flex items-center justify-center">
                        <p className="text-white/90 text-sm text-center leading-relaxed">{study.summary}</p>
                      </div>

                      <div className="mt-4 text-center">
                        <span className="text-[#01F9C6] text-sm font-medium">
                          {study.client === "Intuitivo" ? "View on LinkedIn" : "View Details"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Modal */}
        {showCaseStudyDetails && currentCaseStudy && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4">
            <div className="bg-[#004953] rounded-[1.5rem] max-w-4xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-4 md:p-6 relative">
                <button
                  className="absolute top-3 right-3 text-black hover:bg-white/50 rounded-full p-2 bg-white z-10"
                  onClick={() => setShowCaseStudyDetails(false)}
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-[#01F9C6] text-base mb-1">CASE STUDY</h3>
                      <h2 className="text-2xl font-bold text-white mb-3">{currentCaseStudy.modalData.title}</h2>

                      <div className="mb-4">
                        <h3 className="text-[#01F9C6] text-base mb-1">THE COMPANY</h3>
                        <p className="text-white/90 text-sm">{currentCaseStudy.modalData.company}</p>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-[#01F9C6] text-base mb-1">THE CHALLENGE</h3>
                        <p className="text-white/90 text-sm">{currentCaseStudy.modalData.challenge}</p>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-[#01F9C6] text-base mb-1">BENEFITS</h3>
                        <ul className="text-white/90 list-disc pl-5 space-y-1 text-sm">
                          {currentCaseStudy.modalData.benefits.map((benefit: string, index: number) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-[#01F9C6] text-base mb-1">TECHNOLOGY</h3>
                        <ul className="text-white/90 list-disc pl-5 space-y-1 text-sm">
                          {currentCaseStudy.modalData.technology.map((tech: string, index: number) => (
                            <li key={index}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="bg-white rounded-xl overflow-hidden p-6 flex flex-col items-center justify-center">
                      {currentCaseStudy.client === "Intuitivo" ? (
                        <div className="flex flex-col items-center justify-center gap-4">
                          <Image
                            src={currentCaseStudy.logo || "/placeholder.svg"}
                            alt={`${currentCaseStudy.client} logo`}
                            width={200}
                            height={60}
                            className="max-h-[60px] w-auto object-contain"
                          />
                          <div className="w-16 h-[1px] bg-gray-300"></div>
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-knYRYz3jiSN6JoRImKNt306xaJdeci.png"
                            alt="Meta logo"
                            width={200}
                            height={60}
                            className="max-h-[60px] w-auto object-contain"
                          />
                        </div>
                      ) : currentCaseStudy.client === "Netflix" ? (
                        <div className="flex flex-col items-center justify-center gap-4">
                          {/* Only body scan image for Netflix, no logo */}
                          <div className="rounded-lg overflow-hidden">
                            <Image
                              src="/images/body-scan-comparison.png"
                              alt="3D Body Scan Comparison"
                              width={350}
                              height={200}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={currentCaseStudy.logo || "/placeholder.svg"}
                          alt={`${currentCaseStudy.client} logo`}
                          width={300}
                          height={150}
                          className="w-auto max-h-[150px] object-contain"
                        />
                      )}
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
    </div>
  )
}
