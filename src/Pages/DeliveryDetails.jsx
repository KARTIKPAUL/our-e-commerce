import { FaTruck, FaPlane, FaHome, FaInfoCircle } from "react-icons/fa";

const DeliveryDetails = () => {
    return (
        <>
           <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Delivery Details</h1>

      {/* Delivery Methods Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Delivery Methods</h2>
        <p className="text-gray-600 mb-4">
          At <span className="font-medium text-gray-800">ECommerce</span>, we offer flexible delivery options to suit your needs. Choose from the following methods:
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li className="text-gray-700">
            <span className="font-medium">Standard Shipping:</span> Delivered within 5–7 business days.
          </li>
          <li className="text-gray-700">
            <span className="font-medium">Express Shipping:</span> Delivered within 2–3 business days.
          </li>
          <li className="text-gray-700">
            <span className="font-medium">Next-Day Delivery:</span> Available for orders placed before 2 PM.
          </li>
        </ul>
      </section>

      {/* Shipping Charges Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Shipping Charges</h2>
        <p className="text-gray-600 mb-4">
          Shipping fees may vary based on your location, order size, and delivery method. Below are the general charges:
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li className="text-gray-700">
            <span className="font-medium">Standard Shipping:</span> Free on orders over $50. For smaller orders, a $5.99 fee applies.
          </li>
          <li className="text-gray-700">
            <span className="font-medium">Express Shipping:</span> $9.99 flat rate.
          </li>
          <li className="text-gray-700">
            <span className="font-medium">Next-Day Delivery:</span> $19.99 flat rate.
          </li>
        </ul>
      </section>

      {/* Order Tracking Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Order Tracking</h2>
        <p className="text-gray-600 mb-4">
          Keep track of your order every step of the way! Once your order is shipped, you'll receive an email with your tracking details, including a tracking number and link to follow your delivery's progress. You can also track your order directly in your account on our website.
        </p>
        <p className="text-gray-600">
          If you experience any issues with tracking, please contact us at{" "}
          <a href="mailto:support@ecommerce.com" className="text-blue-600 underline">
            support@ecommerce.com
          </a>
          .
        </p>
      </section>

      {/* Estimated Delivery Time Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Estimated Delivery Time</h2>
        <p className="text-gray-600 mb-4">
          Delivery times depend on your location and chosen shipping method. Below is a general guide:
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li className="text-gray-700">Standard Shipping: 5–7 business days.</li>
          <li className="text-gray-700">Express Shipping: 2–3 business days.</li>
          <li className="text-gray-700">Next-Day Delivery: 1 business day.</li>
        </ul>
        <p className="text-gray-600 mt-4">
          Please note: Estimated times are subject to processing times and holidays. You’ll receive a more accurate delivery date during checkout.
        </p>
      </section>

      {/* Important Information Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Important Information</h2>
        <ul className="list-disc list-inside space-y-3">
          <li className="text-gray-700">Deliveries are made between 8 AM and 8 PM, Monday to Friday.</li>
          <li className="text-gray-700">A signature may be required for certain orders upon delivery.</li>
          <li className="text-gray-700">
            If no one is available to receive the package, it may be left in a safe location or redirected to a nearby pickup point.
          </li>
          <li className="text-gray-700">Orders cannot be shipped to PO Boxes or military addresses.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Need Help?</h2>
        <p className="text-gray-600">
          Our support team is here to assist you with any questions or concerns. Contact us via email at{" "}
          <a href="mailto:support@ecommerce.com" className="text-blue-600 underline">
            support@ecommerce.com
          </a>{" "}
          or call us at{" "}
          <a href="tel:+123456789" className="text-blue-600 underline">
            +1 234 567 89
          </a>
          .
        </p>
      </section>
    </div>
        </>
    );
};

export default DeliveryDetails;
