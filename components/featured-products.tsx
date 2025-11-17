import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'

const products = [
  {
    id: 1,
    title: "Premium Home Essential",
    description: "Expertly crafted for daily use with superior quality materials.",
    image: "/modern-premium-home-product-on-white-background.jpg"
  },
  {
    id: 2,
    title: "Smart Living Solution",
    description: "Innovative design meets practical functionality for modern homes.",
    image: "/sleek-modern-lifestyle-product-minimalist.jpg"
  },
  {
    id: 3,
    title: "Everyday Comfort Product",
    description: "Designed to bring convenience and reliability to your routine.",
    image: "/elegant-everyday-product-clean-white-background.jpg"
  },
  {
    id: 4,
    title: "Quality Life Upgrade",
    description: "Premium materials and thoughtful design for lasting value.",
    image: "/premium-consumer-product-modern-aesthetic.jpg"
  },
  {
    id: 5,
    title: "Modern Living Essential",
    description: "Simplicity and elegance combined for everyday excellence.",
    image: "/modern-home-product-sophisticated-design.jpg"
  },
  {
    id: 6,
    title: "Lifestyle Innovation",
    description: "Transform your daily experience with intelligent functionality.",
    image: "/innovative-lifestyle-product-clean-design.jpg"
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collection of everyday essentials
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
                  <img 
                    src={product.image || "/placeholder.svg"} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full group/btn">
                  View on Amazon
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
