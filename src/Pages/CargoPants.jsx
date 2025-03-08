const CargoPants = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Hero Section */}
            <div className="text-center py-20 bg-gray-900 text-white rounded-xl">
                <h1 className="text-5xl font-extrabold">The Ultimate Cargo Pants</h1>
                <p className="text-lg mt-4 max-w-2xl mx-auto">
                    Experience unbeatable functionality and style with our premium cargo pants.
                </p>
            </div>

            {/* Feature Sections */}
            <div className="mt-16 space-y-24">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/2dcc311e-0780-4598-8a67-7d7eaf2556ec.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="Multiple Pockets" className="w-full md:w-1/2 rounded-xl border-2" />
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold">Versatile Storage</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Equipped with multiple spacious pockets, perfect for carrying all your essentials effortlessly.
                        </p>
                        <p className="text-lg text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ea officiis fugiat eum magnam vero?
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                    <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c7fb23e2-5a10-4d9f-a2d6-3a6451554005.__CR0,0,970,600_PT0_SX970_V1___.jpg" alt="Durable Fabric" className="max-w-md md:w-1/2 rounded-xl" />
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold">Durable & Comfortable</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Crafted from high-quality fabric to provide maximum durability while ensuring breathability and comfort.
                        </p>
                        <p className="text-lg text-gray-600 mt-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit unde esse assumenda expedita, ducimus qui.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <img src="https://cdn.shopify.com/s/files/1/0552/0067/7932/files/cargos_1_480x480.jpg?v=1719809950" alt="Stylish Fit" className="max-w-md md:w-1/2 rounded-xl" />
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold">Modern, Stylish Fit</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Designed for both utility and fashion, ensuring you look sharp wherever you go.
                        </p>
                        <p className="text-lg text-gray-600 mt-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda neque accusamus laboriosam excepturi animi illum.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center py-20 mt-16 bg-gray-900 text-white rounded-xl">
                <h2 className="text-4xl font-bold">Upgrade Your Wardrobe Today</h2>
                <p className="text-lg mt-4 max-w-2xl mx-auto">
                    Get the perfect combination of style and functionality. Shop now.
                </p>
                <button className="mt-6 bg-white text-gray-900 py-3 px-6 rounded-lg text-lg font-semibold">Shop Now</button>
            </div>
        </div>
    );
};

export default CargoPants;
