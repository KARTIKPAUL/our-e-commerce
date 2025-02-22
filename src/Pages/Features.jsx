const Features = () => {
  return (
    <div className="p-12 bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
        Features That Set <span className="text-blue-600">ECommerce</span> Apart
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
        At ECommerce, we’ve created a shopping experience designed to delight,
        inspire, and simplify your fashion journey.
      </p>

      <div className="space-y-20">
        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src="https://media.istockphoto.com/id/626856214/photo/women-clothing-fall-winter-collection.jpg?s=612x612&w=0&k=20&c=I9gqM2C3sxR6e_NgelLInb_wt5R89IT6swiy0VFhhqw="
              alt="Curated Collections"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Curated Collections for Every Style
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Discover fashion that fits your unique vibe. From timeless
              classics to cutting-edge trends, ECommerce offers a carefully
              curated selection of clothing, accessories, and footwear for men,
              women, and kids.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              luctus urna sed urna ultricies ac tempor dui sagittis. In
              condimentum facilisis porta. Sed nec diam eu diam mattis viverra.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src="https://nmgprod.s3.amazonaws.com/media/files/a9/ef/a9ef250cdd04ff9462dee4f705d2a4b0/cover_image_1633629501.jpg.760x400_q85_crop_upscale.jpg"
              alt="Seamless Shopping"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Seamless Shopping Experience
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Enjoy a smooth and intuitive shopping process with our
              user-friendly interface. Whether you're browsing on your desktop,
              tablet, or mobile, ECommerce ensures a hassle-free experience from
              discovery to checkout.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque interdum ligula vel lectus sollicitudin, vel bibendum
              lectus aliquam. Suspendisse in urna id lacus eleifend vehicula.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src="https://mintyourstore.com/wp-content/uploads/2023/02/Personalized-Recommendations-banner-image.png"
              alt="Personalized Recommendations"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Personalized Recommendations
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Our AI-powered recommendation engine learns your preferences and
              suggests styles tailored to your taste. Finding your next favorite
              outfit has never been easier.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
              lectus nec leo suscipit bibendum. Cras ut risus in nulla mollis
              vehicula ut at justo. Mauris vehicula dui nec eros congue viverra.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src="https://jdschoolofdesign.b-cdn.net/wp-content/uploads/2024/02/Sustainable-Fashion-and-Its-Importance-In-Daily-Life-3.jpg"
              alt="Sustainable Fashion"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Sustainable Fashion Options
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              We believe in style with a conscience. Shop our eco-friendly and
              sustainable fashion lines, helping you look good while doing good
              for the planet.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse potenti. Ut ut ipsum sagittis, tincidunt felis ac,
              dictum erat. Phasellus nec ipsum sit amet nulla mollis faucibus.
            </p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/021/673/non_2x/exclusive-deal-banner-design-template-business-concept-flat-illustration-vector.jpg"
              alt="Exclusive Deals"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Exclusive Deals & Discounts
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Stay ahead of the game with members-only discounts, limited-time
              offers, and seasonal sales. Fashion-forward doesn’t have to break
              the bank!
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              laoreet, quam id suscipit elementum, augue libero convallis lorem,
              ut accumsan urna magna a arcu. Curabitur porttitor, lectus sed
              gravida lobortis, urna justo efficitur sem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
