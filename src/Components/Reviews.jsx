import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Star } from "lucide-react";

const reviews = [
  { name: "Samantha D.", text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." },
  { name: "Alex K.", text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions." },
  { name: "Sarah M.", text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." },
  { name: "Ethan R.", text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." },
  { name: "Olivia P.", text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out." },
  { name: "Liam K.", text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion." },
  { name: "Jessica L.", text: "Absolutely stunning designs! Every product I buy from Shop.co never fails to impress me. The attention to detail and quality are unmatched." },
  { name: "Daniel W.", text: "Great fit and amazing fabric. I’ve received so many compliments on my new outfits from Shop.co. Definitely my go-to brand now!" }
];

// ✅ Card Component
const Card = ({ name, text, fade }) => {
  return (
    <div
      className={`w-200 bg-white shadow-lg rounded-2xl p-5 border border-gray-200 transition-all duration-500 ${
        fade ? "opacity-40 scale-90" : "opacity-100"
      }`}
    >
      {/* Star Rating */}
      <div className="flex gap-1 text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" stroke="none" />
        ))}
      </div>

      {/* Reviewer Name & Verified Check */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold">{name}</span>
        <CheckCircle size={18} className="text-green-500" />
      </div>

      {/* Review Text */}
      <p className="text-sm text-gray-600 mt-2">{text}</p>
    </div>
  );
};

// ✅ Main Reviews Component
export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < reviews.length ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : reviews.length - 1
    );
  };

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-50 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">OUR HAPPY CUSTOMERS</h2>
      <div className="relative flex items-center justify-center max-w-[90%] mx-auto overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Review Cards */}
        <div className="flex gap-6 overflow-hidden w-full justify-center">
          {reviews.map((review, index) => (
            <Card key={index} name={review.name} text={review.text} fade={index < currentIndex || index > currentIndex + 2} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
