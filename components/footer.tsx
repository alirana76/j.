import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Need Help */}
          <div>
            <h3 className="font-semibold mb-4">Need Help?</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>+92 21 111 112 111</p>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 2:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>

          {/* Catalogue */}
          <div>
            <h3 className="font-semibold mb-4">CATALOGUE</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Kids
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Fragrances
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Beauty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 Junaid Jamshed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
