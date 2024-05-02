"use client";

import React, { useState } from "react";
import Calendlylink from "../buttons/callbutton";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [showIndustries, setShowIndustries] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showAIResources, setShowAIResources] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleIndustries = () => {
    setShowIndustries(!showIndustries);
    setShowAboutUs(false); // Close About Us section
    setShowSolutions(false); // Close Solutions section
    setShowAIResources(false); // Close AI Resources section
    setSelectedOption("Industries");
  };

  const toggleAboutUs = () => {
    if (!showAboutUs) {
      setShowAboutUs(true);
      setShowIndustries(false); // Close Industries section
      setShowSolutions(false); // Close Solutions section
      setShowAIResources(false); // Close AI Resources section
      setSelectedOption("About Us");
    }
  };

  const toggleSolutions = () => {
    setShowSolutions(!showSolutions);
    setShowIndustries(false); // Close Industries section
    setShowAboutUs(false); // Close About Us section
    setShowAIResources(false); // Close AI Resources section
    setSelectedOption("Solutions");
  };

  const toggleAIResources = () => {
    setShowAIResources(!showAIResources);
    setShowIndustries(false); // Close Industries section
    setShowAboutUs(false); // Close About Us section
    setShowSolutions(false); // Close Solutions section
    setSelectedOption("AI resources");
  };

  return (
    <div className="sticky top-0 z-50 bg-transparent backdrop-blur-md flex flex-col items-center justify-center align text-white">
      <div className="flex justify-center pt-4 pb-4 font-sans max-w-5xl border-b w-4/5 border-b-gray-700">
        <span className="">AI Calling Agent</span>
        <span className="px-2"> - </span>
        <div>
          <Link
            href="/aboutus"
            style={{ fontWeight: "bold" }}
            className="text-white"
          >
            Learn more
          </Link>
        </div>
      </div>

      <div className="flex space-between items-center max-w-5xl w-4/5 justify-between py-2">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <Image
              src="/images/Logo.png"
              alt="Company logo"
              width={55}
              height={50}
            />
            <div className="font-bold text-white text-xs">PG-AGI</div>
          </div>
        </div>
        {/* Tab section*/}
        <div className="flex gap-10 font-normal font-sans">
          <div>What we do</div>
          <div>What we think</div>
          <div>Who we are</div>
        </div>

        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-2xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white ">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
            Contact us
          </span>
        </button>
      </div>

      {/* AI Resources Section */}
      {showAIResources && (
        <div
          className="bg-white border-b-2 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24 py-6"
          onMouseLeave={() => setShowAIResources(false)}
        >
          <div
            className="text-gray-600 body-font mt-0 flex flex-wrap justify-center"
            style={{ width: "80%", height: "280px", overflow: "hidden" }}
          >
            <div
              className="py-6 px-6 flex items-start w-full md:w-1/3"
              style={{ position: "relative" }}
            >
              <div
                className="h-full flex-grow flex flex-col"
                style={{ width: "100%", height: "100%" }}
              >
                <div
                  className="hover:bg-[#F5F6FC]  mb-6 group"
                  style={{ width: "100%" }}
                >
                  <div className="flex items-center">
                    <h1
                      className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3"
                      style={{ marginRight: "10px" }}
                    >
                      {" "}
                      Blog
                    </h1>
                    <Image
                      src="/images/rightarrow.png"
                      alt="Arrow"
                      width={20}
                      height={20}
                      style={{ transition: "transform 0.1s" }}
                      className="group-hover:translate-x-1"
                    />
                  </div>
                  <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-5">
                    Articles and Stories
                  </p>
                </div>
              </div>
            </div>
            <div className="py-6 px-6 flex items-start hover:bg-[#F5F6FC]  mb-6 group w-full md:w-1/3"></div>
          </div>
        </div>
      )}

      {showSolutions && (
        <div
          className="bg-white border-b-2 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24 py-4"
          onMouseLeave={() => setShowSolutions(false)}
        >
          <div
            className="text-gray-600 body-font mt-0 flex flex-wrap justify-center"
            style={{ width: "80%", maxHeight: "515px", overflowY: "auto" }}
          >
            <div className="py-4 px-4 flex items-start w-full md:w-1/3 relative">
              <div className="h-full flex-grow">
                <div className="hover:bg-[#F5F6FC]  mb-6 group mb-6">
                  <div className="flex items-center">
                    <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-2 mr-2">
                      Create MVP
                    </h1>
                    <Image
                      src="/images/rightarrow.png"
                      alt="Arrow"
                      width={20}
                      height={20}
                      style={{ transition: "transform 0.1s" }}
                      className="group-hover:translate-x-1"
                    />
                  </div>
                  <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-4">
                    Create a standout AI-powered prototype that impresses
                    investors with seamless functionality and cutting-edge
                    technology..
                  </p>
                </div>
                <div className="hover:bg-[#F5F6FC]  mb-6 group">
                  <div className="flex items-center">
                    <h1 className="title-font text-md font-bold text-gray-600 hover:text-black mb-2 mr-2">
                      Improve Product
                    </h1>
                    <Image
                      src="/images/rightarrow.png"
                      alt="Arrow"
                      width={20}
                      height={20}
                      style={{ transition: "transform 0.1s" }}
                      className="group-hover:translate-x-1"
                    />
                  </div>
                  <p className="text-gray-600 hover:text-black text-sm leading-relaxed mb-4">
                    Enhance your product with AI integration for optimized
                    processes, improved user experience, and smart features, all
                    without adding complexity.
                  </p>
                </div>

                <div className="hover:bg-[#F5F6FC]   mb-6 group">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-2 mr-2">
                        AI Research
                      </h1>
                      <Image
                        src="/images/rightarrow.png"
                        alt="Arrow"
                        width={20}
                        height={20}
                        style={{ transition: "transform 0.1s" }}
                        className="group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                  <p className="text-gray-600 hover:text-black     text-sm leading-relaxed mb-4">
                    Gain deeper insights with AI-driven research, accurately
                    predicting market behaviors and user preferences through
                    advanced analytics.
                  </p>
                </div>
              </div>
              <div className="absolute h-full w-px bg-gray-200 top-0 right-0"></div>{" "}
              {/* Vertical Line */}
            </div>
            <div className="py-4 px-4 flex items-start w-full md:w-1/3 relative">
              <div className="h-full flex-grow flex flex-col">
                <div className="hover:bg-[#F5F6FC]  mb-6 group ">
                  <div className="flex items-center">
                    <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-2 mr-2">
                      AI Calling Agent Subscription:
                    </h1>
                    <Image
                      src="/images/rightarrow.png"
                      alt="Arrow"
                      width={20}
                      height={20}
                      style={{ transition: "transform 0.1s" }}
                      className="group-hover:translate-x-1"
                    />
                  </div>
                  <ul className="list-disc pl-0 text-gray-600 hover:text-black">
                    <li
                      className="flex items-center mb-2"
                      style={{ listStyle: "none" }}
                    >
                      <Image
                        src="/images/tick.png"
                        alt="Tick"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600 hover:text-black ">
                        Unlimited AI Calls:
                      </span>
                    </li>
                    <li
                      className="flex items-center mb-2"
                      style={{ listStyle: "none" }}
                    >
                      <Image
                        src="/images/tick.png"
                        alt="Tick"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600 hover:text-black ">
                        Humanized Interactions:
                      </span>
                    </li>
                    <li
                      className="flex items-center mb-2"
                      style={{ listStyle: "none" }}
                    >
                      <Image
                        src="/images/tick.png"
                        alt="Tick"
                        width={20}
                        height={20}
                        className="mr-2"
                      />

                      <span className="text-sm text-gray-600 hover:text-black ">
                        Seamless CRM Integration:
                      </span>
                    </li>
                    <li
                      className="flex items-center mb-2"
                      style={{ listStyle: "none" }}
                    >
                      <Image
                        src="/images/tick.png"
                        alt="Tick"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600 hover:text-black ">
                        Advanced Analytics & Insights with AI/ ML:
                      </span>
                    </li>
                  </ul>
                </div>
                <img
                  src="https://adamfard.com/static/ux-design-agency-4-f773052c59837895521f19104191f67b.jpg"
                  alt="Design Stream Subscription"
                  className="w-full h-auto mb-4"
                  style={{ maxHeight: "calc(100% - 100px)" }}
                />
              </div>
              <div className="absolute h-full w-px bg-gray-200 top-0 right-0"></div>{" "}
              {/* Vertical Line */}
            </div>
            <div className="py-4 px-4 flex items-start w-full md:w-1/3 relative">
              <div className="h-auto flex-grow">
                <div className="hover:bg-[#F5F6FC]   group mb-6">
                  <div className="flex items-center">
                    <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-2 mr-2">
                      AI Strategy & Optimization Review:
                    </h1>
                    <Image
                      src="/images/rightarrow.png"
                      alt="Arrow"
                      width={20}
                      height={20}
                      style={{ transition: "transform 0.1s" }}
                      className="group-hover:translate-x-1"
                    />
                  </div>
                  <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-4 text-md">
                    <span className="font-bold">
                      Comprehensive AI Assessment:
                    </span>{" "}
                    Obtain an extensive 60+ page analysis of your current AI
                    capabilities and future potential, identifying key areas for
                    immediate improvement and strategic growth for the
                    developers.
                  </p>
                </div>
                <img
                  src="https://adamfard.com/static/ux-review-report-b4e2fc39a551aedd6130fd9020550e6b.png"
                  alt="Solution 4 Image"
                  className="w-full h-auto mb-4"
                  style={{ maxHeight: "calc(100% - 100px)" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Industries Section */}
      {showIndustries && (
        <div
          className="bg-white border-b-2 hidden md:flex md:flex-wrap md:justify-evenly md:px-8 lg:px-12 xl:px-24"
          onMouseLeave={() => setShowIndustries(false)}
        >
          <section className="text-gray-600 body-font mt-0 grid grid-cols-3 gap-x-40 gap-y-0 justify-center">
            {[
              "Fintech",
              "Chemical",
              "SaaS",
              "Edtech",
              "Health",
              "Commerce",
              "Security",
              "Blockchain",
              "Gaming",
              "Agritech",
              "Proptech",
              "Insurtech",
              "Biotech",
              "Cleantech",
              "Mobility",
              "Foodtech",
              "Medtech",
              "Legaltech",
            ].map((industry, index) => (
              <div
                key={index}
                className="py-1 px-4 flex items-start hover:bg-[#F5F6FC] mb-6 group"
              >
                <div className="h-full flex-grow">
                  <div className="flex items-center">
                    <h1 className="title-font text-md font-bold text-gray-600 hover:text-black mb-3">
                      {industry}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}

      {/* About Us Section */}
      {showAboutUs && (
        <div
          className="bg-white border-b-2 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24"
          onMouseLeave={() => setShowAboutUs(false)}
        >
          <section className="text-gray-600 body-font mt-0">
            <div className="container px-5 py-12 mx-auto">
              <div className="flex flex-wrap items-start justify-center -mx-8 -my-8">
                <div
                  className="py-8 px-8 flex items-start justify-center"
                  style={{
                    marginLeft: "1rem",
                    padding: "2rem",
                    maxWidth: "400px",
                    borderRadius: "8px",
                  }}
                  onMouseEnter={() =>
                    toggleAboutUs("Our core principles and beliefs")
                  }
                >
                  <div className="h-full flex-grow">
                    <div className="flex hover:bg-[#F5F6FC] mb-6 group items-center">
                      <Link
                        href="/aboutus"
                        className="title-font text-md font-bold text-gray-600 hover:text-black mb-3"
                        style={{ marginRight: "10px" }}
                      >
                        Our core principles and beliefs
                      </Link>
                      <Image
                        src="/images/rightarrow.png"
                        alt="Arrow"
                        width={20}
                        height={20}
                        style={{ transition: "transform 0.1s" }}
                        className="group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
