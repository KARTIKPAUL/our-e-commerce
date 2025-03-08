const Socks = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Hero Section */}
            <div className="text-center py-20 bg-gray-900 text-white rounded-xl">
                <h1 className="text-5xl font-extrabold">Premium Comfort Socks</h1>
                <p className="text-lg mt-4 max-w-2xl mx-auto">
                    Experience superior comfort, breathability, and durability with our premium-quality socks.
                </p>
            </div>

            {/* Feature Sections */}
            <div className="mt-16 space-y-24">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <img src="https://m.media-amazon.com/images/I/71ITzeH35BL._AC_UY350_.jpg" alt="Ultra Soft Fabric" className="max-w-xs rounded-xl" />
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold">Ultra-Soft Fabric</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Made with high-quality cotton blends for unmatched softness and all-day comfort.
                        </p>
                        <p className="text-lg text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia quia, repellat perspiciatis sunt eveniet ipsa ea repellendus nihil quod rem. Quidem necessitatibus nisi officia!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                    <img src="https://m.media-amazon.com/images/I/71sek0G0ehL.jpg" alt="Moisture-Wicking" className="max-w-xs rounded-xl border-2" />
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold">Moisture-Wicking Technology</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Designed to keep your feet dry and fresh throughout the day, no matter the activity.
                        </p>
                        <p className="text-lg text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia quia, repellat perspiciatis sunt eveniet ipsa ea repellendus nihil quod rem. Quidem necessitatibus nisi officia!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <img src="https://m.media-amazon.com/images/I/71-YrwdSJAL._AC_UY1100_.jpg" alt="Enhanced Durability" className="max-w-xs  rounded-xl" />
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold">Enhanced Durability</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Reinforced toe and heel sections ensure long-lasting wear and support for all-day use.
                        </p>
                        <p className="text-lg text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia quia, repellat perspiciatis sunt eveniet ipsa ea repellendus nihil quod rem. Quidem necessitatibus nisi officia!
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center py-20 mt-16 bg-gray-900 text-white rounded-xl">
                <h2 className="text-4xl font-bold">Step Up Your Comfort Game</h2>
                <p className="text-lg mt-4 max-w-2xl mx-auto">
                    Elevate your daily wear with the perfect pair of socks. Shop now.
                </p>
                <button className="mt-6 bg-white text-gray-900 py-3 px-6 rounded-lg text-lg font-semibold">Shop Now</button>
            </div>
        </div>
    );
};

export default Socks;
