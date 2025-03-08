const Shorts = () => {
    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Hero Section */}
            <div className="text-center py-16">
                <h1 className="text-6xl font-bold text-gray-900 tracking-tight">Shorts, Reinvented.</h1>
                <p className="text-lg text-gray-500 mt-4 max-w-lg mx-auto">
                    A fusion of comfort, elegance, and everyday versatility—tailored to fit your vibe.
                </p>
            </div>

            {/* Asymmetrical Grid Layout */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 relative">
                    <img 
                        src="https://assets.vogue.com/photos/6092eac2f7220d18441d6bbd/master/w_1600%2Cc_limit/00_story.jpg" 
                        alt="Minimalist Shorts" 
                        className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute bottom-5 left-5 bg-white bg-opacity-90 p-4 rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-900">Minimal & Stylish</h2>
                        <p className="text-gray-600 text-sm">Designed for effortless aesthetics with a premium feel.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="p-6 border rounded-xl shadow-md bg-gray-50">
                        <h3 className="text-xl font-semibold text-gray-900">Soft, Lightweight Fabric</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Ultra-breathable material that keeps you cool and comfortable all day.
                        </p>
                    </div>
                    <div className="p-6 border rounded-xl shadow-md bg-gray-50 mt-6">
                        <h3 className="text-xl font-semibold text-gray-900">Smart Fit, Effortless Style</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            A tailored cut that complements every body type with a modern silhouette.
                        </p>
                    </div>
                </div>
            </div>

            {/* Full-Width Minimal Section */}
            <div className="mt-16 flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold text-gray-900">Versatility at Its Best</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        From streetwear to casual minimalism, our shorts transition effortlessly between styles.
                    </p>
                    <p className="text-lg text-gray-600 mt-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quas quos ab nesciunt totam minima autem explicabo voluptates. Numquam, blanditiis!
                    </p>
                </div>
                <img 
                    src="https://m.economictimes.com/thumb/msid-58410050,width-1200,height-900,resizemode-4,imgsize-175512/when-its-hot-keep-it-short-men-heres-how-to-keep-it-stylish-this-summer.jpg" 
                    alt="Versatile Shorts" 
                    className="w-full md:w-1/2 rounded-xl shadow-lg"
                />
            </div>

            {/* Moodboard Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                <img 
                    src="https://down-ph.img.susercontent.com/file/ph-11134207-7r98s-lloio5lwjto1f5" 
                    alt="Shorts in motion" 
                    className="w-full h-48 object-cover rounded-xl shadow-md"
                />
                <img 
                    src="https://img4.dhresource.com/webp/m/260x260/f3/albu/km/m/11/ba00a099-d52b-438c-ad84-1ded55beb4d8.jpg" 
                    alt="Minimalist fit" 
                    className="w-full h-48 object-cover rounded-xl shadow-md"
                />
                <img 
                    src="https://triprindia.com/cdn/shop/files/xl-tbgshort-s29-tripr-original-imagz6ugb3yaz8be_1024x.jpg?v=1714392946" 
                    alt="Casual style" 
                    className="w-full h-48 object-cover rounded-xl shadow-md"
                />
                <img 
                    src="https://m.media-amazon.com/images/I/71CEUJtx0GL._AC_UY350_.jpg" 
                    alt="Athleisure fit" 
                    className="w-full h-48 object-cover rounded-xl shadow-md"
                />
            </div>

            {/* Call to Action */}
            <div className="text-center py-16 mt-16 bg-black text-white rounded-xl">
                <h2 className="text-4xl font-bold">Elevate Your Wardrobe</h2>
                <p className="text-lg mt-4 max-w-lg mx-auto">Experience the perfect balance of style and function.</p>
                <button className="mt-6 bg-white text-black py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default Shorts;
