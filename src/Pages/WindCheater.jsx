const WindCheater = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Hero Section */}
            <div className="text-center py-20 bg-gray-900 text-white rounded-xl">
                <h1 className="text-5xl font-extrabold">The Ultimate WindCheater</h1>
                <p className="text-lg mt-4 max-w-2xl mx-auto">
                    Experience unmatched protection and style with our cutting-edge WindCheater.
                </p>
            </div>
            
            {/* Feature Sections */}
            <div className="mt-16 space-y-24">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f6e2b2dd-187d-4b44-8592-795dcbf2a1c8.__CR0,0,970,600_PT0_SX970_V1___.jpg" alt="Wind Resistant" className="w-full md:w-1/2 rounded-xl" />
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold">Unparalleled Wind Resistance</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Designed with high-tech materials to shield you from harsh winds, ensuring maximum comfort. 
                        </p>
                        <p className="text-lg text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, soluta? Eos distinctio possimus minima recusandae aperiam facilis delectus! Voluptatem officia, voluptatibus placeat pariatur sint dolor corporis veniam quas ipsam quam.</p>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                    <img src="https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,g_center,q_auto,f_auto,w_695/u1pwiomcw8t6m75g2ltf.png" alt="Lightweight Design" className="max-w-md md:w-1/2 rounded-xl" />
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold">Feather-Light Comfort</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Engineered to be ultra-lightweight while maintaining superior durability and breathability.
                        </p>
                        <p className="text-lg text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, soluta? Eos distinctio possimus minima recusandae aperiam facilis delectus! Voluptatem officia, voluptatibus placeat pariatur sint dolor corporis veniam quas ipsam quam.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <img src="https://m.media-amazon.com/images/I/81uyxipNBcL._AC_SY550_.jpg" alt="Water Repellent" className="max-w-md md:w-1/2 rounded-xl" />
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold">Water-Repellent Coating</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Stay dry and comfortable with our innovative water-repellent technology, perfect for unpredictable weather.
                        </p>
                        <p className="text-lg text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, soluta? Eos distinctio possimus minima recusandae aperiam facilis delectus! Voluptatem officia, voluptatibus placeat pariatur sint dolor corporis veniam quas ipsam quam.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center py-20 mt-16 bg-gray-900 text-white rounded-xl">
                <h2 className="text-4xl font-bold">Ready to Elevate Your Style?</h2>
                <p className="text-lg mt-4 max-w-2xl mx-auto">
                    Experience the best in comfort, protection, and fashion. Get yours today.
                </p>
                <button className="mt-6 bg-white text-gray-900 py-3 px-6 rounded-lg text-lg font-semibold">Shop Now</button>
            </div>
        </div>
    );
};

export default WindCheater;