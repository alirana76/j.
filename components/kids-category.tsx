export default function KidsCategory() {
  const categories = [
    { name: "Hair Care", image: "https://cdn.shopify.com/s/files/1/0513/2409/files/7_hair_feat_1.png?v=1680294221" },
    { name: "Teen Boys", image: "https://bachaaparty.com/cdn/shop/files/BPE_5104_7cd7e46a-29a7-427b-b694-c3ade2605705.jpg?v=1742988521&width=1080" },
    { name: "Kid Girls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwU_YJBA2PY8PEco9fpORzf9pFLwjfchRCJw&s" },
    { name: "Kid Boys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyA4FyprdvpwDupw_uuC0db7h1OHHryrPY7Q&s" },
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
