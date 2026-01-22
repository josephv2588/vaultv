import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Award, Star } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-[500px] h-[500px] bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-[500px] h-[500px] bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }} 
      />
      
      {/* Spotlight effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          <div className="space-y-8 animate-fade-in-up">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </div>
              <span className="text-sm font-semibold text-primary">Trusted by 10,000+ Customers</span>
              <Badge variant="secondary" className="text-xs font-bold">NEW</Badge>
            </div>
            
            {/* Main heading with rich typography */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95]">
                <span className="block text-foreground">Elevate Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-accent mt-2">
                  Everyday
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Discover premium consumer products engineered for quality, designed for life. Vaultv brings innovation to your everyday essentials.
            </p>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Premium Quality</div>
                  <div className="text-sm text-muted-foreground">Built to last</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Fast Shipping</div>
                  <div className="text-sm text-muted-foreground">Amazon Prime</div>
                </div>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-base px-8 py-6 h-auto group shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105">
                  Shop on Amazon
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto border-2 hover:bg-secondary/80 backdrop-blur-sm transition-all hover:scale-105 bg-transparent">
                  View Collection
                </Button>
              </a>
            </div>
            
            {/* Social proof */}
            <div className="flex items-center gap-6 pt-4 border-t border-border/50">
              <div className="flex -space-x-3">
                <img 
                  src="/happy-professional-woman-smiling-customer.jpg" 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
                <img 
                  src="/smiling-male-customer-satisfied-user.jpg" 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
                <img 
                  src="/diverse-female-customer-happy-shopper.jpg" 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
                <img 
                  src="/young-professional-male-customer-reviewer.jpg" 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <span className="ml-2 font-bold text-foreground">4.8</span>
                </div>
                <p className="text-sm text-muted-foreground">From 2,500+ verified reviews</p>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[700px] animate-fade-in-up animation-delay-200">
            {/* Main product showcase */}
            <div className="relative">
              {/* Large product card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-secondary to-secondary/50 backdrop-blur-sm border border-border/50 transform hover:scale-[1.02] transition-transform duration-500">
                <div className="aspect-[4/5]">
                  <img 
                    src="/hero-wireless-headphones-tech.jpg"
                    alt="Premium Wireless Headphones"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-bold">Best Seller</span>
                  </div>
                </div>
              </div>
              
              {/* Floating small cards */}
              <div className="absolute -left-8 top-1/4 w-48 rounded-2xl overflow-hidden shadow-xl bg-background/95 backdrop-blur-md border border-border/50 p-4 animate-float hidden lg:block">
                <div className="aspect-square rounded-xl overflow-hidden mb-3">
                  <img 
                    src="/hero-ceramic-diffuser-home.jpg"
                    alt="Ceramic Essential Oil Diffuser"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm font-semibold">Premium Collection</div>
                <div className="text-xs text-muted-foreground">Starting at $29.99</div>
              </div>
              
              <div className="absolute -right-8 bottom-1/4 w-56 rounded-2xl overflow-hidden shadow-xl bg-background/95 backdrop-blur-md border border-border/50 p-5 animate-float animation-delay-1000 hidden lg:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Star className="h-6 w-6 text-white fill-white" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">4.9/5</div>
                    <div className="text-xs text-muted-foreground">Customer Rating</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  "Outstanding quality and design. Exactly what I needed!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
