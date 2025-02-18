const Works = () => {
  return (
    <div className="p-16 bg-gradient-to-r from-blue-100 to-purple-200">
      <h1 className="text-6xl font-extrabold text-center text-gray-800 mb-12">
        How <span className="text-indigo-600">ECommerce</span> Works
      </h1>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-20 text-lg">
        Shopping with ECommerce is an experience designed to be seamless and enjoyable. Follow these steps to discover your perfect finds and have them delivered to your doorstep.
      </p>

      <div className="space-y-24">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center space-x-8 mb-16">
          <img
            src="https://i0.wp.com/fairhopers.com/wp-content/uploads/2022/02/2.16.22-CK-Mens-16.jpg?fit=1500%2C1000&ssl=1"
            alt="Step 1 - Browse Collections"
            className="rounded-xl shadow-lg object-cover w-full md:w-80 h-64 mb-8 md:mb-0 transition-transform transform hover:scale-105"
          />
          <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-96 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Step 1: Explore Collections</h2>
            <p className="text-gray-600 text-lg">
              Discover our curated collections that match your personal style. Whether you're into timeless classics or trendy looks, we have something for everyone.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center justify-center space-x-8 mb-16">
          <img
            src="https://seamlesspay.com/wp-content/uploads/2023/03/scroll-Illustrations3.png"
            alt="Step 2 - Easy Payment"
            className="rounded-xl shadow-lg object-cover w-full md:w-80 h-64 mb-8 md:mb-0 transition-transform transform hover:scale-105"
          />
          <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-96 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Step 2: Seamless Payment</h2>
            <p className="text-gray-600 text-lg">
              Securely checkout with flexible payment methods. Our platform ensures a fast and reliable transaction process.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center justify-center space-x-8 mb-16">
          <img
            src="https://img.freepik.com/premium-vector/fast-delivery-truck-icon-set-fast-shipping-design-website-mobile-apps-online-shopping_97458-1031.jpg"
            alt="Step 3 - Quick Delivery"
            className="rounded-xl shadow-lg object-cover w-full md:w-80 h-64 mb-8 md:mb-0 transition-transform transform hover:scale-105"
          />
          <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-96 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Step 3: Fast Delivery</h2>
            <p className="text-gray-600 text-lg">
              Enjoy swift delivery with our trusted services. Your order will arrive at your doorstep quickly and safely.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col md:flex-row items-center justify-center space-x-8 mb-16">
          <img
            src="https://media.istockphoto.com/id/1412621642/vector/customer-feedback-user-experience-or-client-satisfaction-opinion-for-product-and-services.jpg?s=612x612&w=0&k=20&c=5FJpkXmxYj3S6dhEn65cab_v876zSHmVT-0Ba-SH97k="
            alt="Step 4 - Happy Customers"
            className="rounded-xl shadow-lg object-cover w-full md:w-80 h-64 mb-8 md:mb-0 transition-transform transform hover:scale-105"
          />
          <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-96 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Step 4: Enjoy & Share</h2>
            <p className="text-gray-600 text-lg">
              Once your items arrive, share the joy with friends and family! Leave feedback to help others discover the best picks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
