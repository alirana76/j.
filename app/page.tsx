import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ShopForNewArrival from "@/components/shop-for-new-arrival"
import ProductShowcase from "@/components/product-showcase"
import FeaturedCollections from "@/components/featured-collections"
import WatchAndBuy from "@/components/watch-and-buy"
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
      <ShopForNewArrival />
      <ProductShowcase />
      <FeaturedCollections />
      <WatchAndBuy />
      <WomenCategory />
      <MenCategory />
      <FragrancesCategory />
      <KidsCategory />
      <SkincareSection />
      <Newsletter />
      <Footer />
    </div>
  )
}
