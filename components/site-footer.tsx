import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="py-12 lg:py-16 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Vaultv LLC</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Delivering high-quality everyday products that enhance convenience, comfort, and confidence.
            </p>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Amazon */}
          <div className="space-y-4">
            <h4 className="font-semibold">Shop Our Products</h4>
            <Button className="w-full md:w-auto">
              Visit Amazon Storefront
            </Button>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Vaultv LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
