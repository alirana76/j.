export default function FeaturedCollections() {
  const collections = [
    {
      title: "Embroidered Collection",
      description: "Exquisite embroidered pieces for special occasions",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      link: "https://www.etsy.com/market/embroidered_clothing"
    },
    {
      title: "Men's Collection",
      description: "Contemporary and traditional menswear",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOF3j-xQCNcVoxqNAirXoNtA-1P2Col58fw&s",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOF3j-xQCNcVoxqNAirXoNtA-1P2Col58fw&s"
    },
    {
      title: "Stitched Collection",
      description: "Ready-to-wear premium stitched garments",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuVdtOH7nBv5STBJOvaeGeJgR7I7MV1nxzQ&s",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuVdtOH7nBv5STBJOvaeGeJgR7I7MV1nxzQ&s"
    },
    {
      title: "Styling Guide",
      description: "Complete your look with our styling guide",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      link: "https://www.vogue.com/fashion"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <a 
              key={index} 
              href={collection.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
              <p className="text-gray-600 text-sm">{collection.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
