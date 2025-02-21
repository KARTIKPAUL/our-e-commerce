import React from "react";

const products = [
  { id: 1, price: "$19.99", img: "https://i.etsystatic.com/11463421/r/il/2007e2/3546997770/il_fullxfull.3546997770_6da9.jpg" },
  { id: 2, price: "$29.99", img: "https://www.mumkins.in/cdn/shop/files/boys-kurta-pajama-bs10ish01-sky-blue-1.jpg?v=1725517681&width=1080" },
  { id: 3, price: "$39.99", img: "https://m.media-amazon.com/images/I/81P5KwT73dL._AC_UY1100_.jpg" },
  { id: 4, price: "$49.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzF1JFuxiw25Y9y1mJvSrJX_hPD3dExY978Q&s" },
  { id: 5, price: "$24.99", img: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg" },
  { id: 6, price: "$34.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_I9YzjpHEbzAix989y-M7O6fR2JVqYX-ZQ&s" },
  { id: 7, price: "$44.99", img: "https://images.jdmagicbox.com/rep/b2b/Kids-Clothing/Kids-Clothing-3.jpg" },
  { id: 8, price: "$54.99", img: "https://images.jdmagicbox.com/rep/b2b/Kids-Clothing/Kids-Clothing-3.jpg" },
];

const KidsPage = () => {
  return (
    <div className="bg-gray-100 pb-12">
      <div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://www.1stkidswholesale.co.uk/pub/media/wysiwyg/home/Kids-fashion.jpg')" }}>
        <div className="text-center bg-black/50 px-10 py-6 rounded-lg">
          <h1 className="text-5xl font-bold uppercase tracking-wide">Kids' Fashion</h1>
          <p className="text-lg mt-3">Cute & Trendy Styles</p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-6 border-b-2 pb-2">New Trends for Kids</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {products.map((product) => (
            <div key={product.id} className="relative group overflow-hidden rounded-lg shadow-lg bg-white w-[280px] h-[420px]">
              <img src={product.img} alt="Fashion Item" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-3 right-3 bg-black text-white text-sm px-3 py-1 rounded-full shadow-lg">
                {product.price}
              </div>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-full font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
