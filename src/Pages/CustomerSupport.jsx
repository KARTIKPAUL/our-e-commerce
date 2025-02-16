import React from 'react';

const CustomerSupport = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto py-12 px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Customer Support</h1>
          <p className="text-lg text-gray-600 mt-4">
            We're here to help! Find answers to your questions or contact us directly.
          </p>
        </div>

        {/* Support Sections */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* FAQs */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <ul className="space-y-4">
              <li className="text-gray-700">
                <strong>Q:</strong> How do I track my order?<br />
                <span className="text-gray-600">
                  A: Visit the "Order Tracking" section in your account or use the tracking number provided in your email.
                </span>
              </li>
              <li className="text-gray-700">
                <strong>Q:</strong> What is your return policy?<br />
                <span className="text-gray-600">
                  A: Returns are accepted within 30 days of delivery. Please ensure the product is unused and in its original packaging.
                </span>
              </li>
              <li className="text-gray-700">
                <strong>Q:</strong> How do I contact customer service?<br />
                <span className="text-gray-600">
                  A: You can reach out through the contact form or live chat below.
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-2 p-2 border rounded-lg"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-2 border rounded-lg"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full mt-2 p-2 border rounded-lg"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Live Chat */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Live Chat</h2>
            <p className="text-gray-600 mb-4">
              Chat with a support representative for immediate assistance.
            </p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
              Start Chat
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Need More Help?</h3>
          <p className="text-gray-600">
            If you have other questions or need further assistance, feel free to contact us. We're always here to help!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
