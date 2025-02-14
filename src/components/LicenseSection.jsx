const LicensePage = () => {
  return (
    <div className="bg-white py-[80px] px-[20px] md:px-[40px]">
      {/* Page Title */}
      <div className="max-w-[800px] mx-auto text-center">
        <h1 className="text-[32px] md:text-[48px] font-semibold text-[#333] mb-[24px]">
          License Information
        </h1>
        <p className="text-[16px] md:text-[18px] text-gray-600 font-light mb-[40px]">
          Please read the terms and conditions regarding the use of content and
          software on this website.
        </p>
      </div>

      {/* License Sections */}
      <div className="max-w-[800px] mx-auto space-y-[40px]">
        {/* Section 1: License Terms */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            1. License Terms
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            By accessing or using this website, you agree to abide by the terms
            and conditions outlined in the applicable licenses. Please ensure
            you understand and comply with these terms before using any of the
            provided content or services.
          </p>
        </div>

        {/* Section 2: Copyright */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            2. Copyright
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            All content and software on this website are protected by copyright
            law. Unauthorized reproduction, distribution, or use of any
            materials on this site is prohibited. Please respect intellectual
            property rights.
          </p>
        </div>

        {/* Section 3: Third-Party Licenses */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            3. Third-Party Licenses
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            This website may contain third-party software or assets that are
            subject to separate licenses. You are responsible for reviewing and
            complying with the terms of these third-party licenses before using
            such materials.
          </p>
        </div>

        {/* Section 4: Limitation of Liability */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            4. Limitation of Liability
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            We are not responsible for any direct, indirect, or consequential
            damages that may arise from the use of this website. By using this
            website, you accept all risks associated with its use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LicensePage;
