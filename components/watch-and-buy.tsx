export default function WatchAndBuy() {
  const videos = [
    { thumbnail: "/placeholder.svg?height=200&width=300&text=Fashion+Show+Video", title: "Latest Collection Showcase" },
    { thumbnail: "/placeholder.svg?height=200&width=300&text=Styling+Tips+Video", title: "How to Style Your Outfit" },
    { thumbnail: "/placeholder.svg?height=200&width=300&text=Behind+Scenes", title: "Behind the Scenes" },
    { thumbnail: "/placeholder.svg?height=200&width=300&text=Product+Review", title: "Customer Reviews" },
    { thumbnail: "/placeholder.svg?height=200&width=300&text=Fabric+Guide", title: "Fabric Care Guide" },
    { thumbnail: "/placeholder.svg?height=200&width=300&text=New+Arrivals", title: "New Arrivals Preview" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Watch And Buy!</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-black border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
