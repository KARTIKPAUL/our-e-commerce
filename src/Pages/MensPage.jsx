import React from "react";

const products = [
  { id: 1, category: "New", price: "$19.99", img: "https://5.imimg.com/data5/SELLER/Default/2021/7/QG/HJ/OH/126840080/front-6065ab4138141-white-l-men-round-500x500.jpg" },
  { id: 2, category: "New", price: "$39.99", img: "https://d118ps6mg0w7om.cloudfront.net/media/catalog/product/s/s/fit-in/1000x1333/ss-24_4000x5000-04-10-24_mft-29540-s-170-mid-blue_1_mft-29540-s-170-mid-blue.jpg" },
  { id: 3, category: "New", price: "$89.99", img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/jacket/c/u/j/xxl-no-classic-latest-fashion-black-biker-leather-jacket-for-men-original-imagtzbkwz4wjzwb.jpeg?q=20&crop=false" },
  { id: 4, category: "New", price: "$49.99", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f76f73e-2578-4d62-abab-c5563ea4f78c/NIKE+DUNK+LOW+RETRO.png" },
  { id: 5, category: "Special", price: "$79.99", img: "https://trulyfeb.com/wp-content/uploads/2023/10/11-GREEN-600x599.jpg" },
  { id: 6, category: "Special", price: "$59.99", img: "https://rukminim2.flixcart.com/image/850/1000/l1l1rww0/watch/5/w/u/1-black-dial-digital-watch-for-boys-black-sports-watch-men-original-imagd4yzszbgba39.jpeg?q=20&crop=false" },
  { id: 7, category: "Special", price: "$34.99", img: "https://i.ebayimg.com/images/g/QM0AAOSwHBtm9aIv/s-l400.jpg" },
  { id: 8, category: "Special", price: "$44.99", img: "https://levi.in/cdn/shop/files/A92150000_2.jpg?v=1727161158&width=1445" },
];

const MensPage = () => {
  return (
    <div className="bg-gray-100 pb-12">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}>
        <div className="text-center bg-black/50 px-10 py-6 rounded-lg">
          <h1 className="text-5xl font-bold uppercase tracking-wide">Men's Collection</h1>
          <p className="text-lg mt-3">Create Your Individuality with Style</p>
        </div>
      </div>

      {/* Product Sections */}
      <div className="container mx-auto px-6">
        {/* New Arrivals */}
        <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-6 border-b-2 pb-2">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {products.filter(p => p.category === "New").map((product) => (
            <div key={product.id} className="relative group overflow-hidden rounded-lg shadow-lg bg-white w-[280px] h-[420px]">
              <img src={product.img} alt="Fashion Item" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110" />
              
              {/* Dark Hover Effect */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Price Tag */}
              <div className="absolute top-3 right-3 bg-black text-white text-sm px-3 py-1 rounded-full shadow-lg">
                {product.price}
              </div>

              {/* Add to Cart Button */}
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Special Products */}
        <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-6 border-b-2 pb-2">Special Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {products.filter(p => p.category === "Special").map((product) => (
            <div key={product.id} className="relative group overflow-hidden rounded-lg shadow-lg bg-white w-[280px] h-[420px]">
              <img src={product.img} alt="Fashion Item" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110" />
              
              {/* Dark Hover Effect */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Price Tag */}
              <div className="absolute top-3 right-3 bg-black text-white text-sm px-3 py-1 rounded-full shadow-lg">
                {product.price}
              </div>

              {/* Add to Cart Button */}
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MensPage;
