import type { Metadata } from "next"
import { CheckCircle, Users, Award, Target, Search, FileText, MessageSquare, Code, Briefcase, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Curated AI Talent | Bixen",
  description: "Access certified AI professionals ready to integrate into your team. Rigorous selection process, proven expertise, quality guarantee.",
  keywords: "AI talent, Vertex AI, LangChain, GPT-4, AI engineer, MLOps, LLM, machine learning, Hugging Face, OpenAI, Pinecone, FastAPI, MLflow, AI developers for hire"
}

export default function HumansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#004953] via-[#006B7A] to-[#008794]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
                We select, assess, and certify top-tier professionals in artificial intelligence, with proven experience and strong technical judgment. Each AI Curated Human is ready to integrate into your team from day one, backed by a rigorous real-world validation process, ongoing support, and a quality guarantee. You choose who to work with — we make sure it's the right person.
              </p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Certified AI talent,<br />
              <span className="text-[#01F9C6]">ready to build</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
              Skip months of hiring uncertainty. Get access to pre-vetted AI professionals who can start contributing immediately.
            </p>
            
            <Button 
              size="lg" 
              className="bg-[#01F9C6] text-black hover:bg-[#01F9C6]/90 text-lg px-8 py-4 rounded-full font-semibold"
            >
              Find Your AI Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Why Curated Humans Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Why <span className="text-[#01F9C6]">Curated Humans</span>?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">The Context</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500/20 p-2 rounded-full">
                      <Target className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <p className="text-white/90 text-lg">
                        <span className="font-bold text-red-400">87%</span> of AI hiring attempts fail within the first 6 months
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500/20 p-2 rounded-full">
                      <Users className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <p className="text-white/90 text-lg">
                        <span className="font-bold text-red-400">6+ months</span> average time to find qualified AI talent
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500/20 p-2 rounded-full">
                      <Briefcase className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <p className="text-white/90 text-lg">
                        <span className="font-bold text-red-400">$150K+</span> average cost of a failed AI hire
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">Why We're the Right Choice</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#01F9C6]/20 p-2 rounded-full">
                      <CheckCircle className="h-6 w-6 text-[#01F9C6]" />
                    </div>
                    <div>
                      <p className="text-white/90 text-lg">
                        <span className="font-bold text-[#01F9C6]">Real-world validation</span> through practical AI projects and assessments
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#01F9C6]/20 p-2 rounded-full">
                      <Award className="h-6 w-6 text-[#01F9C6]" />
                    </div>
                    <div>
                      <p className="text-white/90 text-lg">
                        <span className="font-bold text-[#01F9C6]">Proven expertise</span> in Vertex AI, LangChain, Hugging Face, OpenAI APIs, and production frameworks like MLflow and Ray
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#01F9C6]/20 p-2 rounded-full">
                      <Star className="h-6 w-6 text-[#01F9C6]" />
                    </div>
                    <div>
                      <p className="text-white/90 text-lg">
                        <span className="font-bold text-[#01F9C6]">Technical mastery</span> in Transformers, RLHF, Pinecone, Weaviate, Docker + FastAPI, and deployments on AWS/GCP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Bixen Seal Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-[#01F9C6]/20 rounded-full mb-6">
              <Award className="h-12 w-12 text-[#01F9C6]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-[#01F9C6]">Bixen Seal</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our certification isn't just a badge—it's a guarantee of excellence. Every Curated Human carries the Bixen Seal, 
              representing rigorous validation, continuous support, and proven ability to deliver results.
            </p>
          </div>
        </div>
      </section>

      {/* Hiring Models Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Three Ways to <span className="text-[#01F9C6]">Work Together</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Project-Based",
                description: "Specific deliverables with defined timelines and outcomes",
                badge: "Most Popular",
                features: ["Fixed scope & timeline", "Dedicated expert", "Quality guarantee", "Post-delivery support"]
              },
              {
                title: "Staff Augmentation",
                description: "Integrate our experts directly into your existing team",
                badge: "Flexible",
                features: ["Seamless integration", "Your processes", "Direct collaboration", "Scalable capacity"]
              },
              {
                title: "Consulting & Strategy",
                description: "Strategic guidance and technical leadership for AI initiatives",
                badge: "Strategic",
                features: ["Technical leadership", "Architecture design", "Best practices", "Team mentoring"]
              }
            ].map((model, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-[1.5rem] p-8 border border-[#01F9C6]/30 relative">
                <div className="absolute -top-3 left-6">
                  <span className="bg-[#01F9C6] text-black px-4 py-1 rounded-full text-sm font-semibold">
                    {model.badge}
                  </span>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-white mb-4">{model.title}</h3>
                  <p className="text-white/80 mb-6">{model.description}</p>
                  <ul className="space-y-3">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-[#01F9C6]" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#01F9C6]">Selection Process</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Only 3% of candidates make it through our comprehensive evaluation. Here's how we ensure excellence:
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Initial Screening",
                description: "Technical background verification, portfolio review, and experience validation",
                icon: <Search className="h-8 w-8" />
              },
              {
                step: "02", 
                title: "Technical Assessment",
                description: "Hands-on coding challenges, AI/ML problem-solving, and architecture design",
                icon: <Code className="h-8 w-8" />
              },
              {
                step: "03",
                title: "Real-World Project",
                description: "Complete an actual AI project similar to client work, with full documentation",
                icon: <Briefcase className="h-8 w-8" />
              },
              {
                step: "04",
                title: "Peer Review",
                description: "Code review and technical discussion with our senior AI engineers",
                icon: <Users className="h-8 w-8" />
              },
              {
                step: "05",
                title: "Client Simulation",
                description: "Mock client meetings, requirement gathering, and solution presentation",
                icon: <MessageSquare className="h-8 w-8" />
              },
              {
                step: "06",
                title: "Final Certification",
                description: "Comprehensive evaluation and Bixen Seal certification with ongoing support",
                icon: <Award className="h-8 w-8" />
              }
            ].map((process, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#01F9C6]/20 rounded-full flex items-center justify-center border-2 border-[#01F9C6]">
                    <span className="text-[#01F9C6] font-bold text-lg">{process.step}</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-[1.5rem] p-8 flex-1 border border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#01F9C6]/20 p-3 rounded-full">
                      <div className="text-[#01F9C6]">{process.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{process.title}</h3>
                      <p className="text-white/80 text-lg">{process.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack & Expertise Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#01F9C6]/20 rounded-full mb-6">
                <Code className="h-8 w-8 text-[#01F9C6]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stack & <span className="text-[#01F9C6]">Expertise</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                🔧 Technological Stack of our Curated Humans
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "AI Models",
                  technologies: ["GPT-4", "Claude", "LLaMA", "Mistral", "Gemini", "BERT", "Whisper"]
                },
                {
                  category: "Frameworks",
                  technologies: ["LangChain", "Haystack", "Transformers", "Hugging Face", "OpenAI SDK"]
                },
                {
                  category: "Infrastructure",
                  technologies: ["Vertex AI", "MLflow", "DVC", "Docker", "Ray"]
                },
                {
                  category: "Vector Databases",
                  technologies: ["Pinecone", "Weaviate", "FAISS"]
                },
                {
                  category: "APIs & Deployment",
                  technologies: ["FastAPI", "Gradio", "Streamlit", "RESTful APIs"]
                },
                {
                  category: "Cloud Platforms",
                  technologies: ["GCP", "AWS", "Azure"]
                }
              ].map((stack, index) => (
                <div key={index} className="bg-white/5 rounded-[1.5rem] p-6 border border-[#01F9C6]/30">
                  <h3 className="text-xl font-bold text-[#01F9C6] mb-4">{stack.category}</h3>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#01F9C6] rounded-full"></div>
                        <span className="text-white/90">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to find your <span className="text-[#01F9C6]">AI expert</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Skip the uncertainty. Get matched with certified AI professionals who can start contributing from day one.
          </p>
          <Button 
            size="lg" 
            className="bg-[#01F9C6] text-black hover:bg-[#01F9C6]/90 text-lg px-8 py-4 rounded-full font-semibold"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  )
}
