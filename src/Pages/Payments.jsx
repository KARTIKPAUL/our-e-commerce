import React from "react";

const Payments = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-12 py-10 text-gray-800">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Payment Methods & Policy</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover the various secure payment methods we offer at ECommerce.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto text-lg leading-relaxed">
        <ol className="list-decimal space-y-6 pl-6">
          <li>
            <strong>Accepted Payment Methods:</strong> We accept the following:
            <ul className="list-disc pl-6 mt-2">
              <li>Credit/Debit Cards: Visa, MasterCard, American Express, Discover</li>
              <li>Digital Wallets: PayPal, Google Pay, Apple Pay</li>
              <li>Bank Transfers or Direct Deposits (for select orders)</li>
              <li>Installment Payment Services: Afterpay, Klarna, or Affirm (based on your region)</li>
            </ul>
          </li>

          <li>
            <strong>International Payments:</strong> We support multiple currencies for international customers and use trusted payment platforms to ensure secure transactions. Please note that currency conversion rates may vary and are determined by your bank or payment provider.
          </li>

          <li>
            <strong>Security Measures:</strong> At ECommerce, we prioritize your safety by:
            <ul className="list-disc pl-6 mt-2">
              <li>Using advanced encryption technology for transactions</li>
              <li>Complying with PCI DSS (Payment Card Industry Data Security Standards)</li>
              <li>Not storing your payment details on our servers</li>
            </ul>
            If a transaction is declined or flagged as fraudulent, we may hold or cancel the order for verification.
          </li>

          <li>
            <strong>Installment Payments:</strong> For eligible orders, we offer installment plans through partners like Afterpay, Klarna, or Affirm. These allow you to:
            <ul className="list-disc pl-6 mt-2">
              <li>Spread payments over several months</li>
              <li>Enjoy zero interest as long as payments are made on time</li>
            </ul>
            Payment schedules will be displayed at checkout.
          </li>

          <li>
            <strong>Refunds & Returns:</strong> Refunds for canceled or returned orders are:
            <ul className="list-disc pl-6 mt-2">
              <li>Processed to the original payment method within 5–10 business days</li>
              <li>Available as store credit upon request</li>
            </ul>
            If you experience any issues, our team is happy to assist at support@ecommerce.com.
          </li>

          <li>
            <strong>Payment Errors:</strong> If you encounter errors during checkout:
            <ul className="list-disc pl-6 mt-2">
              <li>Verify your card details or try another payment method</li>
              <li>Contact our support team for assistance</li>
            </ul>
          </li>

          <li>
            <strong>Order Payment Policy:</strong> Orders must be paid in full before processing and shipping. Unpaid orders may be automatically canceled after 24 hours.
          </li>

          <li>
            <strong>Contact Us:</strong> For payment-related inquiries, reach out to our support team at:
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

export default Payments;
