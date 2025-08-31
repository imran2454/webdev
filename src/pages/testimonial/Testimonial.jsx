// src/components/TestimonialsSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Example Testimonial Data - Replace with your actual client testimonials
const testimonialsData = [
  {
    id: 1,
    quote: "Working with [Your Company Name] was a game-changer for our business. Their custom web development expertise brought our vision to life with a stunning, high-performing website. Highly recommend!",
    name: "Priya Sharma",
    title: "CEO, Tech Solutions Inc.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg" // Placeholder avatar
  },
  {
    id: 2,
    quote: "The responsive design and lightning-fast performance of our new site are incredible. Our customers love the seamless experience on any device. Excellent work!",
    name: "Rohan Kapoor",
    title: "Marketing Director, GrowFast Digital",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg" // Placeholder avatar
  },
  {
    id: 3,
    quote: "Their team integrated our payment gateway flawlessly. The security and efficiency have significantly improved our online sales process. Truly professional and reliable service.",
    name: "Anjali Desai",
    title: "Founder, Creative Boutique",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg" // Placeholder avatar
  },
  {
    id: 4,
    quote: "The support we received was outstanding. Even with complex issues, their 24/7 team was quick, knowledgeable, and incredibly helpful. A true partner in digital success.",
    name: "Vivek Singh",
    title: "Operations Manager, Global Logistics",
    avatar: "https://randomuser.me/api/portraits/men/72.jpg" // Placeholder avatar
  },
  // Add more testimonials if needed for better slider effect
];

const TestimonialsSlider = () => {
  const companyName = "[Your Company Name]"; // Apni company ka naam yahan daalein

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-700 to-blue-800 text-white" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Hear directly from the businesses we've helped succeed. Their words reflect our commitment to excellence and client satisfaction.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Show 1 slide at a time by default
          autoplay={{
            delay: 3000, // Change every 3 seconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          pagination={{ clickable: true }} // Dots at the bottom
          navigation={true} // Navigation arrows (prev/next)
          loop={true} // Loop through slides
          className="mySwiper !pb-10" // !pb-10 to make space for pagination dots
          breakpoints={{
            768: { // For screens >= 768px (md breakpoint)
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: { // For screens >= 1024px (lg breakpoint)
              slidesPerView: 2, // Still 2 for larger screens, adjust if you want more
              spaceBetween: 50,
            },
          }}
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className="bg-white text-gray-800 rounded-lg shadow-xl p-8 transform transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Quote Icon */}
                <svg className="w-10 h-10 text-indigo-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 16.5C10 18.43 8.43 20 6.5 20C4.57 20 3 18.43 3 16.5C3 14.28 6.5 10.75 6.5 4H10C10 8.41 6.5 12 6.5 16.5H10ZM17.5 16.5C17.5 18.43 15.93 20 14 20C12.07 20 10.5 18.43 10.5 16.5C10.5 14.28 14 10.75 14 4H17.5C17.5 8.41 14 12 14 16.5H17.5Z" />
                </svg>

                {/* Testimonial Quote */}
                <p className="text-lg italic mb-6 leading-relaxed min-h-[100px]"> {/* min-h for consistent card height */}
                  "{testimonial.quote.replace("[Your Company Name]", companyName)}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-indigo-500"
                    />
                  )}
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;