import { Button } from "@/components/ui/button"
import { Code, LineChart, Lightbulb, Megaphone, Palette, ShieldCheck } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Technology Solutions",
      description: "Custom software development, system integration, and digital transformation services.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Business Strategy",
      description: "Strategic planning, market analysis, and growth optimization consulting.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Design Services",
      description: "UX/UI design, brand identity development, and creative direction.",
    },
    {
      icon: <Megaphone className="h-10 w-10 text-primary" />,
      title: "Marketing & Communication",
      description: "Digital marketing, content strategy, and brand positioning services.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Security & Compliance",
      description: "Cybersecurity solutions, risk assessment, and regulatory compliance.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Innovation Consulting",
      description: "R&D strategy, innovation workshops, and emerging technology adoption.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="services">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Comprehensive solutions tailored to your unique challenges and opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-500 mb-4">{service.description}</p>
              <Button variant="link" className="p-0 h-auto text-primary">
                Learn more
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg">View All Services</Button>
        </div>
      </div>
    </section>
  )
}
