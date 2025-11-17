export function LifestyleGallery() {
  const images = [
    "/modern-minimalist-home-interior-with-premium-produ.jpg",
    "/lifestyle-scene-elegant-product-in-use.jpg",
    "/contemporary-living-space-with-quality-products.jpg",
    "/clean-aesthetic-product-photography-lifestyle.jpg"
  ]

  return (
    <section className="py-20 lg:py-32 border-b">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Designed for Your Lifestyle
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg bg-muted group cursor-pointer"
            >
              <img 
                src={image || "/placeholder.svg"} 
                alt={`Lifestyle ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
