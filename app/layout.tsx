import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

// Optimize font loading
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bixen | Creation Beyond Convention",
  description:
    "Hire certified AI professionals, curated by Bixen. We deliver top-tier AI engineers, MLOps experts, and LLM specialists ready to build your next product — fast. Trusted by tech-forward companies in healthcare, retail, telco and more.",
  keywords:
    "AI talent, AI engineer, AI developers for hire, AI consultants, artificial intelligence engineers, AI product teams, certified AI developers, Vertex AI, LangChain, Hugging Face, OpenAI, GPT-4, GPT-3.5, LLaMA, Claude, Gemini, Whisper, Transformers, BERT, Mistral, LLM, Large Language Models, MLOps, MLflow, Ray, DVC, FastAPI, REST API, Python AI engineer, machine learning, deep learning, neural networks, model deployment, prompt engineering, RAG, Retrieval-Augmented Generation, Pinecone, Weaviate, FAISS, vector databases, embeddings, computer vision, image classification, object detection, pose estimation, video analytics, OCR, document parsing, sentiment analysis, NLP, natural language processing, speech-to-text, text-to-speech, audio AI, chatbot developers, AI chatbot, AI agent, generative AI, AI assistants, AI automation, workflow automation, RPA, robotic process automation, predictive analytics, data science, data engineering, AI in healthcare, AI in retail, AI in finance, AI in telco, AI in logistics, AI squad, AI advisor, AI architect, AI PM, AI product manager, fullstack AI developer, backend AI engineer, Google Cloud AI, AWS AI, Azure AI, cloud-native AI, scalable AI apps, end-to-end AI, curated AI talent, Certified by Bixen, hire AI experts, freelance AI, embedded AI engineer, top AI developers, build AI products, enterprise AI solutions, deploy AI to production, hire ML engineers, hire data scientists, AI staffing, AI augmentation, staff augmentation AI, curated humans, AI sourcing, elite AI professionals",
  viewport: "width=device-width, initial-scale=1",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {/* Site-wide background overlay at 0.25 opacity */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 bg-black/25 z-20" />
        {/* App content above overlay */}
        <div className="relative z-30">
          {children}
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  )
}
