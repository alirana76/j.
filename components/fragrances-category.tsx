export default function FragrancesCategory() {
  const categories = [
    { name: "Bag Fragrance", image: "/placeholder.svg?height=300&width=250&text=Luxury+Perfume+Bottles" },
    { name: "Women Fragrance", image: "/placeholder.svg?height=300&width=250&text=Women+Perfume+Collection" },
    { name: "Cosmetics", image: "/placeholder.svg?height=300&width=250&text=Makeup+Products" },
    { name: "Skin Care", image: "/placeholder.svg?height=300&width=250&text=Skincare+Essentials" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Shop By Fragrances & Cosmetics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
