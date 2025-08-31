// src/components/Pricing.js
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Icons for features

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "₹7800",
    imageUrl: "https://advertisingatoz.com/wp-content/uploads/2022/08/xxxplanBasic.pngMic.6kXtttkuSu.webpMic.xk9DWYMhH4.webp.pagespeed.ic_.aEvs7QQt4Y.jpg", // Placeholder for Basic
    features: [
      "1 Free Domain Name",
      "5 Page (Dynamic Website)",
      "Business Email ID (Webmail)",
      "Unlimited Images & Videos",
      "Unlimited Bandwidth / Space",
      "100% Responsive Website",
      "Live Chat Integration",
      "Payment Gateway Integration",
      "Social Media Integration",
    ],
    note: "Annual Renewal ₹3000",
    buttonText: "Get a Quote Now",
    buttonLink: "#contact",
    isPopular: false,
  },
  {
    name: "Classic Plan",
    price: "₹8800",
    imageUrl: "https://img.freepik.com/premium-vector/gold-black-classic-isolated-round-stamp-sticker-sign-vector-illustration_723710-1344.jpg", // Placeholder for Classic
    features: [
      "1 Free Domain Name",
      "UL (15) Pages* (Dynamic Website)",
      "Business Email ID (Webmail)",
      "Unlimited Images & Videos",
      "Unlimited Bandwidth / Space",
      "100% Responsive Website",
      "Live Chat Integration",
      "Payment Gateway Integration",
      "Social Media Integration",
      "WhatsApp Integration",
      "SSL Certificate",
    ],
    note: "24/7 Support (SLA: 24 Hours)\nAnnual Renewal ₹4000",
    buttonText: "Get a Quote Now",
    buttonLink: "#contact",
    isPopular: true, // Mark this as popular/recommended
  },
  {
    name: "Premium Plan",
    price: "₹14300",
    imageUrl: "https://img.freepik.com/premium-vector/gold-premium-quality-badge-with-red-band-luxury-seal-emblem-golden-gradient-color_691616-295.jpg?semt=ais_hybrid&w=740", // Placeholder for Premium
    features: [
      "1 Free Domain Name",
      "UL (20) Pages* (Dynamic Website)",
      "Unlimited Email ID (Webmail/ Outlook)",
      "Android Application*",
      "Unlimited Images & Videos",
      "Unlimited Bandwidth / Space",
      "100% Responsive Website",
      "Live Chat Integration",
      "Payment Gateway Integration",
      "Social Media Integration",
      "WhatsApp Integration",
      "SSL Certificate",
      "cPanel® Access",
    ],
    note: "24/7 Support (SLA: 12 Hours)\nAnnual Renewal ₹5000",
    buttonText: "Get a Quote Now",
    buttonLink: "#contact",
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-100" id="pricing">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Affordable Pricing Plans
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose the perfect plan that fits your business needs. All our plans are designed to provide maximum value and exceptional service.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between
                transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl
                ${plan.isPopular ? 'border-4 border-indigo-600 relative' : 'border-2 border-gray-200'}
                animate-fadeInUp
              `}
              style={{ animationDelay: `${index * 0.15}s` }} // Staggered animation
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-8">
                {/* Image for the plan */}
                {plan.imageUrl && (
                  <div className="mb-4 ">
                    <img
                      src={plan.imageUrl}
                      alt={`${plan.name} Icon`}
                      className="w-30 h-30 mx-auto rounded-full object-cover border-white "
                    />
                  </div>
                )}
                
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-5xl font-extrabold text-indigo-700 mb-4">
                  {plan.price}
                </p>
              </div>

              {/* Features List */}
              <ul className="mb-8 space-y-3 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <FaCheckCircle className="text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Notes and Button */}
              <div className="text-center">
                {plan.note && (
                  <p className="text-sm text-gray-500 mb-4 whitespace-pre-line">
                    {plan.note}
                  </p>
                )}
                <a
                  href={plan.buttonLink}
                  className={`
                    inline-block w-full py-3 rounded-lg text-lg font-semibold
                    transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md
                    ${plan.isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                  `}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note about GST or other disclaimers */}
        <div className="text-center mt-12 text-sm text-gray-500 animate-fadeInUp">
          <p>Note: GST @ 18% Applicable on All Purchase.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;