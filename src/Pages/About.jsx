const About = () => {
    return (
      <div>
         <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header Image */}
      <div className="w-full h-96">
        <img
          src="https://blogpakistan.pk/wp-content/uploads/2021/02/charcoal.jpg"
          alt="Store Interior"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Our Story Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-light text-gray-800 text-center mb-8">
          OUR STORY
        </h2>
        <p className="text-gray-600 text-center leading-7 max-w-3xl mx-auto">
          At ECommerce, we believe fashion is more than just clothing—it’s a way to express who you are. Since our inception, we’ve worked tirelessly to curate
          timeless, stylish pieces for modern men and women. Our focus is on quality, sustainability, and creating styles that resonate with diverse
          personalities. Whether you're dressing for a casual day out or a formal event, UOMO has you covered.
        </p>
      </section>

      {/* The Company Section with Image */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/w/q/c/xl-isuel-105-varun-clothes-original-imagxat7ffqwtcy6.jpeg?q=90&crop=false"
            alt="Fashion Model"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Company</h3>
            <p className="text-gray-600 leading-7">
              ECommerce is more than a brand—it’s a community of individuals who believe in the power of style. We pride ourselves on providing premium fashion
              while maintaining an ethical and sustainable production process. Our team is dedicated to delivering exceptional quality and service to our
              customers worldwide. Every piece we create is designed with care, passion, and a commitment to lasting style.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-7">
              To empower individuals with fashion that reflects their unique style while ensuring sustainability and innovation at every step. Our mission is
              to make fashion more accessible, inclusive, and environmentally conscious, creating a meaningful impact globally.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-7">
              To redefine the global fashion landscape by offering a perfect blend of modern trends and timeless classics. We envision a future where fashion
              celebrates individuality, embraces diversity, and supports eco-friendly practices without compromising on quality or design.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Fast and Free Delivery</h4>
          <p className="text-gray-600">Free shipping on all orders over $149.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">24/7 Customer Support</h4>
          <p className="text-gray-600">Always here to help, day or night.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Money Back Guarantee</h4>
          <p className="text-gray-600">Easy returns within 30 days.</p>
        </div>
      </section>
    </div>
    </div>
    );
  };
  
  export default About;