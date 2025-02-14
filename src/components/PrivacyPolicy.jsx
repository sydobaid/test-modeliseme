const PrivacyPolicy = () => {
  return (
    <div className="bg-white py-[80px] px-[20px] md:px-[40px]">
      {/* Page Title */}
      <div className="max-w-[800px] mx-auto text-center">
        <h1 className="text-[32px] md:text-[48px] font-semibold text-[#333] mb-[24px]">
          Privacy Policy
        </h1>
        <p className="text-[16px] md:text-[18px] text-gray-600 font-light mb-[40px]">
          This Privacy Policy explains how we collect, use, and protect your
          personal data when you visit our website.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="max-w-[800px] mx-auto space-y-[40px]">
        {/* Section 1: Information We Collect */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            1. Information We Collect
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            We collect information from you when you visit our website, register
            for an account, subscribe to our newsletter, or fill out a form.
            This may include your name, email address, and browsing behavior on
            our website.
          </p>
        </div>

        {/* Section 2: How We Use Your Information */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            2. How We Use Your Information
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            We use your information to improve our website, respond to
            inquiries, and send you marketing communications (if you have opted
            in). We do not share your personal data with third parties without
            your consent, except as required by law.
          </p>
        </div>

        {/* Section 3: Cookies */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            3. Cookies
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            Our website uses cookies to enhance your experience. Cookies help us
            analyze website traffic and customize your browsing experience. You
            can disable cookies in your browser settings, but this may affect
            some features of our website.
          </p>
        </div>

        {/* Section 4: Data Security */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            4. Data Security
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            We take reasonable precautions to protect your personal data from
            unauthorized access, alteration, disclosure, or destruction.
            However, please be aware that no method of transmission over the
            internet is completely secure.
          </p>
        </div>

        {/* Section 5: Your Rights */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            5. Your Rights
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            You have the right to access, update, or delete your personal
            information at any time. You can also withdraw your consent to
            marketing communications. To exercise these rights, please contact
            us via the contact information provided on the website.
          </p>
        </div>

        {/* Section 6: Changes to This Privacy Policy */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            6. Changes to This Privacy Policy
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and the "Last Updated" date will be
            revised accordingly. We encourage you to review this policy
            periodically for any updates.
          </p>
        </div>

        {/* Section 7: Contact Information */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            7. Contact Information
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            If you have any questions regarding this Privacy Policy or wish to
            exercise your rights, please contact us at:
            <a href="mailto:privacy@yourwebsite.com" className="text-[#0B63E5]">
              &nbsp;privacy@modeliseme.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
