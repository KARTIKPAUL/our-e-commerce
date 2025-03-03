import React from "react";

const brands = [
    { name: "Gucci", image: "https://www.ecostylia.com/wp-content/uploads/2023/07/featured-image-gucci.jpg", description: "Luxury and elegance redefined." },
    { name: "Prada", image: "https://www.retail-insight-network.com/wp-content/uploads/sites/18/2023/12/prada-shutterstock_482220325.jpg", description: "Timeless designs for modern fashion." },
    { name: "Balenciaga", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToK0aPpBgGXCSGPyLYZ5OImNI78xQCGrlhyv_8umt4zv_q7DQ_qdJ9Grz9p0fp92rCbBU&usqp=CAU", description: "Where streetwear meets sophistication." },
    { name: "Versace", image: "https://nayachashma.com/wp-content/uploads/2024/11/IMG_9144-1-scaled.jpeg", description: "Cutting-edge trends for trendsetters." },
    { name: "Louis Vuitton", image: "https://i.pinimg.com/originals/6e/1b/cc/6e1bcc3f5086779724fd15d6bb5fff28.jpg", description: "A symbol of exclusivity and high fashion." },
    { name: "Dolce & Gabbana", image: "https://media.fashionnetwork.com/cdn-cgi/image/format=auto/m/362f/60e4/88a7/6599/b280/ce4b/af8d/325b/fbcc/c619/c619.png", description: "Italian craftsmanship meets contemporary design." },
];

const Brands = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-10">
            {/* Title Section */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-gray-800">
                    Discover The Top <span className="text-gray-500">Fashion Brands</span>
                </h1>
                <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
                    Elevate your style with the world’s most renowned fashion houses.
                </p>
            </div>

            {/* Trending Brands Ticker */}
            <div className="overflow-hidden border-t border-b border-gray-300 py-3 mb-12 bg-gray-900 bg-opacity-80">
                <div className="flex justify-between px-6 text-gray-200 text-lg font-medium tracking-wide">
                    {brands.map((brand, index) => (
                        <span key={index} className="mx-4">
                            🔥 {brand.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* Brands Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {brands.map((brand, index) => (
                    <div key={index} className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                        <img 
                            src={brand.image} 
                            alt={brand.name} 
                            className="w-full h-[320px] object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-75 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                            <h2 className="text-white text-2xl font-semibold">{brand.name}</h2>
                            <p className="text-gray-300 text-sm">{brand.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;
