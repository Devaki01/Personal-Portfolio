import '../App.css';
import React, { useState } from 'react';

const Contact = () => {
  // State for the form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    emailId: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // You would typically handle sending this data to a backend service here.

    // Optional: Reset form after submission
    // setFormData({
    //   fullName: '',
    //   emailId: '',
    //   message: '',
    // });
    alert('Form submitted! Check console for data.');
  };

  // Reusable component for the social icons
  const SocialIcon = ({ Icon, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-2 transition duration-300 ease-in-out bg-white rounded-full hover:bg-gray-100">
      <Icon className="w-6 h-6 text-gray-800" />
    </a>
  );

  // You'll need to install these icons, e.g., using: npm install react-icons
  // Using generic placeholder icons here, replace them with actual imports from 'react-icons' like:
  // import { FaLinkedin, FaInstagram, FaBehance, FaGithub } from 'react-icons/fa';
  const PlaceholderIcon = ({ className }) => <div className={`w-6 h-6 rounded-full bg-gray-600 ${className}`} />;

  return (
    <div className="min-h-screen bg-white">
      {/* Menu Icon (Top Right) */}
      <div className="absolute top-0 right-0 p-8">
        <div className="w-8 h-1 bg-black mb-1.5"></div>
        <div className="w-8 h-1 bg-black mb-1.5"></div>
        <div className="w-8 h-1 bg-black"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl p-8 mx-auto md:p-16">
        {/* Title */}
        <h1 className="mb-12 text-7xl md:text-9xl font-spartan font-extrabold text-black outline-text">
          Contact
        </h1>

        {/* Two-Column Layout */}
        <div className="flex flex-col gap-12 md:flex-row md:gap-20">
          
          {/* 1. Left Section: Contact Info */}
          <div className="p-8 text-black rounded-lg bg-primary md:w-1/3">
            <h2 className="mb-4 text-xl font-bold font-tenor">Contact</h2>
            <p className="mb-8 text-lg font-tenor">devakijoshi.2005@gmail.com</p>
            
            <h2 className="mb-4 text-xl font-bold font-tenor">Based in</h2>
            <p className="font-tenor">Pune, Maharashtra</p>
            <p className="font-tenor">India</p>

            {/* Social Icons */}
            <div className="flex mt-12 space-x-4">
              {/* Replace PlaceholderIcon with actual imported icons (FaLinkedin, FaInstagram, etc.) */}
              <SocialIcon Icon={PlaceholderIcon} href="https://linkedin.com/in/..." /> {/* LinkedIn */}
              <SocialIcon Icon={PlaceholderIcon} href="https://instagram.com/..." /> {/* Instagram */}
              <SocialIcon Icon={PlaceholderIcon} href="https://behance.net/..." /> {/* Behance */}
              <SocialIcon Icon={PlaceholderIcon} href="https://github.com/..." /> {/* GitHub */}
            </div>
          </div>

          {/* 2. Right Section: Contact Form */}
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Full Name Field */}
              <div className="form-group">
                <label htmlFor="fullName" className="block mb-2 text-lg font-tenor">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border-b border-black outline-none focus:border-gray-700 py-1 font-tenor"
                  required
                />
              </div>

              {/* Email ID Field */}
              <div className="form-group">
                <label htmlFor="emailId" className="block mb-2 text-lg font-tenor">
                  Email ID:
                </label>
                <input
                  type="email"
                  id="emailId"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                  className="w-full border-b border-black outline-none focus:border-gray-700 py-1 font-tenor"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="block mb-2 text-lg font-tenor">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-black outline-none focus:border-gray-700 h-32 font-tenor resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-8 py-3 text-lg font-bold text-white transition duration-300 ease-in-out bg-black hover:bg-gray-800 font-tenor"
              >
                Contact us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
