import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductShowcase from "@/components/product-showcase"

export default function NewArrivals() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">New Arrivals</h1>
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  )
}