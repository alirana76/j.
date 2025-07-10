export default function MenCategory() {
  const categories = [
    { name: "Kameez Shalwar", image: "/placeholder.svg?height=300&width=250&text=Traditional+Kameez+Shalwar" },
    { name: "Waistcoat", image: "/placeholder.svg?height=300&width=250&text=Embroidered+Waistcoat" },
    { name: "Kurta Shalwar", image: "/placeholder.svg?height=300&width=250&text=Cotton+Kurta+Shalwar" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Shop By Men Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
