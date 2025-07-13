export default function FragrancesCategory() {
  const categories = [
    { name: "Bag Fragrance", image: "https://thumbs.dreamstime.com/b/women-s-beauty-products-including-perfume-makeup-accessories-poured-out-shopping-bag-onto-pink-background-showcasing-380570004.jpg" },
    { name: "Women Fragrance", image: "https://www.shutterstock.com/image-photo/perfume-bottle-woman-spray-aroma-260nw-2421335271.jpg" },
    { name: "Cosmetics", image: "https://media.istockphoto.com/id/487770577/photo/makeup-set-on-table-front-view.jpg?s=612x612&w=0&k=20&c=IS_ZuHCF3N66jhDMwt2s7J_PGWABlpv2ISEAwpJ4JKU=" },
    { name: "Skin Care", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZKImv_vby-SSjEOHAd6sLn1dApefMsqEwg&s" },
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
