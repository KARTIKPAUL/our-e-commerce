import React from "react";

const PrivacyPolicy = () => {
    return (
        <>
           <div className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-4">Effective Date: 01/01/2025</p>
      <p className="text-sm text-gray-500 mb-8">Last Updated: 01/01/2025</p>

      <div className="space-y-8">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Your privacy is critically important to us. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our website or use our
            services. By using our site, you consent to the data practices described in this
            statement.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            If you do not agree with this Privacy Policy, please do not use our website. We may
            update this policy from time to time, and your continued use of the website constitutes
            acceptance of those changes.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect the following types of information when you use our website or services:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>
              <strong>Personal Information:</strong> Includes your name, email address, phone
              number, shipping and billing address, and payment details when you create an account
              or make a purchase.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Includes device information, browser type,
              IP address, operating system, and browsing behavior (e.g., pages visited, time spent
              on site).
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar
              technologies to enhance user experience and analyze site performance.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            The information we collect is used to:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Process and fulfill your orders, including shipping and returns.</li>
            <li>Communicate with you regarding your orders, account, or inquiries.</li>
            <li>Improve our website, products, and services through analytics and feedback.</li>
            <li>Personalize your experience by tailoring content and recommendations.</li>
            <li>
              Ensure the security of our website and prevent fraud, unauthorized access, or
              breaches.
            </li>
            <li>Comply with legal obligations, including tax and accounting requirements.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We value your privacy and only share your information with third parties in the
            following situations:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>
              <strong>Service Providers:</strong> We share information with payment processors,
              shipping companies, and other service providers who help us operate the business.
            </li>
            <li>
              <strong>Legal Obligations:</strong> We may disclose your information to comply with
              laws, regulations, or court orders, or to protect our legal rights.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of
              assets, your information may be transferred to the new owners.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            We do not sell, rent, or trade your personal information to third parties for marketing
            purposes.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Your Privacy Choices</h2>
          <p className="text-gray-700 leading-relaxed">
            You have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>
              <strong>Access and Updates:</strong> You can review and update your personal
              information by logging into your account.
            </li>
            <li>
              <strong>Opt-Out of Marketing:</strong> You can opt-out of receiving marketing emails
              by clicking the "unsubscribe" link in any email.
            </li>
            <li>
              <strong>Data Deletion:</strong> You can request that we delete your personal
              information, subject to legal requirements.
            </li>
            <li>
              <strong>Cookies Management:</strong> Most browsers allow you to control or block
              cookies. Please note that disabling cookies may affect the functionality of our
              website.
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Security of Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use a variety of security measures to protect your personal information, including
            encryption, secure servers, and access controls. While we strive to safeguard your
            data, no method of transmission over the internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the
            privacy practices or content of these external sites. We encourage you to read their
            privacy policies before providing any personal information.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Children’s Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website is not directed at children under the age of 13, and we do not knowingly
            collect personal information from children. If we become aware that we have inadvertently
            collected information from a child, we will delete it promptly.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>Email: <a className="text-blue-600 hover:underline">abc@gmail.com</a></li>
            <li>Phone: +91 0000000000</li>
            <li>Address: Lorem ipsum dolor sit amet.</li>
          </ul>
        </section>
      </div>
    </div>
        </>
    );
};

export default PrivacyPolicy;
