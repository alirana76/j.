"use client"

import { Search, ShoppingBag, User, Heart } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs py-1">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>FREE DELIVERY</span>
          <div className="flex items-center gap-4">
            <span>CUSTOMER SERVICE</span>
            <span>TRACK MY ORDER</span>
            <span>SALE</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-4xl font-bold mr-8">J.</div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <a href="#" className="hover:text-gray-600">
              NEW ARRIVALS
            </a>
            <a href="#" className="hover:text-gray-600">
              SYNC
            </a>
            <a href="#" className="hover:text-gray-600">
              COLLECTION
            </a>
            <a href="#" className="hover:text-gray-600">
              FEATURED COLLECTIONS
            </a>
            <a href="#" className="hover:text-gray-600">
              BRANDS
            </a>
            <a href="#" className="hover:text-gray-600">
              SALE
            </a>
            <a href="#" className="hover:text-gray-600">
              BOYS & GIRLS
            </a>
            <a href="#" className="hover:text-gray-600">
              FRAGRANCES
            </a>
            <a href="#" className="hover:text-gray-600">
              GIFT CARD
            </a>
            <a href="#" className="hover:text-gray-600">
              SKINCARE
            </a>
            <a href="#" className="hover:text-gray-600">
              GIFT
            </a>
            <a href="#" className="text-red-600 hover:text-red-700">
              SALE
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            <User className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            <div className="relative">
              <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
