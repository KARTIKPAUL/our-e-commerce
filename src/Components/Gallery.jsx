import React from "react";

const galleryItems = [
  { name: "Casual", img: "https://nobero.com/cdn/shop/files/og.jpg?v=1722234051" },
  { name: "Formal", img: "https://www.thefashionisto.com/wp-content/uploads/2023/07/Business-Professional-Men-Suit-Dress-Shirt.jpg" },
  { name: "Party", img: "https://www.bonsoir.co.in/cdn/shop/products/Wine_Knitted_Check-Blazer.jpg?crop=center&height=1069&v=1730286670&width=823" },
  { name: "Gym", img: "https://lifestylebyps.com/cdn/shop/articles/Casual_outfits_men_1_800x.jpg?v=1546687239" },
];

export default function Gallery() {
  return (
    <div className="bg-gray-50 p-10 rounded-2xl shadow-xl max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">BROWSE BY DRESS STYLE</h2>
      <div className="grid grid-cols-2 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-72 object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-md text-gray-900 font-semibold shadow-md text-lg">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
s