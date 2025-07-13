import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Brands() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Our Brands</h1>
        {/* Add brands listing */}
      </main>
      <Footer />
    </div>
  )
}