const Works = () => {

    const steps = [
        {
          id: 1,
          title: "Browse Our Collection",
          description: "Explore a wide range of curated styles and find the perfect pieces for your wardrobe.",
          icon: "🛍️",
        },
        {
          id: 2,
          title: "Add to Cart",
          description: "Easily select your favorite items and add them to your cart with a single click.",
          icon: "🛒",
        },
        {
          id: 3,
          title: "Secure Checkout",
          description: "Complete your purchase with our quick and secure checkout process.",
          icon: "🔒",
        },
        {
          id: 4,
          title: "Fast Delivery",
          description: "Enjoy speedy delivery right to your doorstep, ensuring your new look arrives on time.",
          icon: "🚚",
        },
    ];    

    return(
        <>
        <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800">How It Works</h1>
        <p className="text-gray-600 mt-4">
          Shopping with us is simple and seamless. Follow these steps to get started.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-start bg-white shadow-md rounded-lg p-6 space-x-4 hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl">{step.icon}</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    );
};

export default Works;
