import { useState } from "react";
import { ShoppingCart, Filter, Search, ChevronDown, Star } from "lucide-react";
import { motion } from "framer-motion";

const saleItems = [
    { id: 1, name: "Denim Jacket", price: 49.99, oldPrice: 79.99, image: "data:image/jpeg;base64,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" },
    { id: 2, name: "Summer Dress", price: 29.99, oldPrice: 59.99, image: "https://i.pinimg.com/564x/00/3e/43/003e43dd8a8620101350068c978c41aa.jpg" },
    { id: 3, name: "Leather Boots", price: 89.99, oldPrice: 129.99, image: "https://hitz.co.in/cdn/shop/files/2519-BROWN.jpg?v=1734022479" },
    { id: 4, name: "Casual T-Shirt", price: 19.99, oldPrice: 39.99, image: "https://www.aviationkart.com/cdn/shop/products/HTB1JAJtiqAoBKNjSZSyq6yHAVXaw_2048x.jpg?v=1686635504" }
  ];
  
  
  

const dealOfTheDay = {
  name: "Exclusive Sneakers",
  price: 59.99,
  oldPrice: 99.99,
  image: "https://www.jiomart.com/images/product/original/rvr2yonh8o/dexture-air-jordan-style-trendy-sneakers-for-men-blue-product-images-rvr2yonh8o-0-202305310813.jpg?im=Resize=(1000,1000)"
};

export default function OnSalePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);
  
  const filteredItems = saleItems.filter((item) => 
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "All" || item.price < 50)
  );
  
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center px-6 py-12">
      <div className="flex justify-between items-center w-full max-w-7xl mb-10">
        <h1 className="text-5xl font-bold">🔥 On Sale Now</h1>
        <div className="flex gap-4 relative">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-600" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 p-3 border rounded-md bg-gray-100 text-black w-60" 
              value={search} 
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="p-3 border rounded-md cursor-pointer flex items-center gap-2 relative bg-gray-100 text-black" onClick={() => setShowFilter(!showFilter)}>
            <Filter className="w-5 h-5" /> Filter <ChevronDown className="w-4 h-4" />
            {showFilter && (
              <div className="absolute top-12 right-0 bg-gray-100 shadow-md rounded-md w-36 p-2">
                <p className="cursor-pointer hover:bg-gray-200 p-2 rounded" onClick={() => setFilter("All")}>All</p>
                <p className="cursor-pointer hover:bg-gray-200 p-2 rounded" onClick={() => setFilter("Under $50")}>Under $50</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mb-12 text-center">
        <h2 className="text-4xl font-bold mb-6">⭐ Deal of the Day</h2>
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-yellow-100 rounded-lg shadow-lg flex flex-col items-center">
          <img src={dealOfTheDay.image} alt={dealOfTheDay.name} className="w-full max-w-md h-64 object-cover rounded" />
          <h2 className="text-2xl font-semibold mt-3">{dealOfTheDay.name}</h2>
          <p className="text-red-500 font-bold text-lg">${dealOfTheDay.price.toFixed(2)} <span className="line-through text-gray-400 ml-2 text-sm">${dealOfTheDay.oldPrice.toFixed(2)}</span></p>
          <motion.div whileHover={{ scale: 1.1 }} className="mt-4 w-full flex items-center justify-center gap-2 py-3 border rounded-md cursor-pointer bg-blue-500 text-white hover:bg-blue-600 text-lg font-medium">
            <ShoppingCart className="w-5 h-5" /> Add to Cart
          </motion.div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <motion.div key={item.id} whileHover={{ scale: 1.05 }} className="p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded" />
              <h2 className="text-xl font-semibold mt-3">{item.name}</h2>
              <p className="text-red-500 font-bold text-lg">${item.price.toFixed(2)} <span className="line-through text-gray-400 ml-2 text-sm">${item.oldPrice.toFixed(2)}</span></p>
              <motion.div whileHover={{ scale: 1.1 }} className="mt-4 w-full flex items-center justify-center gap-2 py-3 border rounded-md cursor-pointer bg-blue-500 text-white hover:bg-blue-600 text-lg font-medium">
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </motion.div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">No items found</p>
        )}
      </div>
    </div>
  );
}