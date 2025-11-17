import { ShieldCheck, Palette, Headphones, DollarSign } from 'lucide-react'

const values = [
  {
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    description: "Durable materials and strict quality control ensure lasting performance."
  },
  {
    icon: Palette,
    title: "Modern & Functional Design",
    description: "Everyday products built for real life with thoughtful aesthetics."
  },
  {
    icon: Headphones,
    title: "Amazon-Ready Support",
    description: "Fast, reliable customer service for complete peace of mind."
  },
  {
    icon: DollarSign,
    title: "Affordable Premium Feel",
    description: "Exceptional value without compromise on quality or design."
  }
]

export function ValueProposition() {
  return (
    <section className="py-20 lg:py-32 border-b">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Choose Vaultv LLC?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4 group">
              <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
