import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "./navbar";
import '../App.css';

const Contact = () => {
  
  const form = useRef();

  const [formData, setFormData] = useState({
    fullName: '',
    emailId: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 2. Updated Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_4uyk7hs', 
        'template_olxrypg', 
        form.current, 
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({ fullName: '', emailId: '', message: '' }); // Reset state
          setIsSending(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
          setIsSending(false);
        }
      );
  };

  const SocialIcon = ({ Icon, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-2 transition duration-300 ease-in-out bg-white rounded-full hover:bg-gray-100">
      <Icon className="w-6 h-6 text-gray-800" />
    </a>
  );

  const PlaceholderIcon = ({ className }) => <div className={`w-6 h-6 rounded-full bg-gray-600 ${className}`} />;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-6xl mx-auto md:p-12">
        <h1 className="mb-8 text-6xl md:text-8xl font-spartan font-bold text-gray-600">
          Contact
        </h1>

        <div className="flex flex-col gap-12 md:flex-row md:gap-16 font-jura">
          {/* Left Sidebar */}
          <div className="p-8 text-white bg-primary md:w-1/3">
            <h2 className="mb-4 text-2xl font-bold">Contact</h2>
            <p className="mb-8 text-xl">devakijoshi.2005@gmail.com</p>
            
            <h2 className="mb-4 text-2xl font-bold">Based in</h2>
            <p className="text-xl">Pune, Maharashtra</p>
            <p className="text-xl">India</p>

            <div className="flex mt-12 space-x-4">
              <SocialIcon Icon={PlaceholderIcon} href="#" />
              <SocialIcon Icon={PlaceholderIcon} href="#" /> 
              <SocialIcon Icon={PlaceholderIcon} href="#" /> 
              <SocialIcon Icon={PlaceholderIcon} href="#" /> 
            </div>
          </div>

          <div className="md:w-2/3 border-1 p-8">
            <form ref={form} onSubmit={handleSubmit} className="space-y-8">

              <div className="form-group">
                <label htmlFor="fullName" className="block mb-2 text-lg">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="from_name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border-b border-black outline-none focus:border-gray-700 py-1 font-tenor"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="emailId" className="block mb-2 text-lg font-tenor">Email ID:</label>
                <input
                  type="email"
                  id="emailId"
                  name="email"
                  value={formData.emailId}
                  onChange={handleChange}
                  className="w-full border-b border-black outline-none focus:border-gray-700 py-1 font-tenor"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="block mb-2 text-lg font-tenor">Message:</label>
                <textarea
                  id="message"
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-black outline-none focus:border-gray-700 h-32 font-tenor resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="px-8 py-3 text-lg border border-black text-white transition duration-300 ease-in-out bg-black hover:bg-white hover:text-black font-inter disabled:bg-gray-400"
              >
                {isSending ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;