import React from "react";

export function TopSelling({ cat, onPress }) {
    const TopSelling = [
        {
            name: "Oversized",
            description: "Loose and comfortable fit",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWcqBM8l1uuFDjhzkXGgcCSSz-ar60n7rkw&s",
            onPressed: () => console.log("Oversized clicked")
        },
        {
            name: "WindCheater",
            description: "Light and breathable jackets",
            link: "https://image.made-in-china.com/202f0j00ROckLsbalyqS/Unisex-Autumn-Casual-Hooded-Coat-Windcheater-for-Men-Couple-Jackets-for-Men-2024-Waterproof-Men-Windbreaker-Jackets.webp",
            onPressed: () => console.log("WindCheater clicked")
        },
        {
            name: "Cargo Pants",
            description: "Practical pants with large pockets",
            link: "https://assets.ajio.com/medias/sys_master/root/20240911/EthL/66e1910d6f60443f3170974e/-473Wx593H-700364622-green-MODEL.jpg",
            onPressed: () => console.log("Cargo Pants clicked")
        },
        {
            name: "Socks",
            description: "Comfy and stylish socks",
            link: "https://allsport.mu/cdn/shop/products/T00915.jpg?v=1668162226",
            onPressed: () => console.log("Socks clicked")
        },
        {
            name: "Shorts",
            description: "Cool and casual shorts",
            link: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F71%2F7b%2F717b2404ee71cb4a3541a0356e71fc787b9c324d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts_cargo%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
            onPressed: () => console.log("Shorts clicked")
        },
        {
            name: "Relaxed T-Shirts",
            description: "Relaxed fit tees for comfort",
            link: "https://assets.ajio.com/medias/sys_master/root/20240913/d7Vg/66e413f91d763220fae48375/-473Wx593H-700418278-green-MODEL.jpg",
            onPressed: () => console.log("Relaxed T-Shirts clicked")
        }
    ];

    return (
        <div className="w-screen flex flex-col items-center py-12 bg-gray-50">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Selling</h2>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl w-full px-6">
                {TopSelling.map((x, i) => (
                    <div 
                        key={i} 
                        onClick={() => x.onPressed()} 
                        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    >
                        {/* Product Image */}
                        <img className="w-full h-72 object-cover" src={x.link} alt={x.name} />

                        {/* Product Details */}
                        <div className="p-5">
                            <h3 className="text-xl font-semibold">{x.name}</h3>
                            <p className="text-sm text-gray-600">{x.description}</p>
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xl font-bold text-gray-900">₹1200</span>
                                <button className="text-blue-600 font-medium">Shop Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <button className="mt-10 px-8 py-3 border rounded-full text-gray-900 font-medium hover:bg-gray-100 transition">
                View All
            </button>
        </div>
    );
}