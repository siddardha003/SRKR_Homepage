import React, { useState } from 'react';
import { FaPhoneAlt, FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-transparent">
      <div className="w-full bg-[#056b9b] text-white text-sm p-3 flex justify-between items-center">
        {/* College Codes */}
        <div className="flex gap-4 items-center px-4 font-semibold">
          <span>EAPCET CODE : SRKR</span>
          <span>|</span>
          <span>ECET CODE : SRKR</span>
          <span>|</span>
          <span>M.TECH CODE : SRKR1</span>
          <span>|</span>
          <span>BBA CODE : 17086</span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <span className="text-red-300 text-sm">
              <FaPhoneAlt />
            </span>
            <span>Contact Us</span>
          </span>
        </div>
               {/* Social Media Links */}
        <div className="flex gap-4 items-center px-4">
          <a href="#" className="hover:text-blue-200 transition-colors">
            <span className="text-lg">
              <FaFacebook />
            </span>
          </a>
          <a href="#" className="hover:text-blue-200 transition-colors">
          <span className="text-lg">
              <FaLinkedin />
            </span>          </a>
          <a href="#" className="hover:text-blue-200 transition-colors">
          <span className="text-lg">
              <FaInstagram />
            </span>          </a>
          <a href="#" className="hover:text-blue-200 transition-colors">
          <span className="text-lg">
              <FaTwitter />
            </span>          </a>
          <a href="#" className="hover:text-blue-200 transition-colors">
          <span className="text-lg">
              <FaYoutube />
            </span>          </a>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src="https://srkrec.edu.in/assets/img/logo.png"
            alt="SRKR Logo"
            className="h-16"
          />
        </div>
        <div className="hidden md:flex space-x-4 font-semibold gap-4 mr-12">
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">Home</a>
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">About SRKR</a>
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">Academics</a>
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">Admissions</a>
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">Research</a>
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">Ameneties</a>
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">Placements</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">Home</a>
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">About SRKR</a>
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">Academics</a>
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">Admissions</a>
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">Research</a>
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">Ameneties</a>
          <a href="#" className="text-gray-900 hover:text-[#056b9b]">Placements</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;