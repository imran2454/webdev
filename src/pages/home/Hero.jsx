// src/components/Hero.js
import React from 'react';

const Hero = () => {
  // Replace with your WhatsApp number including country code (e.g., "919876543210" for India)
  const whatsappNumber = "91 9026579399"; // Apni WhatsApp number yahan daalein

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out transform hover:scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573495627361-d9b87960b12d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SVR8ZW58MHx8MHx8fDA%3D')",
          // Replace with your actual hero image URL
        }}
      >
        {/* Image Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>




      {/* Hero Content (Text) */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fadeInDown">
          Innovate. Create. Elevate Your Business.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 animate-fadeInUp delay-300">
          We transform your ideas into powerful digital experiences with cutting-edge web solutions.
        </p>
        <a
          href="#services" // Link to your services section or another relevant page
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg transform hover:scale-105 animate-zoomIn delay-500"
        >
          Discover Our Expertise
        </a>
      </div>

      {/* Fixed WhatsApp Icon */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 animate-bounceOnce cursor-pointer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2C7.39 2 3.65 5.74 3.65 10.39C3.65 11.97 4.14 13.43 5.01 14.67L4.08 18.06L7.54 17.15C8.75 17.86 10.31 18.25 12.04 18.25C16.69 18.25 20.43 14.51 20.43 9.86C20.43 5.21 16.69 1.47 12.04 1.47V2ZM17.14 14.09C17.06 14.23 16.92 14.43 16.71 14.59C16.5 14.75 16.27 14.86 16.03 14.9C15.79 14.94 15.54 14.94 15.3 14.86C14.83 14.69 14.19 14.07 13.12 13.18C12.04 12.28 11.2 11.75 10.93 11.66C10.66 11.56 10.42 11.53 10.18 11.53C9.94 11.53 9.7 11.56 9.46 11.69C9.22 11.81 9.01 12.02 8.8 12.23C8.59 12.44 8.42 12.65 8.24 12.79C8.07 12.93 7.89 13.04 7.67 13.04C7.45 13.04 7.23 12.98 6.94 12.89C6.65 12.8 6.36 12.67 6.09 12.38C5.81 12.09 5.59 11.77 5.43 11.45C5.27 11.13 5.16 10.82 5.16 10.49C5.16 10.16 5.24 9.87 5.4 9.61C5.56 9.35 5.75 9.13 5.96 8.95C6.17 8.77 6.36 8.65 6.51 8.5C6.67 8.35 6.78 8.21 6.78 7.94C6.78 7.67 6.64 7.22 6.55 7.04C6.46 6.86 6.13 6.09 6.05 5.92C5.97 5.75 5.9 5.59 6.03 5.35C6.16 5.11 6.33 4.93 6.57 4.79C6.78 4.67 7.01 4.54 7.22 4.43C7.43 4.31 7.64 4.23 7.86 4.23C8.08 4.23 8.32 4.29 8.56 4.38C8.8 4.47 9.03 4.59 9.25 4.75C9.47 4.91 9.68 5.12 9.89 5.35C10.1 5.58 10.27 5.79 10.4 5.95C10.53 6.11 10.66 6.27 10.79 6.42C10.92 6.57 11.04 6.74 11.12 6.81C11.28 6.97 11.41 7.11 11.57 7.24C11.73 7.37 11.85 7.45 11.95 7.51C12.05 7.57 12.16 7.62 12.28 7.66C12.4 7.7 12.55 7.71 12.68 7.71C12.82 7.71 12.98 7.69 13.14 7.62C13.3 7.55 13.43 7.46 13.59 7.39C13.75 7.32 13.9 7.24 14.07 7.24C14.24 7.24 14.42 7.28 14.61 7.37C14.8 7.46 14.99 7.57 15.18 7.7C15.37 7.83 15.54 7.97 15.7 8.1C15.86 8.23 16.03 8.35 16.19 8.44C16.35 8.53 16.51 8.65 16.67 8.78C16.83 8.91 16.97 9.05 17.1 9.2C17.23 9.35 17.33 9.53 17.33 9.77C17.33 10.01 17.14 10.26 16.92 10.49C16.7 10.72 16.48 10.97 16.27 11.23C16.06 11.49 15.88 11.75 15.73 12.01C15.58 12.27 15.46 12.48 15.46 12.72C15.46 12.96 15.53 13.2 15.68 13.42C15.83 13.64 16.01 13.82 16.22 13.96C16.43 14.1 16.63 14.19 16.83 14.21C17.03 14.23 17.14 14.16 17.14 14.09Z" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;