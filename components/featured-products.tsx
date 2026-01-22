import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'

const products = [
  {
    id: 1,
    title: "Artisan Ceramic Vase",
    category: "Home Goods",
    description: "Elegant handcrafted ceramic vase with minimalist design, perfect for modern living spaces.",
    image: "/ceramic-vase-home-decor-minimalist.jpg"
  },
  {
    id: 2,
    title: "Bamboo Kitchen Organizer",
    category: "Home Goods",
    description: "Premium bamboo storage solution to keep your kitchen essentials neat and accessible.",
    image: "/premium-kitchen-organizer-bamboo.jpg"
  },
  {
    id: 3,
    title: "Luxury Throw Blanket",
    category: "Home Goods",
    description: "Ultra-soft throw blanket crafted from premium materials for ultimate comfort.",
    image: "/luxury-throw-blanket-living-room.jpg"
  },
  {
    id: 4,
    title: "Wireless Bluetooth Earbuds",
    category: "Tech",
    description: "Crystal-clear audio with active noise cancellation and 24-hour battery life.",
    image: "/wireless-bluetooth-earbuds-tech.jpg"
  },
  {
    id: 5,
    title: "Smart LED Desk Lamp",
    category: "Tech",
    description: "Adjustable smart lamp with touch controls and multiple lighting modes for any workspace.",
    image: "/smart-led-desk-lamp-modern.jpg"
  },
  {
    id: 6,
    title: "Portable Power Bank",
    category: "Tech",
    description: "High-capacity 20,000mAh charger with fast charging for all your devices on the go.",
    image: "/portable-power-bank-charger.jpg"
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
              <CardContent className="p-6 space-y-3">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full group/btn bg-transparent">
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
