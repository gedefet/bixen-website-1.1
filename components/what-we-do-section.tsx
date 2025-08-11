"use client"

import {
  Camera,
  MessageSquareText,
  Workflow,
  LineChartIcon as ChartLine,
  Sparkles,
  FileText,
  Mic,
  ServerCog,
  Brain,
} from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import type { JSX } from "react"

type Capability = {
  title: string
  description: string
  features: string[]
  technologies: string[]
  icon: JSX.Element
  gradient: string
}

// Updated with comprehensive service descriptions and technical details
const allCapabilities: Capability[] = [
  {
    title: "Generative AI Agents",
    description:
      "Intelligent autonomous systems that understand context, generate human-like responses, and execute complex workflows with minimal supervision.",
    features: [
      "Sales & Customer Support Assistants",
      "Onboarding & Training Copilots",
      "Content Generation & Curation",
      "Process Automation & Decision Making",
    ],
    technologies: ["GPT-4", "Claude", "LangChain", "Vector Databases"],
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Computer Vision Systems",
    description:
      "Advanced visual intelligence solutions that analyze, interpret, and understand visual data in real-time for industrial and commercial applications.",
    features: [
      "Object Detection & Classification",
      "Quality Control & Inspection",
      "Video Analytics & Monitoring",
      "Facial Recognition & Biometrics",
    ],
    technologies: ["OpenCV", "YOLO", "TensorFlow", "PyTorch"],
    icon: <Camera className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "DevOps & MLOps",
    description:
      "End-to-end machine learning operations infrastructure ensuring reliable, scalable, and reproducible AI model deployment and monitoring.",
    features: [
      "CI/CD for ML Models",
      "Model Registry & Versioning",
      "Automated Testing & Validation",
      "Performance Monitoring & Alerting",
    ],
    technologies: ["MLflow", "Kubeflow", "Docker", "Kubernetes"],
    icon: <ServerCog className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Recommendation Systems",
    description:
      "Sophisticated personalization engines that analyze user behavior and preferences to deliver highly relevant content and product suggestions.",
    features: [
      "Collaborative Filtering",
      "Content-Based Recommendations",
      "Real-time Personalization",
      "A/B Testing & Optimization",
    ],
    technologies: ["Apache Spark", "TensorFlow", "Redis", "Elasticsearch"],
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Intelligent Chatbots",
    description:
      "Natural language processing powered conversational interfaces that understand context, sentiment, and intent for meaningful customer interactions.",
    features: [
      "Natural Language Understanding",
      "Sentiment Analysis & Emotion Detection",
      "Multi-language Support",
      "Integration with Business Systems",
    ],
    technologies: ["Rasa", "Dialogflow", "spaCy", "BERT"],
    icon: <MessageSquareText className="w-6 h-6" />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Workflow Automation",
    description:
      "Intelligent process automation combining AI decision-making with robotic process automation to streamline complex business workflows.",
    features: [
      "Business Process Automation",
      "Document Processing Workflows",
      "Decision Tree Implementation",
      "Integration with Legacy Systems",
    ],
    technologies: ["UiPath", "Automation Anywhere", "Zapier", "Microsoft Power Automate"],
    icon: <Workflow className="w-6 h-6" />,
    gradient: "from-teal-500 to-blue-500",
  },
  {
    title: "Predictive Analytics",
    description:
      "Advanced statistical modeling and machine learning algorithms that forecast trends, identify risks, and optimize business outcomes across industries.",
    features: [
      "Time Series Forecasting",
      "Risk Assessment & Modeling",
      "Customer Churn Prediction",
      "Supply Chain Optimization",
    ],
    technologies: ["Scikit-learn", "XGBoost", "Prophet", "Apache Airflow"],
    icon: <ChartLine className="w-6 h-6" />,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Document Processing",
    description:
      "Optical character recognition and natural language processing systems that extract, classify, and analyze information from structured and unstructured documents.",
    features: ["OCR & Text Extraction", "Document Classification", "Named Entity Recognition", "Automated Data Entry"],
    technologies: ["Tesseract", "AWS Textract", "spaCy", "Apache Tika"],
    icon: <FileText className="w-6 h-6" />,
    gradient: "from-slate-500 to-gray-500",
  },
  {
    title: "Voice Interfaces",
    description:
      "Speech recognition and synthesis technologies that enable natural voice interactions, audio processing, and voice-controlled applications.",
    features: [
      "Speech-to-Text Conversion",
      "Voice Command Processing",
      "Audio Content Analysis",
      "Multi-language Voice Support",
    ],
    technologies: ["Whisper", "Google Speech API", "Azure Cognitive Services", "Mozilla DeepSpeech"],
    icon: <Mic className="w-6 h-6" />,
    gradient: "from-rose-500 to-pink-500",
  },
]

function CapabilityCard({ cap, className }: { cap: Capability; className?: string }) {
  return (
    <article
      className={cn(
        "group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f2f34]/40 shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300",
        className,
      )}
    >
      {/* Header with gradient background */}
      <div className={`relative w-full h-32 bg-gradient-to-br ${cap.gradient} opacity-80`}>
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        {/* Icon badge */}
        <div className="absolute left-6 bottom-6">
          <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg">
            <div className="text-white">
              {cap.icon}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight mb-3">
          {cap.title}
        </h3>
        
        <p className="text-white/75 text-sm md:text-base leading-relaxed mb-4">
          {cap.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-white/90 text-sm font-medium mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {cap.features.map((feature, index) => (
              <li key={index} className="text-white/70 text-xs md:text-sm flex items-start">
                <span className="text-[#0dc4a8] mr-2 mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-white/90 text-sm font-medium mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {cap.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-md border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-300 rounded-2xl" />
    </article>
  )
}

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="px-0 md:container md:px-8 lg:px-16 xl:px-24 py-10 md:py-16">
      <div className="text-center max-w-[900px] mx-auto mb-8 md:mb-12 px-2 md:px-0">
        <h2 className="text-4xl font-light sm:text-5xl md:text-6xl mb-3 text-white">What We Do</h2>
        <p className="text-white/80 text-lg md:text-xl">
          Practical AI and product capabilities that compound business value through cutting-edge technology and proven
          methodologies.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-[#0d2730]/60 p-4 md:p-6 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {allCapabilities.map((cap, index) => (
              <CarouselItem key={cap.title} className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <CapabilityCard cap={cap} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-11 md:w-11 border-white/30 bg-black/30 text-white hover:bg-black/40 backdrop-blur-sm shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60" />
          <CarouselNext className="right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-11 md:w-11 border-white/30 bg-black/30 text-white hover:bg-black/40 backdrop-blur-sm shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60" />
        </Carousel>
      </div>
    </section>
  )
}
