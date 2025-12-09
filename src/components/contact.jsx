import '../App.css';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailId: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Form submitted! Check console for data.');
  };

  const SocialIcon = ({ Icon, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-2 transition duration-300 ease-in-out bg-white rounded-full hover:bg-gray-100">
      <Icon className="w-6 h-6 text-gray-800" />
    </a>
  );

  const PlaceholderIcon = ({ className }) => <div className={`w-6 h-6 rounded-full bg-gray-600 ${className}`} />;

  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 right-0 p-8">
        <div className="w-8 h-1 bg-black mb-1.5"></div>
        <div className="w-8 h-1 bg-black mb-1.5"></div>
        <div className="w-8 h-1 bg-black"></div>
      </div>

      <div className="max-w-6xl mx-auto md:p-12">
        <h1 className="mb-8 text-6xl md:text-8xl font-spartan font-bold text-gray-600">
          Contact
        </h1>

        <div className="flex flex-col gap-12 md:flex-row md:gap-16 font-jura">

          <div className="p-8 text-white bg-primary md:w-1/3">
            <h2 className="mb-4 text-2xl font-bold">Contact</h2>
            <p className="mb-8 text-xl">devakijoshi.2005@gmail.com</p>
            
            <h2 className="mb-4 text-2xl font-bold">Based in</h2>
            <p className="text-xl">Pune, Maharashtra</p>
            <p className="text-xl">India</p>

            <div className="flex mt-12 space-x-4">
              <SocialIcon Icon={PlaceholderIcon} href="https://linkedin.com/in/..." />
              <SocialIcon Icon={PlaceholderIcon} href="https://instagram.com/..." /> 
              <SocialIcon Icon={PlaceholderIcon} href="https://behance.net/..." /> 
              <SocialIcon Icon={PlaceholderIcon} href="https://github.com/..." /> 
            </div>
          </div>

          <div className="md:w-2/3 border-1 p-8">
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="form-group">
                <label htmlFor="fullName" className="block mb-2 text-lg">
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

              <button
                type="submit"
                className="px-8 py-3 text-lg border-1 text-white transition duration-300 ease-in-out bg-black hover:bg-white hover:text-black hover:border-1 font-inter"
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
