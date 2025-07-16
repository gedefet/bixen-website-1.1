"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState(null)

  const successStories = [
    {
      id: "abinbev",
      title: "Ongoing conversations - ABInBev Process Optimization",
      client: "ABInBev",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhR4SR5hnlCjbhOcXVdmY6jj7udXYS.png",
      category: "Manufacturing",
      status: "In Progress",
      year: "2025",
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
      year: "2025",
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
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/netflix-logo-0-Fkv9SqM2HAOhBjqReMHwH.png",
      category: "Healthcare",
      year: "2019",
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
      id: "mercadolibre",
      title: "Supply Chain Optimization Platform",
      client: "Mercado Libre",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mercadolibre-logo-1-2kQvGxM3HAOhBjqReMHwH.png",
      category: "E-commerce",
      year: "2024",
      modalContent: {
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
      id: "santander",
      title: "Financial Risk Assessment Platform",
      client: "Banco Santander",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/santander-logo-2-3lRwHxN4IAPhCkrSfNIxI.png",
      category: "Fintech",
      year: "2024",
      modalContent: {
        title: "AI-Driven Financial Risk Assessment System",
        company:
          "Banco Santander is a Spanish multinational financial services company based in Madrid and Santander in Spain. It is one of the largest banks in the world by market capitalization.",
        challenge:
          "Santander required an advanced risk assessment system to better evaluate loan applications and detect potential fraud while maintaining compliance with regulatory requirements.",
        benefits: [
          "50% reduction in loan default rates",
          "Improved fraud detection accuracy",
          "Faster loan approval process",
        ],
        technology: [
          "Machine Learning",
          "Deep Learning",
          "Natural Language Processing",
          "Blockchain Integration",
          "Cloud Security",
        ],
      },
    },
    {
      id: "syngenta",
      title: "Smart Agriculture IoT Platform",
      client: "Syngenta",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/syngenta-logo-3-4mSxIyO5JBQiDlsTgOJyJ.png",
      category: "Agriculture",
      year: "2023",
      modalContent: {
        title: "Precision Agriculture and Crop Monitoring System",
        company:
          "Syngenta is a leading agriculture company helping to improve global food security by enabling millions of farmers to make better use of available resources.",
        challenge:
          "Syngenta needed a comprehensive IoT platform to help farmers optimize crop yields through precision agriculture and real-time monitoring.",
        benefits: ["20% increase in crop yields", "Reduced pesticide usage", "Improved resource efficiency"],
        technology: ["IoT Sensors", "Machine Learning", "Computer Vision", "Satellite Imagery", "Edge Computing"],
      },
    },
    {
      id: "siemens",
      title: "Predictive Maintenance System",
      client: "Siemens",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/siemens-logo-4-5nTyJzP6KCRjElsUhPKyK.png",
      category: "Manufacturing",
      year: "2023",
      modalContent: {
        title: "Industrial Predictive Maintenance Platform",
        company:
          "Siemens is a German multinational conglomerate company and the largest industrial manufacturing company in Europe.",
        challenge:
          "Siemens needed to implement predictive maintenance across their industrial equipment to reduce downtime and optimize maintenance schedules.",
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
      id: "enel",
      title: "Energy Grid Optimization",
      client: "Enel",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/enel-logo-5-6oUzKaQ7LDSkFmtViQLzL.png",
      category: "Energy",
      year: "2023",
      modalContent: {
        title: "Smart Grid Optimization and Energy Management",
        company:
          "Enel is an Italian multinational manufacturer and distributor of electricity and gas, serving end users and markets.",
        challenge:
          "Enel required an intelligent energy grid management system to optimize energy distribution and integrate renewable sources.",
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
    {
      id: "tesla",
      title: "Autonomous Vehicle Navigation",
      client: "Tesla",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tesla-logo-6-7pVaLbR8METlGnuWjRMaM.png",
      category: "Automotive",
      year: "2022",
      modalContent: {
        title: "Advanced Driver Assistance and Navigation System",
        company:
          "Tesla, Inc. is an American electric vehicle and clean energy company based in Austin, Texas, known for electric cars and energy storage systems.",
        challenge:
          "Tesla needed to enhance their autonomous driving capabilities with advanced computer vision and decision-making algorithms.",
        benefits: [
          "Improved autonomous driving accuracy",
          "Enhanced safety features",
          "Better navigation in complex scenarios",
        ],
        technology: ["Computer Vision", "Deep Learning", "Neural Networks", "Real-time Processing", "Edge AI"],
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
        {/* 3D Rotating Carousel */}
        <div className="relative h-[500px] perspective-1000 flex items-center justify-center">
          <div className="carousel-container relative w-full h-full">
            {successStories.map((story, index) => (
              <div
                key={story.id}
                className={`absolute w-[280px] h-[350px] cursor-pointer carousel-card-${index}`}
                onClick={() => handleCardClick(story)}
              >
                <div className="success-story-card w-full h-full">
                  {/* Front of card - Logo only */}
                  <div className="card-front absolute inset-0 w-full h-full">
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-[1.5rem] flex flex-col items-center justify-center p-6 hover:bg-white/10 transition-all duration-300">
                      {/* Logo container with floating effect */}
                      <div className="logo-float flex-1 flex items-center justify-center">
                        {story.client === "ABInBev" ? (
                          <div className="bg-white rounded-xl p-6 shadow-lg">
                            <Image
                              src={story.logo || "/placeholder.svg"}
                              alt={`${story.client} logo`}
                              width={200}
                              height={80}
                              className="max-h-[80px] w-auto object-contain"
                            />
                          </div>
                        ) : story.client === "Intuitivo" ? (
                          <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center gap-3">
                            <Image
                              src={story.logo || "/placeholder.svg"}
                              alt={`${story.client} logo`}
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
                        ) : (
                          <div className="bg-white/10 rounded-xl p-6 shadow-lg">
                            <Image
                              src={story.logo || "/placeholder.svg"}
                              alt={`${story.client} logo`}
                              width={180}
                              height={80}
                              className="max-h-[80px] w-auto object-contain"
                            />
                          </div>
                        )}
                      </div>

                      {/* Category badge at bottom */}
                      <div className="mt-4">
                        <Badge variant="secondary" className="bg-[#01F9C6]/80 text-[#004953] text-xs">
                          {story.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Back of card - Case study details */}
                  <div className="card-back absolute inset-0 w-full h-full">
                    <div className="h-full bg-gradient-to-br from-[#01F9C6]/30 to-[#008794]/30 backdrop-blur-sm border border-[#01F9C6]/50 rounded-[1.5rem] p-6 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-[#01F9C6]/80 text-[#004953] text-xs">
                          {story.category}
                        </Badge>
                        {story.status && (
                          <Badge variant="outline" className="border-yellow-400 text-yellow-400 text-xs">
                            {story.status}
                          </Badge>
                        )}
                        <Badge variant="outline" className="border-white/30 text-white/70 text-xs">
                          {story.year}
                        </Badge>
                      </div>

                      <h3 className="text-white text-lg font-medium mb-3 line-clamp-2">{story.title}</h3>

                      <div className="flex-1 space-y-3 text-sm">
                        <div>
                          <h4 className="text-[#01F9C6] font-medium mb-1">CHALLENGE</h4>
                          <p className="text-white/80 text-xs line-clamp-3">{story.modalContent.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-[#01F9C6] font-medium mb-1">BENEFITS</h4>
                          <ul className="text-white/80 text-xs space-y-1">
                            {story.modalContent.benefits.slice(0, 2).map((benefit, idx) => (
                              <li key={idx} className="line-clamp-1">
                                • {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-[#01F9C6] font-medium mb-1">TECHNOLOGY</h4>
                          <div className="flex flex-wrap gap-1">
                            {story.modalContent.technology.slice(0, 3).map((tech, idx) => (
                              <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded text-white/70">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
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
                    <h3 className="text-[#01F9C6] text-base mb-1">CASE STUDY {selectedCase.year}</h3>
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
                  <div className="bg-white rounded-xl overflow-hidden p-6 flex items-center justify-center">
                    {selectedCase.client === "Intuitivo" ? (
                      <div className="flex flex-col items-center justify-center gap-4">
                        <Image
                          src={selectedCase.logo || "/placeholder.svg"}
                          alt={`${selectedCase.client} logo`}
                          width={200}
                          height={60}
                          className="max-h-[60px] w-auto"
                        />
                        <div className="w-16 h-[1px] bg-gray-300"></div>
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-knYRYz3jiSN6JoRImKNt306xaJdeci.png"
                          alt="Meta logo"
                          width={200}
                          height={60}
                          className="max-h-[60px] w-auto"
                        />
                      </div>
                    ) : (
                      <Image
                        src={selectedCase.logo || "/placeholder.svg"}
                        alt={`${selectedCase.client} logo`}
                        width={300}
                        height={150}
                        className="w-auto max-h-[150px]"
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
  )
}
