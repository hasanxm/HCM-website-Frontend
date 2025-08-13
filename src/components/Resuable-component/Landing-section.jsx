import React from "react";
import Navbar from "../Navbar";
import { FaUsers, FaArrowRight } from "react-icons/fa";
import HowItWorksSection from "../HowItWorksSection";

const HRHeroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#1D1D1F] overflow-hidden m-0 p-0">
      {/* Ellipse 1 - Purple Blurred Gradient (Responsive) */}
      <div className="absolute bottom-40 -right-30 w-64 h-64 lg:w-[30rem] lg:h-[30rem] rounded-full z-0 blur-[30px] md:blur-[80px] purple-gradient-ellipse"></div>
      <div className="absolute -top-30 -left-30 w-64 h-64 lg:w-[30rem] lg:h-[30rem] rounded-full z-0 blur-[30px] md:blur-[80px] purple-gradient-ellipse"></div>

      {/* Ellipse 873 - Blue Linear Gradient (Mobile positioned bottom-right) */}
      <div
        className="absolute bottom-0 right-0 sm:top-36 sm:right-16 md:top-44 md:right-32 lg:right-25
             w-72 h-72 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[39.56rem] lg:h-[39.56rem]
             rounded-full z-10 shadow-[0_2px_60px_15px_rgba(255,255,255,0.25)] 
             md:shadow-[0_4px_132.6px_31px_rgba(255,255,255,0.25)] 
             transform translate-x-1/4 translate-y-1/4 sm:translate-x-0 sm:translate-y-0
             flex items-center justify-center overflow-visible"
        style={{
          background:
            "linear-gradient(180deg, #3190B7 0%, rgba(18, 81, 128, 0) 100%)",
        }}
      >
        <img
          src="/images/home/hcm-home.png"
          alt="HCM Device Combination"
          className="w-full h-full object-contain scale-110 lg:scale-125"
        />
      </div>

      {/* Navbar */}
      <div className="relative z-50 m-0 p-0">
        <Navbar />
      </div>

      {/* Main Content Container */}
      <div
        className="relative z-20 flex flex-col items-start justify-start 
                      px-4 sm:px-6 md:px-8 lg:px-25 py-8 sm:py-12 md:py-16 lg:py-10 
                      w-full min-h-[calc(100vh-80px)]"
      >
        {/* Mobile & Desktop Layout */}
        <div className="w-full lg:flex lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="w-full lg:w-7/12 xl:w-1/2 text-white space-y-6 lg:space-y-2 lg:mb-0">
            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-tight text-left">
              MAKE HR EASY &<br />
              EMPOWER YOUR TEAM
            </h1>

            {/* Description */}
            <p className="font-subheading text-base sm:text-lg md:text-lg lg:text-xl text-gray-300 max-w-full sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-xl leading-relaxed text-left">
              Simplify every aspect of HR - from onboarding to payroll - with
              powerful, easy-to-use tools. Empower your team with a seamless
              experience that drives productivity and growth.
            </p>

            {/* CTA Section - Mobile Stacked Layout */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6 pt-8">
              {/* Book Demo Button with Arrow */}
              <div className="flex items-center">
                <button className="bg-transparent border-2 border-white text-white px-5 py-3 rounded-full hover:bg-[#3190B7] flex items-center space-x-2">
                  <span>Book a Demo </span>
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* User Avatars and Count */}
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-red-400"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-green-400"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-400"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-400"></div>
                </div>
                <span className="text-white font-semibold text-base">100+</span>
              </div>
            </div>

            {/* Stats Section - Mobile Layout */}
            <div className="flex items-center space-x-3 pt-4">
              <div className="flex items-center justify-center">
                <FaUsers className="w-18 h-18 text-blue-500" />
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-white">
                  1200+
                </div>
                <div className="text-m text-gray-400">Active Users</div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-80 transform -translate-x-50">
              <h1
                className="text-[8rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] xl:text-[12rem] font-bold uppercase tracking-wider text-transparent select-none pointer-events-none"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
                  textStroke: "2px rgba(255, 255, 255, 0.1)",
                }}
              >
                HCM
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-50 -mt-6 md:-mt-2 lg:-mt-40">
        <HowItWorksSection />
      </div>
    </div>
  );
};

export default HRHeroSection;
