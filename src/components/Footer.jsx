import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0b101b] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
         <a href="/">
          <img
            src="/images/logo/hcm-logo.png"
            alt="Human Maximizer Logo"
            className="h-16 mb-4 mx-auto sm:mx-0"
          />
          </a>
          <ul className="space-y-2 text-sm">
            <li><a href="/about">About</a></li>
            <li><a href="/">Customers</a></li>
            <li><a href="/payroll">Payroll Service Providers</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/pricing">Plan and Pricing</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/hr-software">HR Software</a></li>
            <li><a href="/payroll">Payroll Software</a></li>
            <li><a href="/leave">Leave Management</a></li>
            <li><a href="/attendence">Attendance Management</a></li>
            <li><a href="/performance">Performance Management</a></li>
            <li><a href="/employee">Employee Data</a></li>
            <li><a href="/employee-engagement">Employee Engagement</a></li>
            <li><a href="/recruitment">Recruitment Software</a></li>
            <li><a href="/">Human Service Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">HR & Payroll Administration</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/Hrms">What is HRMs?</a></li>
            <li><a href="/payroll">What is Payroll?</a></li>
            <li><a href="/">What is Statutory Compliance?</a></li>
            <li><a href="/guidetoleave">Guide to Leave Management</a></li>
            <li><a href="/guidetoattendence">Guide to Attendance Management</a></li>
            <li><a href="/guidetoperfomence">Guide to Performance Management</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Human Maximizer Customers</h4>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="/">Human Maximizer Help</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/">Videos</a></li>
          </ul>
          <div className="space-y-3 flex justify-center sm:justify-start">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © 2025 | All Rights Reserved by <span className="text-white font-semibold">Human Maximizer</span>
      </div>
    </footer>
  );
};

export default Footer;
