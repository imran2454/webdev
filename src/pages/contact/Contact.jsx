// src/components/Contact.js
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // React Icons for contact details

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // To show success/error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // In a real application, you would send this data to a backend server.
    // For now, we'll simulate a successful submission.
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form Data:', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form

    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have a question or need a custom solution? Feel free to reach out to us, and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl animate-fadeInLeft">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                  placeholder="Regarding a project"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
                disabled={status === 'Sending...'}
              >
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </button>
              {status && status !== 'Sending...' && (
                <p className={`mt-4 text-center text-sm ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="flex flex-col gap-8">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-lg shadow-xl animate-fadeInRight">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaPhone className="text-indigo-600 text-2xl mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold">Phone Number</p>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-indigo-600 transition duration-200">
                      +91 9026579399
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-indigo-600 text-2xl mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold">Email Address</p>
                    <a href="mailto:info@yourbusiness.com" className="text-gray-600 hover:text-indigo-600 transition duration-200">
                      websolution@info.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-indigo-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold">Our Office Location</p>
                    <p className="text-gray-600">
                       33 Makari Khoh Street, <br />
                  Infront Of B.L.J. College, Mirzapur, Uttar Pradesh 231001<br />
                  India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map (Placeholder) */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden animate-fadeInRight delay-200">
              <h3 className="text-2xl font-bold text-gray-900 px-8 pt-8 mb-4">Find Us on Map</h3>
              <div className="h-64 sm:h-80 md:h-96 w-full">
                {/* Replace this iframe with your actual Google Map Embed code */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14407.970176885376!2d82.53232824999999!3d25.1328639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398f828a2b5e28a5%3A0x62a1b24f5a34e8d3!2sMirzapur%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1718873099999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;