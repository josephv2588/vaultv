import { CheckCircle2 } from 'lucide-react'

const assurances = [
  "Easy returns through Amazon",
  "Secure checkout and payment processing",
  "U.S.-based company with dedicated support",
  "Quality warranty on all products",
  "Fast shipping via Amazon Prime"
]

export function CustomerAssurance() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Shop with Confidence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {assurances.map((assurance, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-foreground">{assurance}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
