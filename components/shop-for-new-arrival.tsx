import { Button } from "@/components/ui/button"

export default function ShopForNewArrival() {
  const categories = [
    { name: "Women", active: true },
    { name: "Men", active: false },
    { name: "Boys", active: false },
    { name: "Girls", active: false },
    { name: "Fragrances", active: false },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">Shop For New Arrival</h2>
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={`px-8 py-2 rounded-full ${
                  category.active
                    ? "bg-black text-white hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
