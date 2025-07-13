export default function WomenCategory() {
  const categories = [
    { name: "Unstitched", image: "https://www.gulahmedshop.com/media/wysiwyg/2025/03_category_icons/01_lawn_collection/dhoop_kinaray.jpg?format=webp?format=webp" },
    { name: "Stitched", image: "https://i.pinimg.com/564x/82/f7/f1/82f7f11cc10a86e76834e231bec88d87.jpg" },
    { name: "Kurta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOgJJ4-hXsi3jQfDCX8SeglVIPhy24gLknw&s" },
    { name: "Trousers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncFUz0tbsEikSlMUBB0lbmsNdTaJtvkAyHw&s" },
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
