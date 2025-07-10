"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const products = [
    {
      id: 1,
      name: "Embroidered Lawn Suit",
      price: "PKR 4,500",
      originalPrice: "PKR 5,500",
      image: "/placeholder.svg?height=400&width=300&text=Embroidered+Lawn+Suit",
      badge: "NEW",
    },
    {
      id: 2,
      name: "Cotton Kurta Shalwar",
      price: "PKR 3,200",
      originalPrice: "PKR 4,000",
      image: "/placeholder.svg?height=400&width=300&text=Cotton+Kurta+Shalwar",
      badge: "SALE",
    },
    {
      id: 3,
      name: "Silk Dupatta Collection",
      price: "PKR 2,800",
      originalPrice: "",
      image: "/placeholder.svg?height=400&width=300&text=Silk+Dupatta",
      badge: "",
    },
    {
      id: 4,
      name: "Premium Fragrance Set",
      price: "PKR 6,500",
      originalPrice: "PKR 8,000",
      image: "/placeholder.svg?height=400&width=300&text=Fragrance+Set",
      badge: "BESTSELLER",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Trending Products</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="group relative">
              {product.badge && (
                <div
                  className={`absolute top-4 left-4 z-10 px-2 py-1 text-xs font-semibold rounded ${
                    product.badge === "NEW"
                      ? "bg-green-500 text-white"
                      : product.badge === "SALE"
                        ? "bg-red-500 text-white"
                        : "bg-yellow-500 text-black"
                  }`}
                >
                  {product.badge}
                </div>
              )}

              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                  <Button size="icon" variant="secondary" className="w-8 h-8">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="w-8 h-8">
                    <ShoppingBag className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-center items-center space-x-2">
                  <span className="text-lg font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
