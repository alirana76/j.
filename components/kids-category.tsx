export default function KidsCategory() {
  const categories = [
    { name: "Hair Care", image: "/placeholder.svg?height=300&width=250&text=Kids+Hair+Products" },
    { name: "Teen Boys", image: "/placeholder.svg?height=300&width=250&text=Teen+Boys+Kurta" },
    { name: "Kid Girls", image: "/placeholder.svg?height=300&width=250&text=Girls+Frocks+Collection" },
    { name: "Kid Boys", image: "/placeholder.svg?height=300&width=250&text=Boys+Shalwar+Kameez" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Shop By Boys & Girls Category</h2>
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
