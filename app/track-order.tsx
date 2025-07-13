import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TrackOrder() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>
        {/* Add order tracking form */}
      </main>
      <Footer />
    </div>
  )
}