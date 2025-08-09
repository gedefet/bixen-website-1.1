import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ClosingCta() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="glass p-8 md:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Ship AI that matters.</h2>
          <p className="mt-3 text-[hsl(var(--secondary))] text-lg md:text-xl">
            Start with a senior AI team in 10 days and deliver impact from week one.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="#contact" aria-label="Start in 10 days">
              <Button className="btn-primary" size="lg">
                Start in 10 days
              </Button>
            </Link>
            <Link href="/humans#talent" aria-label="Meet the talent">
              <Button variant="link" size="lg" className="btn-secondary-link">
                Meet the talent
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
