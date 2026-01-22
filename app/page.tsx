import { AboutSection } from "@/components/about-section";
import { CtaBanner } from "@/components/cta-banner";

import { CustomerAssurance } from "@/components/customer-assurance";
import { FeaturedProducts } from "@/components/featured-products";
import { HeroSection } from "@/components/hero-section";
import { LifestyleGallery } from "@/components/lifestyle-gallery";
import { SiteFooter } from "@/components/site-footer";
import { ValueProposition } from "@/components/value-proposition";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <ValueProposition />
      <CustomerAssurance />
      <LifestyleGallery />
      <CtaBanner />
      <SiteFooter />
    </main>
  );
}
