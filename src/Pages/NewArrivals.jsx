import React from "react";

const products = [
  { id: 1, price: "$49.99", img: "https://5.imimg.com/data5/SELLER/Default/2021/7/QG/HJ/OH/126840080/front-6065ab4138141-white-l-men-round-500x500.jpg" },
  { id: 2, price: "$39.99", img: "https://trulyfeb.com/wp-content/uploads/2023/10/11-GREEN-600x599.jpg" },
  { id: 3, price: "$59.99", img: "https://i.ebayimg.com/images/g/QM0AAOSwHBtm9aIv/s-l400.jpg" },
  { id: 4, price: "$79.99", img: "https://img.faballey.com/images/Product/XKS03765F/d3.jpg" },
  { id: 5, price: "$29.99", img: "https://figclothing.ca/cdn/shop/collections/HAUTS.jpg?v=1738792749&width=1026" },
  { id: 6, price: "$89.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRau45SiYkyl4qaAQ4cbBKypUTlJ-WzLdmNWA&s" },
  { id: 7, price: "$54.99", img: "https://images.jdmagicbox.com/rep/b2b/Kids-Clothing/Kids-Clothing-3.jpg" },
  { id: 8, price: "$69.99", img: "https://www.mumkins.in/cdn/shop/files/boys-kurta-pajama-bs10ish01-sky-blue-1.jpg?v=1725517681&width=1080" },
];

const NewArrivals = () => {
  return (
    <div className="bg-gray-100 pb-12">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/neon-icon-new-arrival-label-dark-background-new-arrival-vector-illustration_123447-1903.jpg')" }}>
        <div className="text-center bg-black/50 px-10 py-6 rounded-lg">
          <h1 className="text-5xl font-bold uppercase tracking-wide">New Arrivals</h1>
          <p className="text-lg mt-3">Fresh Styles Just for You</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-6 border-b-2 pb-2">Just Arrived</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {products.map((product) => (
            <div key={product.id} className="relative group overflow-hidden rounded-lg shadow-lg bg-white w-[280px] h-[420px]">
              <img src={product.img} alt="Fashion Item" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-3 right-3 bg-black text-white text-sm px-3 py-1 rounded-full shadow-lg">
                {product.price}
              </div>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-full font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;

