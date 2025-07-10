"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-pink-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-200 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow-200 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex w-full items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 z-10">
            <div className="text-8xl font-bold mb-4">J.</div>
            <div className="text-xl font-medium mb-2">NEW ARRIVALS</div>
            <p className="text-gray-600 max-w-md">
              Discover our latest collection of premium Islamic fashion and contemporary designs.
            </p>
          </div>

          {/* Right Content - Product Images */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4 max-w-md ml-auto">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src="/placeholder.svg?height=300&width=200&text=Red+Embroidered+Kurti"
                  alt="Red Embroidered Kurti"
                  className="w-full h-64 object-cover rounded"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 mt-8">
                <img
                  src="/placeholder.svg?height=300&width=200&text=Blue+Floral+Dress"
                  alt="Blue Floral Dress"
                  className="w-full h-64 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  )
}
