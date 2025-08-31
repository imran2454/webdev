// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Social and contact icons

const Footer = () => {
  const companyName = "Web Soulution"; // Apni company ka naam yahan daalein
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8 mb-12">

          {/* Column 1: Company Info */}
          <div className="animate-fadeInUp">
            <h3 className="text-xl font-bold text-white mb-4">
              {/* Optional: Add your logo here */}
              {/* <img src="/path/to/your/logo.png" alt="Your Company Logo" className="h-10 mb-3" /> */}
              {companyName}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aapka Sapna, Hamari Coding! <br />
             Custom Websites Jo Banaye Aapke Business Ko Superhit! <br />
             Secure, Fast aur Mobile Friendly Design. <br />
             Har Budget Mein Perfect Solution — Aaj Hi Shuru Karein!
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition duration-300 text-sm">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition duration-300 text-sm">Services</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition duration-300 text-sm">Pricing</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition duration-300 text-sm">Portfolio</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300 text-sm">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition duration-300 text-sm">Contact</a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition duration-300 text-sm">Custom Web Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition duration-300 text-sm">Responsive Design</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition duration-300 text-sm">E-commerce Solutions</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition duration-300 text-sm">Digital Marketing</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition duration-300 text-sm">UI/UX Design</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition duration-300 text-sm">24/7 Support</a>
              </li>
              {/* Add more services if applicable */}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-indigo-400 text-lg mr-3 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                 33 Makari Khoh Street, <br />
                  Infront Of B.L.J. College, Mirzapur, Uttar Pradesh 231001<br />
                  India
                </p>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-indigo-400 text-lg mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition duration-300 text-sm">
                  +91 9026579399
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-indigo-400 text-lg mr-3 flex-shrink-0" />
                <a href="mailto:info@yourbusiness.com" className="text-gray-400 hover:text-white transition duration-300 text-sm">
                  websolution@info.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className='text-white'>&copy; {currentYear} {companyName}. All rights reserved.</p>
          <p className="mt-2">
           
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;