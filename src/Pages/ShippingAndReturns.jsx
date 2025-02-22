import React from "react";

const ShippingAndReturns = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-12 py-10 text-gray-800">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Shipping & Returns Policy</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn about our shipping options, timelines, and return policies at ECommerce.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto text-lg leading-relaxed">
        <ol className="list-decimal space-y-6 pl-6">
          <li>
            <strong>Processing Time:</strong> 
            <ul className="list-disc pl-6 mt-2">
              <li>Orders are processed within 1–3 business days (excluding weekends and public holidays) after payment confirmation.</li>
              <li>Orders placed after 2:00 PM [Your Time Zone] will be processed the next business day.</li>
              <li>Delays may occur due to high order volume, inventory checks, or payment verification.</li>
            </ul>
          </li>

          <li>
            <strong>Shipping Options & Costs:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Standard Shipping: 3–7 business days (cost: [insert rate] or free for orders over [amount]).</li>
              <li>Expedited Shipping: 1–3 business days (cost: [insert rate]).</li>
              <li>International Shipping: Available to [list countries]. Delivery times vary (7–21 business days).</li>
              <li>Shipping costs are calculated at checkout based on weight, destination, and service selected.</li>
            </ul>
          </li>

          <li>
            <strong>Delivery Timelines:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Domestic deliveries are typically completed within the estimated timeframe but may face delays due to weather, holidays, or logistical issues.</li>
              <li>International orders may face customs delays. Duties/taxes are the customer’s responsibility.</li>
            </ul>
          </li>

          <li>
            <strong>Tracking Information:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>A tracking number will be emailed once your order ships. Use this to monitor your package via the carrier’s website.</li>
              <li>Contact us at support@ecommerce.com if tracking shows "Delivered" but you haven’t received your item.</li>
            </ul>
          </li>

          <li>
            <strong>Undeliverable Packages:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Packages returned due to incorrect addresses or failed delivery attempts will be refunded minus shipping costs.</li>
              <li>Ensure your shipping details are accurate at checkout.</li>
            </ul>
          </li>

          <li>
            <strong>International Shipping:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Customers are responsible for customs fees, import taxes, or VAT. These are not included in the product or shipping cost.</li>
              <li>ECommerce is not liable for packages held or confiscated by customs.</li>
            </ul>
          </li>

          <li>
            <strong>Return Policy:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Items must be returned within 30 days of delivery, unused, in original packaging, and with all tags/accessories intact.</li>
              <li>Proof of purchase (order number/receipt) is required.</li>
              <li>Refunds are issued to the original payment method within 5–10 business days after inspection.</li>
            </ul>
          </li>

          <li>
            <strong>Non-Refundable Items:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Perishable goods (e.g., food, flowers).</li>
              <li>Personalized/custom-made products.</li>
              <li>Digital downloads (if accessed) and gift cards.</li>
            </ul>
          </li>

          <li>
            <strong>Damaged or Defective Items:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Contact us within 7 days of delivery with photos/video evidence for replacements or refunds.</li>
              <li>We’ll cover return shipping costs for damaged or defective items.</li>
            </ul>
          </li>

          <li>
            <strong>Contact Us:</strong> For shipping or return inquiries, reach out to us at:
            <ul className="list-disc pl-6 mt-2">
              <li>Email: support@ecommerce.com</li>
              <li>Phone: +1-800-123-4567</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ShippingAndReturns;
