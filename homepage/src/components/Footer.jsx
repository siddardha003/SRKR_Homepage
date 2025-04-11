import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#056b9b] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* College Info - Expanded */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-[#056b9b] pb-2">About SRKREC</h3>
            <p className="text-sm mb-4">
              Established in 1980, SRKR Engineering College is a premier autonomous institution 
              affiliated to JNTU Kakinada. Spread over 36 acres with state-of-the-art infrastructure, 
              the college offers 14 UG and 17 PG programs across engineering, management, and computer applications.
            </p>
            <p className="text-sm mb-4">
              Recognized by UGC as "College with Potential for Excellence" and accredited by NBA, 
              SRKREC has consistently ranked among the top engineering colleges in Andhra Pradesh. 
              Our 10,000+ alumni network includes leaders in industry and academia worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#056b9b] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Other social icons... */}
            </div>
          </div>

          {/* Quick Links - Left Aligned */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-[#056b9b] pb-2">Quick Links</h3>
            <ul className="space-y-2 pl-0 list-none">
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">Home</a>
              </li>
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">About Us</a>
              </li>
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">Academics</a>
              </li>
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">Admissions</a>
              </li>
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">Placements</a>
              </li>
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">Research</a>
              </li>
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">Facilities</a>
              </li>
            </ul>
          </div>

          {/* Resources - Left Aligned */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-[#056b9b] pb-2">Resources</h3>
            <ul className="space-y-2 pl-0 list-none">
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">Downloads</a>
              </li>
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">Library</a>
              </li>
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">E-Learning</a>
              </li>
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">Student Portal</a>
              </li>
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">Faculty Directory</a>
              </li>
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">Academic Calendar</a>
              </li>
              <li className="pl-0">
                <a href="#" className="text-sm hover:text-[#056b9b] transition-colors block w-full">Anti-Ragging</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-[#056b9b] pb-2">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-start mb-3">
                <FaMapMarkerAlt className="mt-1 mr-2 text-[#056b9b]" />
                <p className="text-sm">SRKR Marg, China Amiram, Bhimavaram, Andhra Pradesh - 534204</p>
              </div>
              <div className="flex items-center mb-3">
                <FaPhone className="mr-2 text-[#056b9b]" />
                <p className="text-sm">+91 (8816) 223332, 223344</p>
              </div>
              <div className="flex items-center mb-3">
                <FaPhone className="mr-2 text-[#056b9b]" />
                <p className="text-sm">+91 9848823332 (Principal)</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-[#056b9b]" />
                <a href="mailto:principal@srkr.ac.in" className="text-sm hover:text-[#056b9b] transition-colors">principal@srkr.ac.in</a>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} SRKR Engineering College (Autonomous). All Rights Reserved. | 
            <a href="#" className="hover:text-[#056b9b] ml-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-[#056b9b] ml-2">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;