"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import Image from "next/image"

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState(null)
  const [flippedCards, setFlippedCards] = useState(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const successStories = [
    {
      id: "abinbev",
      title: "Ongoing conversations - ABInBev Process Optimization",
      client: "ABInBev",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhR4SR5hnlCjbhOcXVdmY6jj7udXYS.png",
      category: "Manufacturing",
      status: "In Progress",
      summary:
        "Optimizing barley drying processes to reduce energy consumption and improve plant operations in Manufacturing.",
      modalContent: {
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
      id: "intuitivo",
      title: "Retail Innovation with Meta Technology",
      client: "Intuitivo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png",
      category: "Retail",
      summary:
        "Implementing Meta's SAM algorithm to enhance computer vision capabilities for autonomous retail solutions in Retail.",
      modalContent: {
        title: "AI-Powered Retail Solutions with Meta SAM",
        company:
          "Intuitivo is an international company that leads the AI-applied unattended retail industry. They use Computer Vision and Machine Learning to process what happens in transactions and transform a common refrigerator into an autonomous point of sale.",
        challenge:
          "Staying at the cutting edge is essential to compete. For Intuitivo, constantly evaluating and applying cutting-edge technologies is essential to maintain their leadership and continue evolving in a constantly changing market.",
        benefits: [
          "Bixen proposed seven improvement points to optimize both performance and detection quality, compared to default SAM",
        ],
        technology: ["Meta SAM", "Computer Vision", "Video Processing", "Deep Learning"],
      },
    },
    {
      id: "netflix",
      title: "3D Body Scan Validation",
      client: "Netflix",
      logo: "/images/netflix-logo.png",
      category: "Healthcare",
      summary:
        "Developing AI-based validation systems for 3D body scanning technology achieving 98.4% precision in Healthcare.",
      modalContent: {
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
      id: "us-logistics",
      title: "Customer Service Center Reduction",
      client: "US Logistics",
      logo: "/images/logistics-truck-logo.png",
      category: "Logistics",
      summary:
        "Implementing intelligent voice recognition systems to reduce customer service costs by 60% in Logistics.",
      modalContent: {
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
      id: "banking-watson",
      title: "Banking Assistant Evolution",
      client: "Banking Institution",
      logo: "/images/red-flame-logo.png",
      category: "Banking",
      summary: "Enhanced IBM Watson performance through custom NLP pipeline and root word identification technology.",
      modalContent: {
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
      id: "telecom-automation",
      title: "Internal Process Automation",
      client: "América Móvil",
      logo: "/images/red-circular-logo.png",
      category: "Telecommunications",
      summary:
        "Implementing RPA automation to reduce 27 personnel and optimize portability processes in Telecommunications.",
      modalContent: {
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
  ]

  const handleCardClick = (story) => {
    if (story.client === "Intuitivo") {
      window.open("https://www.linkedin.com/feed/update/urn:li:activity:7205978275846713346", "_blank")
    } else {
      setSelectedCase(story)
    }
  }

  // Mobile scroll-based flip detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return // Only for mobile

      const newFlippedCards = new Set()
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
  const handleMouseEnter = (cardId) => {
    if (window.innerWidth >= 768) {
      setFlippedCards((prev) => new Set([...prev, cardId]))
    }
  }

  const handleMouseLeave = (cardId) => {
    if (window.innerWidth >= 768) {
      setFlippedCards((prev) => {
        const newSet = new Set(prev)
        newSet.delete(cardId)
        return newSet
      })
    }
  }

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedCase && event.target.closest(".modal-content") === null) {
        setSelectedCase(null)
      }
    }

    if (selectedCase) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [selectedCase])

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
        {/* Grid of 3D Rotating Cards - 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={story.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative h-[350px] perspective-1000 cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleCardClick(story)}
            >
              <div
                className={`success-story-card w-full h-full card-glow transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCards.has(index) ? "flipped" : ""
                }`}
              >
                {/* Front of card - Logo occupying almost entire card */}
                <div className="card-front absolute inset-0 w-full h-full backface-hidden">
                  <div className="h-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-[1.5rem] flex items-center justify-center p-4 hover:bg-white/10 transition-all duration-300">
                    {/* Logo container with perfect centering and enlargement effect */}
                    <div className="logo-float flex-1 flex items-center justify-center w-full">
                      {story.client === "ABInBev" ? (
                        <div className="bg-white rounded-xl p-8 shadow-2xl transform translate-z-30 w-full h-full flex items-center justify-center logo-enlarge">
                          <Image
                            src={story.logo || "/placeholder.svg"}
                            alt={`${story.client} logo`}
                            width={280}
                            height={120}
                            className="max-h-[120px] w-auto object-contain"
                          />
                        </div>
                      ) : story.client === "Intuitivo" ? (
                        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center gap-4 shadow-2xl transform translate-z-30 w-full h-full justify-center logo-enlarge">
                          <Image
                            src={story.logo || "/placeholder.svg"}
                            alt={`${story.client} logo`}
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
                      ) : story.client === "Netflix" ? (
                        <div className="bg-black rounded-xl p-8 shadow-2xl transform translate-z-30 w-full h-full flex items-center justify-center logo-enlarge">
                          <Image
                            src={story.logo || "/placeholder.svg"}
                            alt={`${story.client} logo`}
                            width={280}
                            height={120}
                            className="max-h-[120px] w-auto object-contain"
                          />
                        </div>
                      ) : story.client === "US Logistics" ? (
                        <div className="bg-white rounded-xl p-8 shadow-2xl transform translate-z-30 w-full h-full flex items-center justify-center logo-enlarge">
                          <Image
                            src={story.logo || "/placeholder.svg"}
                            alt={`${story.client} logo`}
                            width={280}
                            height={200}
                            className="max-h-[200px] w-auto object-contain"
                          />
                        </div>
                      ) : story.client === "Banking Institution" ? (
                        <div className="bg-black rounded-xl p-8 shadow-2xl transform translate-z-30 w-full h-full flex items-center justify-center logo-enlarge">
                          <Image
                            src={story.logo || "/placeholder.svg"}
                            alt={`${story.client} logo`}
                            width={200}
                            height={200}
                            className="max-h-[200px] w-auto object-contain"
                          />
                        </div>
                      ) : story.client === "América Móvil" ? (
                        <div className="bg-white rounded-xl p-8 shadow-2xl transform translate-z-30 w-full h-full flex items-center justify-center logo-enlarge">
                          <Image
                            src={story.logo || "/placeholder.svg"}
                            alt={`${story.client} logo`}
                            width={200}
                            height={200}
                            className="max-h-[200px] w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <div className="bg-white/10 rounded-xl p-8 shadow-2xl transform translate-z-30 w-full h-full flex items-center justify-center logo-enlarge">
                          <Image
                            src={story.logo || "/placeholder.svg"}
                            alt={`${story.client} logo`}
                            width={260}
                            height={110}
                            className="max-h-[110px] w-auto object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Back of card - Case study summary */}
                <div className="card-back absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full bg-gradient-to-br from-[#01F9C6]/30 to-[#008794]/30 backdrop-blur-sm border border-[#01F9C6]/50 rounded-[1.5rem] p-6 flex flex-col shadow-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      {story.status && (
                        <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded border border-yellow-400/30">
                          {story.status}
                        </span>
                      )}
                    </div>

                    <h3 className="text-white text-xl font-medium mb-4 line-clamp-2">{story.title}</h3>

                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-white/90 text-sm text-center leading-relaxed">{story.summary}</p>
                    </div>

                    <div className="mt-4 text-center">
                      <span className="text-[#01F9C6] text-sm font-medium">
                        {story.client === "Intuitivo" ? "View on LinkedIn" : "View Details"}
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
      {selectedCase && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4">
          <div className="modal-content bg-[#004953] rounded-[1.5rem] max-w-4xl w-full max-h-[80vh] overflow-y-auto">
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
                    <h2 className="text-2xl font-bold text-white mb-3">{selectedCase.modalContent.title}</h2>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">THE COMPANY</h3>
                      <p className="text-white/90 text-sm">{selectedCase.modalContent.company}</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">THE CHALLENGE</h3>
                      <p className="text-white/90 text-sm">{selectedCase.modalContent.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">
                        {selectedCase.status ? "EXPECTED BENEFITS" : "BENEFITS"}
                      </h3>
                      <ul className="text-white/90 list-disc pl-5 space-y-1 text-sm">
                        {selectedCase.modalContent.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">TECHNOLOGY</h3>
                      <ul className="text-white/90 list-disc pl-5 space-y-1 text-sm">
                        {selectedCase.modalContent.technology.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="bg-white rounded-xl overflow-hidden p-6 flex flex-col items-center justify-center">
                    {selectedCase.client === "Intuitivo" ? (
                      <div className="flex flex-col items-center justify-center gap-4">
                        <Image
                          src={selectedCase.logo || "/placeholder.svg"}
                          alt={`${selectedCase.client} logo`}
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
                    ) : selectedCase.client === "Netflix" ? (
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
                    ) : selectedCase.client === "US Logistics" ? (
                      <div className="bg-white rounded-xl p-4 flex items-center justify-center">
                        <Image
                          src={selectedCase.logo || "/placeholder.svg"}
                          alt={`${selectedCase.client} logo`}
                          width={300}
                          height={200}
                          className="w-auto max-h-[200px] object-contain"
                        />
                      </div>
                    ) : selectedCase.client === "Banking Institution" ? (
                      <div className="bg-white rounded-xl p-4 flex items-center justify-center">
                        <Image
                          src={selectedCase.logo || "/placeholder.svg"}
                          alt={`${selectedCase.client} logo`}
                          width={200}
                          height={200}
                          className="w-auto max-h-[200px] object-contain"
                        />
                      </div>
                    ) : selectedCase.client === "América Móvil" ? (
                      <div className="bg-white rounded-xl p-4 flex items-center justify-center">
                        <Image
                          src={selectedCase.logo || "/placeholder.svg"}
                          alt={`${selectedCase.client} logo`}
                          width={200}
                          height={200}
                          className="w-auto max-h-[200px] object-contain"
                        />
                      </div>
                    ) : (
                      <Image
                        src={selectedCase.logo || "/placeholder.svg"}
                        alt={`${selectedCase.client} logo`}
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

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .flipped {
          transform: rotateY(180deg);
        }
        
        .translate-z-30 {
          transform: translateZ(30px);
        }
        
        .card-glow {
          box-shadow: 0 0 20px rgba(1, 249, 198, 0.1);
        }
        
        .card-glow:hover {
          box-shadow: 0 0 30px rgba(1, 249, 198, 0.2);
        }
        
        .logo-float {
          animation: logoFloat 6s ease-in-out infinite;
        }
        
        .logo-enlarge {
          transition: transform 0.3s ease-in-out;
        }
        
        .logo-enlarge:hover {
          transform: translateZ(30px) scale(1.05);
        }
        
        /* Mobile: trigger enlarge effect when card is flipped */
        @media (max-width: 767px) {
          .flipped .logo-enlarge {
            transform: translateZ(30px) scale(1.05);
          }
        }
        
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0px) translateZ(30px);
          }
          50% {
            transform: translateY(-10px) translateZ(30px);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
