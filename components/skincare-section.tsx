"use client";

export default function SkincareSection() {
  const skincareProducts = [
    {
      name: "Face Cream",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Serum",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Cleanser",
      image: "data:image/jpeg;base64,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"
    },
    {
      name: "Moisturizer",
      image: "data:image/jpeg;base64,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"
    },
    {
      name: "Eye Cream",
      image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Toner",
      image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-8 md:mb-0">
            <div className="text-6xl font-bold mb-4">J.</div>
            <h2 className="text-3xl font-bold mb-4">Explore J. Skincare</h2>
            <p className="text-gray-700 mb-6 max-w-md">
              RADIANCE AROUND THE CLOCK. Discover our premium skincare collection designed for your daily beauty
              routine.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Shop Collection
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md mx-auto md:ml-auto">
              {skincareProducts.map((product, index) => (
                <div key={index} className="group relative bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden rounded">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.onerror = null; 
                        img.src = `https://via.placeholder.com/200?text=${product.name.replace(/\s+/g, '+')}`;
                      }}
                    />
                  </div>
                  <p className="text-center mt-2 font-medium text-gray-800">{product.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}