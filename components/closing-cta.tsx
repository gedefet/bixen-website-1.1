import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ClosingCta() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="glass p-8 md:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Ready to move fast?</h2>
          <p className="mt-3 text-[hsl(var(--secondary))] text-lg md:text-xl">
            Start with a senior AI team in 10 days and deliver impact from week one.
          </p>
          <div className="mt-8">
            <Link href="#contact" aria-label="Start in 10 days - contact us">
              <Button variant="default" size="lg" className="btn-primary">
                Start in 10 days
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
