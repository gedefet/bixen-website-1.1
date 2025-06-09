"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function CaseStudiesSection() {
  const [showCaseStudyDetails, setShowCaseStudyDetails] = useState(false)
  const [currentCaseStudy, setCurrentCaseStudy] = useState(null)

  const caseStudies = [
    {
      id: "abinbev",
      title: "Ongoing conversations - ABInBev Process Optimization",
      description: (
        <>
          Optimizing the barley drying process at ABInBev's production plant in Uruguay in partnership with
          <span className="inline-block ml-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YBLKyRpcyLWwMZ84W6W8mrKVXJ3Kh3.png"
              alt="Ingenia logo"
              width={60}
              height={20}
              className="max-h-[16px] w-auto align-middle"
            />
          </span>
        </>
      ),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhR4SR5hnlCjbhOcXVdmY6jj7udXYS.png",
      imageAlt: "ABInBev logo",
      category: "Manufacturing",
      results: "Expected: High reduction in energy consumption",
      status: "In Progress",
      year: "2025",
      modalContent: {
        title: "Ongoing conversations - ABInBev Process Optimization",
        year: "2025",
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
      id: "retail",
      title: "Bixen in Retail",
      description: "Learn how Bixen helped Intuitivo work with cutting-edge technology from Meta.",
      image: null,
      category: "Retail",
      results: "Enhanced customer experience",
      year: "2025",
      modalContent: {
        title: "Bixen in Retail",
        year: "2025",
        company:
          "Intuitivo is an international company that leads the AI-applied unattended retail industry. They use Computer Vision and Machine Learning to process what happens in transactions and transform a common refrigerator into an autonomous point of sale, capable of adapting to consumer preferences at each location.",
        challenge:
          "Staying at the cutting edge is essential to compete. For Intuitivo, constantly evaluating and applying cutting-edge technologies is essential to maintain their leadership and continue evolving in a constantly changing market. Intuitivo wanted to implement SAM, META's new algorithm for video processing.",
        benefits: [
          "Bixen proposed seven improvement points to optimize both performance (in terms of execution speed) and detection quality, compared to default SAM.",
        ],
        technology: ["Meta SAM", "Computer Vision", "Video Processing", "Deep Learning"],
      },
    },
    {
      id: "3d-scan",
      title: "3D Body Scan Validation",
      description:
        "AI-based system for detecting and classifying deficient body scans using a database of 29,000 scans across different body parts.",
      image: null,
      category: "Healthcare",
      results: "98.4% precision in health parameter detection, 250% growth in first year",
      year: "2019",
      modalContent: {
        title: "3D Body Scan Validation",
        year: "2019",
        company:
          "A healthcare technology company was experiencing difficulties with their scans, due to failures both in their quality (measurements with noise and errors) and in the subject being measured (person with loose clothing, etc.), which made it difficult for them to implement at scale.",
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
  ]

  const handleCaseStudyClick = (e, study) => {
    e.preventDefault()
    setCurrentCaseStudy(study)
    setShowCaseStudyDetails(true)
  }

  return (
    <div className="container px-4 md:px-6 py-16" id="case-studies">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div className="max-w-[600px]">
          <h2 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white">
            Success Stories
          </h2>
          <p className="text-white/80 md:text-xl">Real-world examples of how can Bixen drive exceptional results.</p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-200 bg-white/5 backdrop-blur-sm border-white/20 rounded-[1.5rem]"
            >
              <div className="aspect-video w-full overflow-hidden bg-white/10 flex items-center justify-center p-4">
                {index === 1 ? (
                  // Custom image for Intuitivo + Meta case study
                  <div className="flex flex-col items-center justify-center w-full h-full gap-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png"
                      alt="Intuitivo logo"
                      width={200}
                      height={60}
                      className="max-h-[60px] w-auto"
                    />
                    <div className="w-16 h-[1px] bg-white/30"></div>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-knYRYz3jiSN6JoRImKNt306xaJdeci.png"
                      alt="Meta logo"
                      width={200}
                      height={60}
                      className="max-h-[60px] w-auto"
                    />
                  </div>
                ) : index === 0 ? (
                  // ABInBev logo
                  <div className="flex items-center justify-center w-full h-full bg-white rounded-xl p-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhR4SR5hnlCjbhOcXVdmY6jj7udXYS.png"
                      alt="ABInBev logo"
                      width={250}
                      height={100}
                      className="max-h-[80px] w-auto object-contain"
                    />
                  </div>
                ) : (
                  // 3D Body Scan case study
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="text-white/60 text-center">
                      <div className="text-4xl font-bold mb-2">3D</div>
                      <div className="text-xl">Body Scanning</div>
                    </div>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-[#01F9C6]/80 text-[#004953]">
                    {study.category}
                  </Badge>
                  {study.status && (
                    <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                      {study.status}
                    </Badge>
                  )}
                  {study.year && (
                    <Badge variant="outline" className="border-white/30 text-white/70">
                      {study.year}
                    </Badge>
                  )}
                </div>
                <CardTitle className="line-clamp-2 text-white">{study.title}</CardTitle>
                <div>
                  <CardDescription className="text-white/80">{study.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-[#01F9C6]">{study.results}</p>
              </CardContent>
              <CardFooter>
                <a
                  href="#"
                  onClick={(e) => handleCaseStudyClick(e, study)}
                  className="p-0 h-auto text-[#01F9C6] bg-transparent border-none flex items-center"
                >
                  Read Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-[#01F9C6] hover:text-[#01F9C6]/80 transition-colors font-medium text-lg"
          >
            View all success stories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Case Study Modal */}
      {showCaseStudyDetails && currentCaseStudy && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4">
          <div className="bg-[#004953] rounded-[1.5rem] max-w-3xl w-full max-h-[80vh] overflow-y-auto">
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
                    <h3 className="text-[#01F9C6] text-base mb-1">CASE STUDY {currentCaseStudy.year}</h3>
                    <h2 className="text-2xl font-bold text-white mb-3">{currentCaseStudy.modalContent.title}</h2>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">THE COMPANY</h3>
                      <p className="text-white/90 text-sm">{currentCaseStudy.modalContent.company}</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">THE CHALLENGE</h3>
                      <p className="text-white/90 text-sm">{currentCaseStudy.modalContent.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">
                        {currentCaseStudy.status ? "EXPECTED BENEFITS" : "BENEFITS"}
                      </h3>
                      <ul className="text-white/90 list-disc pl-5 space-y-1 text-sm">
                        {currentCaseStudy.modalContent.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[#01F9C6] text-base mb-1">TECHNOLOGY</h3>
                      <ul className="text-white/90 list-disc pl-5 space-y-1 text-sm">
                        {currentCaseStudy.modalContent.technology.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="bg-white rounded-xl overflow-hidden p-6 flex items-center justify-center">
                    {currentCaseStudy.id === "retail" ? (
                      <div className="flex flex-col items-center justify-center gap-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png"
                          alt="Intuitivo logo"
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
                    ) : currentCaseStudy.id === "3d-scan" ? (
                      <div className="text-[#004953] text-center">
                        <div className="text-5xl font-bold mb-2">3D</div>
                        <div className="text-2xl">Body Scanning Technology</div>
                      </div>
                    ) : (
                      <Image
                        src={currentCaseStudy.image || "/placeholder.svg"}
                        alt={currentCaseStudy.imageAlt}
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
