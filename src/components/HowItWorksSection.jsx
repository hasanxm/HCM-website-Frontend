import React from 'react';

const HowItWorksSection = () => {
  return (
    <div className="relative w-full py-15 overflow-x-visible">
      
      {/* Curved Background Shape */}
      <div 
        className="absolute inset-0">

          <svg
    viewBox="0 0 500 150"
    className="w-full h-[500px] rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path d="M0,0 L0,100 Q250,200 500,100 L500,0 Z" fill="#000000" />
  </svg>

        </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-0">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-white text-sm font-medium tracking-[0.2em] mb-5">
            — PROCESS
          </div>
          <h2 className="text-white text-4xl md:text-5xl lg:text-4xl font-bold font-heading">
            How it works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-15 h-15 mx-auto mb-8 rounded-full flex items-center justify-center shadow-lg " style={{ backgroundColor: '#BEB1F5' }}>
              <span className="text-gray-900 text-2xl font-bold">1</span>
            </div>
            <h3 className="text-[#BEB1F5] text-2xl font-bold mb-4 font-heading">
              Register
            </h3>
            <p className="text-white font-heading text-base leading-relaxed">
              Register yourself as a<br />
              Payfast application user
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-15 h-15 mx-auto mb-8 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#BEB1F5' }}>
              <span className="text-gray-900 text-2xl font-bold">2</span>
            </div>
            <h3 className="text-[#BEB1F5] text-2xl font-bold mb-4 font-heading">
              A new employee
            </h3>
            <p className="text-white text-base leading-relaxed font-subheading">
              Use this profile to manage attendance,<br />
              performance, and more.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-15 h-15 mx-auto mb-8 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#BEB1F5' }}>
              <span className="text-gray-900 text-2xl font-bold">3</span>
            </div>
            <h3 className="text-[#BEB1F5] text-2xl font-bold mb-4 font-heading">
              Success
            </h3>
            <p className="text-white text-base leading-relaxed font-subheading">
              You can now access all HCM features<br />
              seamlessly anytime, anywhere.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
