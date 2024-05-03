import React from "react";
import Image from "next/image";

const PartnerCompanies = () => {
  const companyLogos = [
    "/images/company-logo-1.png",
    "/images/company-logo-2.png",
    "/images/company-logo-3.png",
    "/images/company-logo-4.png",
    "/images/company-logo-5.png",
    // "/images/hounddog.png", // Replace with actual path to Samsung logo
    // "/images/hx.png", // Replace with actual path to T-Mobile logo
    // "/images/social27.png", // Replace with actual path to Kinteract logo
    // "/images/pgagi.png", // Replace with actual path to Thinkpricing logo
  ];

  return (
    <div className="pb-8 mt-60 text-base">
      <div className="flex flex-col items-center px-6">
        <h2 className="text-white pb-5 md:pb-0 whitespace-nowrap">
          Partnered with Innovators like
        </h2>
        <div className="flex justify-center items-center space-x-60  mt-4">
          {companyLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Company logo"
              width={64}
              height={64}
              className="h-16 object-contain "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCompanies;
