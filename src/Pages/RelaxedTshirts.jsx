const RelaxedTshirts = () => {
    return(
        <>
        <div className="max-w-6xl mx-auto p-6">
            {/* Hero Section */}
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1519741497674-611481551541" 
                    alt="Relaxed Fit T-Shirts" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-6xl font-extrabold tracking-tight">Effortless Comfort</h1>
                    <p className="text-lg mt-4 max-w-lg">
                        Soft fabrics, relaxed fits, and timeless styles—crafted for movement, built for ease.
                    </p>
                </div>
            </div>

            {/* Moodboard Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                <img 
                    src="https://businessarcade.com/image/cache/catalog/product-19896/mens-dark-grey-color-boxy-fit-korean-style-short-sleeve-nbsp-t-shirt-R5o4fkxTqz-550x550.jpeg" 
                    alt="Minimalist T-Shirt" 
                    className="w-full h-60 object-cover rounded-xl shadow-md"
                />
                <img 
                    src="https://nobero.com/cdn/shop/files/WhatsApp_Image_2024-06-28_at_12.38.52_PM.jpg?v=1719559146" 
                    alt="Relaxed Fit" 
                    className="w-full h-60 object-cover rounded-xl shadow-md"
                />
                <img 
                    src="https://d2fy0k1bcbbnwr.cloudfront.net/Designs_Inners_and_Outers/Tshirts/Men/Men_Plain_Sunset_Orange_1.jpg" 
                    alt="Timeless Essentials" 
                    className="w-full h-60 object-cover rounded-xl shadow-md"
                />
                <img 
                    src="https://fcity.in/images/products/319819104/emgui_512.jpg" 
                    alt="Effortless Streetwear" 
                    className="w-full h-60 object-cover rounded-xl shadow-md"
                />
            </div>

            {/* Editorial Look - Feature Section */}
            <div className="mt-20 flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <h2 className="text-5xl font-bold text-gray-900 leading-tight">Where Comfort Meets Style</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Crafted with breathable cotton blends, our relaxed t-shirts move with you effortlessly, making them your go-to essential for any occasion.
                    </p>
                    <p className="text-lg text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nulla in provident nostrum veniam. Sit quisquam quod quas repudiandae quidem!
                    </p>
                </div>
                <img 
                    src="https://img4.dhresource.com/webp/m/260x260/f3/albu/km/m/19/2740beab-43c6-414f-bda0-a60795076ac8.jpg" 
                    alt="Premium T-Shirt" 
                    className="w-full md:w-1/2 rounded-xl shadow-lg"
                />
            </div>

            {/* Feature Highlights - Asymmetrical Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 border rounded-xl shadow-md text-center">
                    <h3 className="text-2xl font-semibold text-gray-900">Premium Cotton</h3>
                    <p className="text-gray-600 mt-3">Soft, breathable, and naturally lightweight.</p>
                </div>
                <div className="p-6 bg-gray-50 border rounded-xl shadow-md text-center">
                    <h3 className="text-2xl font-semibold text-gray-900">Relaxed Fit</h3>
                    <p className="text-gray-600 mt-3">A draped silhouette that offers maximum comfort.</p>
                </div>
                <div className="p-6 bg-gray-50 border rounded-xl shadow-md text-center">
                    <h3 className="text-2xl font-semibold text-gray-900">Timeless Design</h3>
                    <p className="text-gray-600 mt-3">Minimalist aesthetics that never go out of style.</p>
                </div>
            </div>

            {/* Call to Action - Black & White Contrast */}
            <div className="text-center py-20 mt-16 bg-gray-900 text-white rounded-xl">
                <h2 className="text-4xl font-bold">Redefine Relaxation</h2>
                <p className="text-lg mt-4 max-w-lg mx-auto">
                    The perfect balance of comfort and effortless sophistication—get yours today.
                </p>
                <button className="mt-6 bg-white text-gray-900 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">
                    Shop Now
                </button>
            </div>
        </div>
        </>
    )
}

export default RelaxedTshirts;