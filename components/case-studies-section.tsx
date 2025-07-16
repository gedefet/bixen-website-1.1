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
        title: "Retail Innovation with Meta Technology",
        client: "Intuitivo",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png",
        category: "Retail",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7205978275846713346",
        hasModal: false
      },
      {
        title: "Barley Drying Process Optimization",
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
            "Plant operation optimization"
          ],
          technology: [
            "Deep Learning/Machine Learning",
            "Reinforcement Learning", 
            "Analytics/Data Science",
            "IIoT (Industrial IoT)",
            "AWS"
          ]
        }
      },
      {
        title: "Content Recommendation AI System",
        client: "Netflix",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-netflix-logo.png",
        category: "Entertainment",
        hasModal: true,
        modalData: {
          title: "AI-Powered Content Recommendation System",
          company: "Netflix is the world's leading streaming entertainment service with over 230 million paid memberships in more than 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages.",
          challenge: "Netflix needed to enhance their content recommendation system to improve user engagement and reduce churn by providing more personalized content suggestions based on viewing patterns and preferences.",
          benefits: [
            "Increased user engagement by 40%",
            "Reduced content discovery time",
            "Improved user retention rates"
          ],
          technology: [
            "Machine Learning",
            "Deep Learning",
            "Natural Language Processing",
            "Big Data Analytics",
            "AWS"
          ]
        }
      }
    ],
    // Row 2
    [
      {
        title: "Supply Chain Optimization Platform",
        client: "Mercado Libre",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mercadolibre-logo.png",
        category: "E-commerce",
        hasModal: true,
        modalData: {
          title: "Supply Chain Optimization and Logistics Intelligence",
          company: "Mercado Libre is Latin America's leading e-commerce technology company, operating online marketplaces dedicated to e-commerce and online auctions, including mercadolibre.com.",
          challenge: "Mercado Libre needed to optimize their supply chain operations across Latin America to reduce delivery times and costs while improving inventory management and demand forecasting.",
          benefits: [
            "30% reduction in delivery times",
            "25% cost savings in logistics",
            "Improved inventory turnover"
          ],
          technology: [
            "Machine Learning",
            "Predictive Analytics",
            "IoT Integration",
            "Real-time Data Processing",
            "Cloud Computing"
          ]
        }
      },
      {
        title: "Financial Risk Assessment Platform",
        client: "Banco Santander",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-santander-logo.png",
        category: "Fintech",
        hasModal: true,
        modalData: {
          title: "AI-Driven Financial Risk Assessment System",
          company: "Banco Santander is a Spanish multinational financial services company based in Madrid and Santander in Spain. It is one of the largest banks in the world by market capitalization.",
          challenge: "Santander required an advanced risk assessment system to better evaluate loan applications and detect potential fraud while maintaining compliance with regulatory requirements.",
          benefits: [
            "50% reduction in loan default rates",
            "Improved fraud detection accuracy",
            "Faster loan approval process"
          ],
          technology: [
            "Machine Learning",
            "Deep Learning",
            "Natural Language Processing",
            "Blockchain Integration",
            "Cloud Security"
          ]
        }
      },
      {
        title: "Smart Agriculture IoT Platform",
        client: "Syngenta",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-syngenta-logo.png",
        category: "Agriculture",
        hasModal: true,
        modalData: {
          title: "Precision Agriculture and Crop Monitoring System",
          company: "Syngenta is a leading agriculture company helping to improve global food security by enabling millions of farmers to make better use of available resources.",
          challenge: "Syngenta needed a comprehensive IoT platform to help farmers optimize crop yields through precision agriculture, real-time monitoring, and predictive analytics for pest and disease management.",
          benefits: [
            "20% increase in crop yields",
            "Reduced pesticide usage",
            "Improved resource efficiency"
          ],
          technology: [
            "IoT Sensors",
            "Machine Learning",
            "Computer Vision",
            "Satellite Imagery",
            "Edge Computing"
          ]
        }
      }
    ],
    // Row 3
    [
      {
        title: "Predictive Maintenance System",
        client: "Siemens",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-siemens-logo.png",
        category: "Manufacturing",
        hasModal: true,
        modalData: {
          title: "Industrial Predictive Maintenance Platform",
          company: "Siemens is a German multinational conglomerate company and the largest industrial manufacturing company in Europe, with branch offices abroad.",
          challenge: "Siemens needed to implement predictive maintenance across their industrial equipment to reduce downtime, optimize maintenance schedules, and extend equipment lifespan.",
          benefits: [
            "40% reduction in unplanned downtime",
            "30% decrease in maintenance costs",
            "Extended equipment lifespan"
          ],
          technology: [
            "Industrial IoT",
            "Machine Learning",
            "Digital Twin Technology",
            "Edge Computing",
            "Time Series Analysis"
          ]
        }
      },
      {
        title: "Energy Grid Optimization",
        client: "Enel",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-enel-logo.png",
        category: "Energy",
        hasModal: true,
        modalData: {
          title: "Smart Grid Optimization and Energy Management",
          company: "Enel is an Italian multinational manufacturer and distributor of electricity and gas, serving end users and markets. It is the largest utility company in Europe by revenue.",
          challenge: "Enel required an intelligent energy grid management system to optimize energy distribution, integrate renewable sources, and improve grid stability across their network.",
          benefits: [
            "25% improvement in grid efficiency",
            "Better renewable energy integration",
            "Reduced energy losses"
          ],
          technology: [
            "AI/ML Algorithms",
            "Smart Grid Technology",
            "Real-time Analytics",
            "IoT Integration",
            "Cloud Computing"
          ]
        }
      },
      {
        title: "Autonomous Vehicle Navigation",
        client: "Tesla",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tesla-logo.png",
        category: "Automotive",
        hasModal: true,
        modalData: {
          title: "Advanced Driver Assistance and Navigation System",
          company: "Tesla, Inc. is an American electric vehicle and clean energy company based in Austin, Texas, known for electric cars, energy storage systems, and solar panels.",
          challenge: "Tesla needed to enhance their autonomous driving capabilities with advanced computer vision and decision-making algorithms for safer and more reliable self-driving features.",
          benefits: [
            "Improved autonomous driving accuracy",
            "Enhanced safety features",
            "Better navigation in complex scenarios"
          ],
          technology: [
            "Computer Vision",
            "Deep Learning",
            "Neural Networks",
            "Real-time Processing",
            "Edge AI"
          ]
        }
      }
    ]
  ]

  const handleCardClick = (study, rowIndex, cardIndex) => {
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
                    onClick={() => handleCardClick(study, rowIndex, cardIndex)}
                  >
                    <div
                      className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                        hoveredCard === globalIndex ? 'rotate-y-180' : ''
                      }`}
                    >
                      {/* Front of card - Logo only */}
                      <div className="absolute inset-0 w-full h-full backface-hidden">
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/20 rounded-[1.5rem] transform translate-z-4">
                          <div className="h-full flex flex-col items-center justify-center p-8">
                            {/* Logo */}
                            <div className="flex-1 flex items-center justify-center mb-4">
                              {study.client === "Intuitivo" ? (
                                <div className="flex flex-col items-center justify-center gap-3 bg-white/10 rounded-xl p-6 w-full">
                                  <Image
                                    src={study.logo}
                                    alt={`${study.client} logo`}
                                    width={150}
                                    height={60}
                                    className="max-h-[60px] w-auto"
                                  />
                                  <div className="w-12 h-[1px] bg-white/30"></div>
                                  <Image
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-knYRYz3jiSN6JoRImKNt306xaJdeci.png"
                                    alt="Meta logo"
                                    width={150}
                                    height={60}
                                    className="max-h-[60px] w-auto"
                                  />
                                </div>
                              ) : study.client === "ABInBev" ? (
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
                                <div className="bg-white/10 rounded-xl p-6 w-full flex items-center justify-center">
                                  <Image
                                    src={study.logo}
                                    alt={`${study.client} logo`}
                                    width={180}
                                    height={80}
                                    className="max-h-[80px] w-auto object-contain"
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

      {/* Case Study Modal */}
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
                      <p className="text-white/90 text-sm">
                        {selectedCase.modalData.company}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">THE CHALLENGE</h3>
                      <p className="text-white/90 text-sm">
                        {selectedCase.modalData.challenge}
                      </p>
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
                  <div className="bg-white rounded-xl overflow-hidden p-6 flex items-center justify-center">
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
