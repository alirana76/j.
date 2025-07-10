import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">BE THE FIRST</h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Stay updated. Exclusive previews. First access to new collections and special offers.
        </p>
        <div className="flex max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email address" className="bg-white text-black rounded-r-none" />
          <Button className="bg-white text-black hover:bg-gray-100 rounded-l-none">Subscribe</Button>
        </div>
      </div>
    </section>
  )
}
