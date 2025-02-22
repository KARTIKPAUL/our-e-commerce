import React from "react";

const products = [
  { id: 1, price: "$29.99", img: "https://img.faballey.com/images/Product/XKS03765F/d3.jpg" },
  { id: 2, price: "$49.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRau45SiYkyl4qaAQ4cbBKypUTlJ-WzLdmNWA&s" },
  { id: 3, price: "$59.99", img: "https://assets0.mirraw.com/images/12653852/image_long_webp.webp?1720077067" },
  { id: 4, price: "$79.99", img: "https://imagescdn.vanheusenindia.com/img/app/product/3/39735913-16658636.jpg?auto=format&w=390" },
  { id: 5, price: "$39.99", img: "https://images.faverie.com/cb:Twin~42e91/w:auto/h:auto/q:mauto/f:best/id:f942ee7ab1f6c94a1045c4c1552d978c/https://www.faverie.com/woman-outdoors-holds-hair-hand-white-clothes.jpg" },
  { id: 6, price: "$89.99", img: "https://m.media-amazon.com/images/I/717jugkV07L._AC_UY1100_.jpg" },
  { id: 7, price: "$54.99", img: "https://figclothing.ca/cdn/shop/collections/HAUTS.jpg?v=1738792749&width=1026" },
  { id: 8, price: "$69.99", img: "https://imagescdn.vanheusenindia.com/img/app/product/3/39683704-13929298.jpg?auto=format&w=390" },
];

const WomensPage = () => {
  return (
    <div className="bg-gray-100 pb-12">
      <div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/blonde-woman-holding-shopping-bags-260nw-1927533389.jpg')" }}>
        <div className="text-center bg-black/50 px-10 py-6 rounded-lg">
          <h1 className="text-5xl font-bold uppercase tracking-wide">Women's Collection</h1>
          <p className="text-lg mt-3">Elevate Your Style</p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-6 border-b-2 pb-2">Trending Fashion</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {products.map((product) => (
            <div key={product.id} className="relative group overflow-hidden rounded-lg shadow-lg bg-white w-[280px] h-[420px]">
              <img src={product.img} alt="Fashion Item" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-3 right-3 bg-black text-white text-sm px-3 py-1 rounded-full shadow-lg">
                {product.price}
              </div>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-pink-600 to-red-500 text-white rounded-full font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomensPage;
