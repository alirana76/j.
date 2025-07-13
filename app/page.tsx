import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProductShowcase from "@/components/product-showcase"
import FeaturedCollections from "@/components/featured-collections"
import WomenCategory from "@/components/women-category"
import MenCategory from "@/components/men-category"
import FragrancesCategory from "@/components/fragrances-category"
import KidsCategory from "@/components/kids-category"
import SkincareSection from "@/components/skincare-section"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      <main className="space-y-20">
        <ProductShowcase />
        <FeaturedCollections />
        
        {/* Category Sections with proper IDs */}
        <section id="women" className="scroll-mt-20">
          <WomenCategory />
        </section>
        
        <section id="men" className="scroll-mt-20">
          <MenCategory />
        </section>
        
        <section id="fragrances" className="scroll-mt-20">
          <FragrancesCategory />
        </section>
        
        <section id="kids" className="scroll-mt-20">
          <KidsCategory />
        </section>
        
        <section id="skincare" className="scroll-mt-20">
          <SkincareSection />
        </section>
      </main>
      
      <Newsletter />
      <Footer />
    </div>
  )
}