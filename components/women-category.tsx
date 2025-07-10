export default function WomenCategory() {
  const categories = [
    { name: "Unstitched", image: "/placeholder.svg?height=300&width=250&text=Unstitched+Lawn+Fabric" },
    { name: "Stitched", image: "/placeholder.svg?height=300&width=250&text=Stitched+Kurti+Collection" },
    { name: "Kurta", image: "/placeholder.svg?height=300&width=250&text=Women+Kurta+Designs" },
    { name: "Trousers", image: "/placeholder.svg?height=300&width=250&text=Palazzo+Trousers" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Shop By Women Category</h2>
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
