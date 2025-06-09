"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function CaseStudiesSection() {
  const [showABInBevDetails, setShowABInBevDetails] = useState(false)

  const caseStudies = [
    {
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
      image: null,
      category: "Manufacturing",
      results: "Expected: High reduction in energy consumption",
      status: "In Progress",
      link: "#",
      isABInBev: true,
    },
    {
      title: "Bixen in Retail",
      description: "Learn how Bixen helped Intuitivo work with cutting-edge technology from Meta.",
      image: null,
      category: "Retail",
      results: "Enhanced customer experience",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7205978275846713346",
    },
  ]

  const handleABInBevClick = (e) => {
    e.preventDefault()
    setShowABInBevDetails(true)
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-200 bg-white/5 backdrop-blur-sm border-white/20 rounded-[1.5rem]"
            >
              <div className="aspect-video w-full overflow-hidden bg-white/10 flex items-center justify-center p-4">
                {index === 1 ? (
                  // Custom image for the first case study (Intuitivo + Meta)
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
                ) : (
                  // Only ABInBev logo for the second case study
                  <div className="flex items-center justify-center w-full h-full bg-white rounded-xl p-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhR4SR5hnlCjbhOcXVdmY6jj7udXYS.png"
                      alt="ABInBev logo"
                      width={250}
                      height={100}
                      className="max-h-[80px] w-auto object-contain"
                    />
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
                  href={study.isABInBev ? "#" : study.link}
                  onClick={study.isABInBev ? handleABInBevClick : undefined}
                  target={study.isABInBev ? "_self" : "_blank"}
                  rel={study.isABInBev ? "" : "noopener noreferrer"}
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
                      Ongoing conversations - ABInBev Process Optimization
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
