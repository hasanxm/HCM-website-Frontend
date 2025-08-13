import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [ 'FEATURES', 'ABOUT US', 'PRICING', 'FAQ', 'RESOURCES', 'CONTACT US' ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 lg:px-8 py-6 bg-transparent">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-25 h-25 overflow-hidden">
          <img src="/images/Logo.png" alt="HCM LOGO"/>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 font-subheading lg:space-x-10 mb-8 text-white text-md">
        {navItems.map((item) => (
          <a 
            key={item} 
            href="#" 
            className="hover:text-[#3190B7] transition-colors duration-200 cursor-pointer"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Authentication Buttons - Desktop */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-transparent border-2 mb-8 border-white text-white px-6 py-3 rounded-full 
                   hover:bg-white hover:text-black font-semibold 
                   transition-colors duration-200 text-base flex items-center space-x-2">

          Free Trial
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-blue-400 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col space-y-4 px-6 py-6">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-white hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;