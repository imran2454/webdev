// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); // State to track active section

  // NavLink data - updated to use IDs for single-page scrolling
  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Testimonials', id: 'testimonial' },
    { name: 'Contact', id: 'contact' },
  ];

  // Function to handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      let currentActive = 'hero';
      // Adjust this offset if your sticky header covers content
      const offset = 100; // Pixels from the top to consider a section "active"

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the top of the section is within a certain range from the viewport top
          if (rect.top <= offset && rect.bottom >= offset) {
            currentActive = link.id;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial active section
    handleScroll();

    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]); // Re-run if navLinks change (though usually static)

  // Custom smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Close mobile menu on click
      setIsOpen(false);

      // Scroll to the section using smooth animation
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Aligns the top of the element with the top of the scroll area
      });

      // Optional: Manually update URL hash after scroll completes
      // window.history.pushState(null, '', `#${id}`); // Updates URL without adding to history
      // Or: window.location.hash = id; // Adds to history
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <div className="text-white text-2xl font-bold">
          <a href="#hero" onClick={() => scrollToSection('hero')} className="hover:text-gray-200 transition duration-300 ease-in-out">
            WebDev Solutions
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => scrollToSection(link.id)} // Use custom scroll function
              className={`
                text-white text-lg font-medium relative
                transition-all duration-300 ease-in-out
                ${
                  activeSection === link.id
                    ? 'text-yellow-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-300 after:scale-x-100'
                    : 'hover:text-gray-200 hover:after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-200 after:scale-x-0 origin-left'
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-3 p-4 bg-blue-700 rounded-lg shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => scrollToSection(link.id)} // Use custom scroll function
              className={`
                block text-white text-lg font-medium px-3 py-2 rounded-md
                transition-colors duration-300 ease-in-out
                ${activeSection === link.id ? 'bg-blue-800 text-yellow-300' : 'hover:bg-blue-600'}
              `}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;