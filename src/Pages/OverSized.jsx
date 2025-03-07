const OverSized = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Oversized Fashion</h1>
            <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                Elevate your style with our latest oversized collection. Comfortable, trendy, and made for every occasion.
            </p>
            
            {/* Featured Banner */}
            <div className="relative bg-gray-900 text-white p-10 rounded-xl mb-12">
                <h2 className="text-3xl font-bold">New Arrivals</h2>
                <p className="mt-2">Check out our latest oversized fits for the season.</p>
                <button className="mt-4 bg-white text-gray-900 py-2 px-6 rounded-lg">Shop Now</button>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-800 opacity-50 rounded-r-xl"></div>
            </div>
            
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
    { name: "Oversized Hoodie", price: "$49.99", image: "https://cdn.endource.com/image/9960c125583e1216a0bef59ae1728037/detail/default.jpg?optimizer=image&class=1600" },
    { name: "Oversized T-Shirt", price: "$29.99", image: "https://veirdo.in/cdn/shop/files/18_5.jpg?v=1723283778" },
    { name: "Oversized Trousers", price: "$39.99", image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/28940070/2024/7/3/46c9599c-4df2-4eca-80ae-b3446aee90a01720009111108-Aeropostale-Men-Trousers-5151720009110513-1.jpg" },
    { name: "Oversized Sweatshirt", price: "$44.99", image: "https://images.bewakoof.com/t540/men-s-black-oversized-sweatshirt-644621-1732283952-1.jpg" },
    { name: "Oversized Denim Jacket", price: "$59.99", image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29790610/2024/11/29/9ac2694b-f879-48a0-b8d9-27210ea795c61732869389323-Roadster-Men-Jackets-3841732869388695-1.jpg" },
    { name: "Oversized Flannel Shirt", price: "$34.99", image: "https://images.asos-media.com/products/hugo-blue-ebolt-oversized-flannel-shirt-in-beige-and-blue-check/206890405-1-beige?$n_640w$&wid=513&fit=constrain" },
    { name: "Oversized Cargo Pants", price: "$42.99", image: "https://nobero.com/cdn/shop/files/NewImagesJoggers-0008_f3464ac4-8066-4b91-8e2f-243b3e7d5132.webp?v=1712300686" },
    { name: "Oversized Blazer", price: "$64.99", image: "https://img4.dhresource.com/webp/m/0x0/f3/albu/ry/s/21/381790e3-961e-45fe-ac39-9a8c773f55eb.jpg" }
].map((item, index) => (
    <div key={index} className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
        <img src={item.image} alt={item.name} className="h-64 w-full object-cover rounded-xl" />
        <h2 className="mt-4 text-xl font-semibold">{item.name}</h2>
        <p className="text-gray-500">{item.price}</p>
        <button className="mt-3 bg-gray-900 text-white py-2 px-4 rounded-lg w-full hover:bg-gray-700 transition">Shop Now</button>
    </div>
))}

            </div>

            {/* Fashion Articles Section */}
            <div className="mt-16">
                <h2 className="text-4xl font-bold text-center mb-8">Fashion Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((article) => (
                        <div key={article} className="bg-gray-100 p-6 rounded-xl shadow-md">
                            <h3 className="text-2xl font-semibold">Trend {article}: The Rise of Oversized Fashion</h3>
                            <p className="text-gray-600 mt-2">Explore why oversized fashion is taking over the industry and how you can style it effortlessly.</p>
                            <button className="mt-3 text-gray-900 font-bold underline">Read More</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OverSized;
