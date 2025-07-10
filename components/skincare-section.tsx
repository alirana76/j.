export default function SkincareSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-6xl font-bold mb-4">J.</div>
            <h2 className="text-3xl font-bold mb-4">Explore J. Skincare</h2>
            <p className="text-gray-700 mb-6 max-w-md">
              RADIANCE AROUND THE CLOCK. Discover our premium skincare collection designed for your daily beauty
              routine.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="grid grid-cols-3 gap-4 max-w-md ml-auto">
              {["Face+Cream+Jar", "Serum+Bottle", "Cleanser+Tube", "Moisturizer+Pump", "Eye+Cream", "Toner+Bottle"].map(
                (product, index) => (
                  <div key={index + 1} className="bg-black rounded-lg p-2">
                    <img
                      src={`/placeholder.svg?height=100&width=80&text=${product}`}
                      alt={`Skincare Product ${index + 1}`}
                      className="w-full h-20 object-cover rounded"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
