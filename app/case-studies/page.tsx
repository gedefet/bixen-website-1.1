"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackgroundVideo from "@/components/background-video"

export default function CaseStudiesPage() {
  const [showCaseStudyDetails, setShowCaseStudyDetails] = useState(false)
  const [currentCaseStudy, setCurrentCaseStudy] = useState(null)

  const allCaseStudies = [
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
      id: "banking",
      title: "Banking Assistant Evolution",
      description:
        "Enhanced IBM Watson performance through custom NLP pipeline and root word identification technology.",
      image: null,
      category: "Banking",
      results: "Watson accuracy improved from 60% to 82%",
      year: "2019",
      modalContent: {
        title: "Banking Assistant Evolution",
        year: "2019",
        company: "A major banking institution needed to improve the performance of their IBM Watson implementation.",
        challenge:
          "The bank needed to enhance the accuracy and effectiveness of their virtual assistant powered by IBM Watson.",
        benefits: ["Watson accuracy improved from 60% to 82%"],
        technology: [
          "Natural Language Processing (AI-Deep Learning)",
          "Data Science",
          "Custom word root identification technology",
        ],
      },
    },
    {
      id: "call-center",
      title: "Intelligent Call Center Optimization",
      description:
        "Designed and implemented an intelligent voice assistant (IVA) system for call flow management with proprietary algorithms for elderly voice recognition.",
      image: null,
      category: "Healthcare",
      results: "45% improvement in voice recognition for people >75 years, 60% reduction in operational costs",
      year: "2020",
      modalContent: {
        title: "Intelligent Call Center Optimization",
        year: "2020",
        company:
          "American Logistics is a US non-emergency transportation company. To reduce costs, they were embarking on a plan to reduce their staff dedicated to answering customer calls.",
        challenge:
          "Design and implement an intelligent care system (IVA) for call flow management. A proprietary algorithm was designed for managing elderly people based on matching audio against the people database.",
        benefits: ["45% improvement in voice recognition for people >75 years", "60% reduction in operational costs"],
        technology: ["NLP", "Speech to text", "Proprietary technology for voice understanding"],
      },
    },
    {
      id: "aerospace",
      title: "Aerospace Vehicle Detection System",
      description:
        "Developed vehicle detection and classification system from drone imagery for aerospace applications, implemented on NVIDIA Jetson IoT platform.",
      image: null,
      category: "Aerospace",
      results: "Achieved >90% precision, 300% acceleration in vehicle counting and traffic volume estimation",
      year: "2016",
      modalContent: {
        title: "Aerospace Vehicle Detection System",
        year: "2016",
        company:
          "SpaceSUR is a company specialized in software engineering and solutions applied to the entire aerospace cycle, from the development of satellites and complex systems, to the implementation of high-value-added geospatial solutions for different industries.",
        challenge:
          "SpaceSUR required the development of a vehicle detection and classification system from drone (UAV) images, which contain data related to position, inclination, and height and are not treated in the same way as a traditional image. Its implementation was required on an NVIDIA Jetson IoT platform.",
        benefits: [
          "Excellent results were obtained (precision >90%), which allowed SpaceSUR to accelerate vehicle counting and traffic volume estimation in the area by 300%",
        ],
        technology: ["Deep Learning", "Computer Vision", "Neural networks", "OpenCV", "Python", "Object detection"],
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
          "Fit3D was experiencing difficulties with their scans, due to failures both in their quality (measurements with noise and errors) and in the subject being measured (person with loose clothing, etc.), which made it difficult for them to implement at scale.",
        challenge:
          "Bixen designed and implemented an AI-based system for the detection and classification of deficient scans, using a database of 29,000 scans of torso, head, crotch, legs, and feet, to recognize and differentiate valid scans.",
        benefits: [
          "98.4% precision in the detection of people's health parameters",
          "Fit3D launched the product massively in California",
          "250% growth in the first year",
        ],
        technology: ["Computer Vision (AI - Deep Learning)", "Data Science"],
      },
    },
    {
      id: "skeleton",
      title: "Skeleton Detection Enhancement",
      description:
        "Advanced AI system for skeleton and body part detection, identifying 25 key points across the entire body for precise measurements.",
      image: null,
      category: "Healthcare",
      results: "Improved precision in body detection system",
      year: "2020",
      modalContent: {
        title: "Skeleton Detection Enhancement",
        year: "2020",
        company:
          "To improve body identification as part of the previous project, Fit3D wanted to implement a skeleton and body parts detection system to have precise measurements of them.",
        challenge:
          "Bixen designed and implemented an AI-based system for the detection and classification of skeletons, identifying 25 key points throughout the body.",
        benefits: ["Improved precision in Fit3D's body detection system"],
        technology: ["Computer Vision (Deep Learning)", "Data Science"],
      },
    },
    {
      id: "automation",
      title: "Process Automation Implementation",
      description:
        "Implemented robotic process automation (RPA) cell for internal company processes, facilitating operator tasks and optimizing human resource allocation.",
      image: null,
      category: "Telecommunications",
      results: "Reduced 27 personnel dedicated to portability and corporate travel validation processes",
      year: "2018",
      modalContent: {
        title: "Process Automation Implementation",
        year: "2018",
        company:
          "ADDOC is a subsidiary of América Móvil, the leading telecommunications service provider in Latin America with operations in 18 countries in the American continent and 7 countries in Europe. Along with Telmex, Telcel, and Telesites, it is controlled by Grupo Carso, whose majority shareholder is Carlos Slim.",
        challenge:
          "Implementation of Robot automation cell for the automation of company processes (5 years). Facilitate the task for operators and reuse human resources in tasks where they add more value. Provide speed to the portability process.",
        benefits: [
          "Reduction of human resources dedicated to portability and corporate travel validation processes (27 people)",
          "Optimization of integration with SAP CRM and other applications",
        ],
        technology: ["RPA (Robot Process Automation). UIPath", "Python for automation"],
      },
    },
    {
      id: "voice-gaming",
      title: "Voice-Controlled Gaming Platform",
      description:
        "Created efficient voice processing system for Roku platform karaoke game, optimized for platform limitations and data latency constraints.",
      image: null,
      category: "Entertainment",
      results: "Successful product launch, superior performance vs competitors, excellent pitch detection ROI",
      year: "2025",
      modalContent: {
        title: "Voice-Controlled Gaming Platform",
        year: "2025",
        company:
          "Volley is a North American company leading in the development of voice-controlled games for devices like Amazon Alexa, Roku, and FireTV, allowing users to interact through voice commands, providing an innovative and accessible gaming experience.",
        challenge:
          "Create a game for the Roku platform, called 'Karaoke', with the challenge of processing voice very efficiently, limited by the platform's power and data latency.",
        benefits: [
          "Product launch to the Roku Store",
          "Better performance compared to competitors, and better ROI",
          "Recognition from the CEO of the excellent performance of pitch detection, a central area of Bixen's work",
        ],
        technology: ["Voice processing", "IoT", "Deep Learning", "Reinforcement learning (machine learning)", "Python"],
      },
    },
    {
      id: "voice-cloning",
      title: "Voice Cloning for Influencer Platform",
      description:
        "Developed voice cloning algorithm to replicate influencer voices for personalized user messages, achieving imperceptible similarity to human ear.",
      image: null,
      category: "Social Media",
      results: "90% voice similarity achieved, seamless platform integration",
      year: "2025",
      modalContent: {
        title: "Voice Cloning for Influencer Platform",
        year: "2025",
        company:
          "Toosa is a platform for influencers and famous people for direct communication with their fans. It offers tools to personalize and segment SMS campaigns aimed at specific audiences, facilitating direct and effective interaction with followers.",
        challenge:
          "To automate responses to users, Toosa needed to have the possibility of replicating (cloning) the influencer's voice, in order to send a personalized message to the user. This was challenging since it required not only the design of the technical solution but also the collection, curation, and assembly of a voice database of several hours.",
        benefits: [
          "An algorithm was developed using Nvidia technology, achieving a 90% similarity to the original voice, imperceptible to the human ear",
          "The technology was implemented within the platform",
        ],
        technology: [
          "TTS (Text-to-speech)",
          "Nvidia NEMO",
          "Python",
          "Deep learning",
          "Audio processing",
          "AWS",
          "Google Colab",
        ],
      },
    },
  ]

  const handleCaseStudyClick = (e, study) => {
    e.preventDefault()
    setCurrentCaseStudy(study)
    setShowCaseStudyDetails(true)
  }

  return (
    <div className="min-h-screen relative">
      <BackgroundVideo />
      <Header isScrolled={true} opacity={1} />

      <main className="relative z-10 pt-32">
        <div className="container px-4 md:px-6 py-16">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-[#01F9C6] hover:text-[#01F9C6]/80 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-light tracking-tighter sm:text-5xl md:text-6xl mb-4 text-white">
              Success Stories
            </h1>
            <p className="text-white/80 md:text-xl max-w-3xl">
              Explore our comprehensive portfolio of successful projects across various industries, showcasing how Bixen
              transforms challenges into innovative solutions.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCaseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-200 bg-white/5 backdrop-blur-sm border-white/20 rounded-[1.5rem]"
                >
                  <div className="aspect-video w-full overflow-hidden bg-white/10 flex items-center justify-center p-4">
                    {study.id === "retail" ? (
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
                    ) : study.id === "abinbev" ? (
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
                      // Placeholder for other case studies
                      <div className="flex items-center justify-center w-full h-full">
                        <div className="text-white/60 text-center">
                          <div className="text-2xl font-bold mb-2">{study.category}</div>
                          <div className="text-sm">{study.year}</div>
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
                    <CardTitle className="line-clamp-2 text-white text-lg">{study.title}</CardTitle>
                    <div>
                      <CardDescription className="text-white/80 text-sm line-clamp-3">
                        {study.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-[#01F9C6] text-sm">{study.results}</p>
                  </CardContent>
                  <CardFooter>
                    <a
                      href="#"
                      onClick={(e) => handleCaseStudyClick(e, study)}
                      className="p-0 h-auto text-[#01F9C6] bg-transparent border-none flex items-center text-sm"
                    >
                      Read Case Study
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

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
                    ) : currentCaseStudy.id === "abinbev" ? (
                      <Image
                        src={currentCaseStudy.image || "/placeholder.svg"}
                        alt={currentCaseStudy.imageAlt}
                        width={300}
                        height={150}
                        className="w-auto max-h-[150px]"
                      />
                    ) : (
                      <div className="text-[#004953] text-center">
                        <div className="text-3xl font-bold mb-2">{currentCaseStudy.category}</div>
                        <div className="text-xl">Innovation</div>
                      </div>
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
