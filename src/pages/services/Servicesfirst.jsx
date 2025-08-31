// src/components/Features.js
import React from 'react';
import { FaLaptopCode, FaRocket, FaMobileAlt, FaCreditCard, FaUsers, FaHeadset } from 'react-icons/fa'; // React Icons se icons import karein

const featuresData = [
  {
    icon: <FaLaptopCode className="text-4xl text-indigo-600 mb-4" />,
    title: "Custom Web Development",
    description: "Crafting bespoke web solutions tailored to your unique business needs and goals, ensuring a strong online presence."
  },
  {
    icon: <FaRocket className="text-4xl text-indigo-600 mb-4" />,
    title: "Blazing Fast Performance",
    description: "Optimized code and efficient architecture ensure your website loads in milliseconds, providing a seamless user experience."
  },
  {
    icon: <FaMobileAlt className="text-4xl text-indigo-600 mb-4" />,
    title: "Fully Responsive Design",
    description: "Your website will look stunning and function flawlessly on all devices – desktops, tablets, and mobile phones."
  },
  {
    icon: <FaCreditCard className="text-4xl text-indigo-600 mb-4" />,
    title: "Secure Payment Integration",
    description: "Seamlessly integrate secure payment gateways for smooth and reliable online transactions, boosting your sales."
  },
  {
    icon: <FaUsers className="text-4xl text-indigo-600 mb-4" />,
    title: "Engaging User Experience",
    description: "Designing intuitive and engaging user interfaces that captivate your audience and encourage interaction."
  },
  {
    icon: <FaHeadset className="text-4xl text-indigo-600 mb-4" />,
    title: "Dedicated 24/7 Support",
    description: "Receive round-the-clock technical support and maintenance to ensure your website is always running smoothly."
  },
];

const Features = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Core Services & Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of services designed to elevate your digital presence and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-8 text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;