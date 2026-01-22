import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Experience Better Everyday Essentials
          </h2>
          
          <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base px-8 py-6 group"
            >
              Shop Vaultv on Amazon
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
