import React from "react";

const TermsAndCondition = () => {
   
    return (
        <>
        <div className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-4">Effective Date: 01/01/2025</p>
      <p className="text-sm text-gray-500 mb-8">Last Updated: 01/01/2025</p>

      <div className="space-y-8">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using our website, services, or purchasing products from us, you agree
            to abide by the Terms and Conditions outlined here. These terms govern your use of the
            website and any interactions with our services. If you do not agree with any portion of
            these terms, you must refrain from using our website immediately.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            You also acknowledge that these terms may be updated periodically. Continued use of the
            website following updates constitutes your acceptance of the revised Terms and
            Conditions.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are intended for users who are 18 years of age or older. If you are under
            the age of 18, you may only use our website with the consent and supervision of a parent
            or legal guardian. By using our website, you represent and warrant that:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>You have the legal capacity to enter into a binding agreement.</li>
            <li>
              All information provided during account registration or checkout is truthful,
              accurate, and up-to-date.
            </li>
            <li>
              You will not use the website for any illegal or unauthorized purposes in violation of
              any laws or regulations.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
          <p className="text-gray-700 leading-relaxed">
            To access some features of our website, you may be required to create an account. When
            registering, you agree to:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Provide accurate and complete information about yourself.</li>
            <li>
              Maintain the confidentiality of your login credentials and prevent unauthorized access
              to your account.
            </li>
            <li>
              Notify us immediately if you suspect any unauthorized use or security breach of your
              account.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            We reserve the right to suspend or terminate your account if any of the information you
            provide is found to be false or incomplete, or if you engage in any activities that
            violate these Terms and Conditions.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Products and Services</h2>
          <p className="text-gray-700 leading-relaxed">
            We strive to ensure that all product descriptions, images, pricing, and availability
            information are accurate and up-to-date. However, we cannot guarantee that product
            details on your screen (e.g., color, texture) will exactly match the physical product
            due to variations in display settings and manufacturing.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Products and services are subject to availability, and we reserve the right to modify,
            limit, or discontinue any product or service at any time without prior notice.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Pricing and Payment</h2>
          <p className="text-gray-700 leading-relaxed">
            All prices listed on our website are in [currency] and include applicable taxes unless
            stated otherwise. We reserve the right to change prices at any time without prior
            notice.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Accepted payment methods include:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Credit and debit cards (Visa, MasterCard, etc.)</li>
            <li>PayPal and other electronic payment methods</li>
            <li>Bank transfers (where applicable)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            All payments are processed securely, and we do not store any payment details on our
            servers. In the event of a payment failure or declined transaction, your order will not
            be processed, and you will need to retry with an alternate method.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Shipping and Delivery</h2>
          <p className="text-gray-700 leading-relaxed">
            We aim to ship all orders within [X] business days of receiving payment. Shipping costs
            and estimated delivery times will be displayed at checkout. Once an order is dispatched,
            you will receive tracking information to monitor its progress.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Please note the following:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>
              Delivery delays caused by carriers, weather, or other unforeseen circumstances are
              beyond our control.
            </li>
            <li>
              International customers are responsible for customs duties, taxes, or other charges
              imposed by their country’s regulations.
            </li>
            <li>
              If a package is returned to us due to an incorrect address, you will be charged for
              reshipping costs.
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Returns and Refunds</h2>
          <p className="text-gray-700 leading-relaxed">
            Our return policy allows you to return items within [X days] of delivery. Items must be
            unused, in their original packaging, and accompanied by proof of purchase. Refunds will
            be processed to your original payment method once the returned item is inspected and
            approved.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Please note that some items, such as sale items, custom orders, or perishable goods, are
            not eligible for return or refund. Full details can be found in our [Return Policy
            page].
          </p>
        </section>
      </div>
    </div>
        </>
    );
};

export default TermsAndCondition;
