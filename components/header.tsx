"use client"

import { Search, ShoppingBag, User, Heart } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-black font-semibold" : "hover:text-gray-600"
  }

  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs py-1">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>FREE DELIVERY</span>
          <div className="flex items-center gap-4">
            <Link href="/customer-service" className="hover:underline">CUSTOMER SERVICE</Link>
            <Link href="/track-order" className="hover:underline">TRACK MY ORDER</Link>
            <Link href="/sale" className="hover:underline">SALE</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-4xl font-bold mr-8">J.</Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <Link href="/new-arrivals" className={isActive("/new-arrivals")}>NEW ARRIVALS</Link>
            <Link href="/collection" className={isActive("/collection")}>COLLECTION</Link>
            <Link href="/featured-collections" className={isActive("/featured-collections")}>FEATURED COLLECTIONS</Link>
            <Link href="/brands" className={isActive("/brands")}>BRANDS</Link>
            <Link href="/sale" className={isActive("/sale")}>SALE</Link>
            <Link href="/kids" className={isActive("/kids")}>BOYS & GIRLS</Link>
            <Link href="/fragrances" className={isActive("/fragrances")}>FRAGRANCES</Link>
            <Link href="/gift-cards" className={isActive("/gift-cards")}>GIFT CARD</Link>
            <Link href="/skincare" className={isActive("/skincare")}>SKINCARE</Link>
            <Link href="/gifts" className={isActive("/gifts")}>GIFT</Link>
            <Link href="/sale" className="text-red-600 hover:text-red-700">SALE</Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/search">
              <Search className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            </Link>
            <Link href="/account">
              <User className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            </Link>
            <Link href="/wishlist">
              <Heart className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}