import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ContactUs() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    // Reset form values
    setFormData({ name: '', email: '', phone: '', message: '' });

    // Hide popup after 4 seconds
    setTimeout(() => setShowSuccess(false), 4000);
  };
  return (
    <>
      <Header />
      <section className="bg-primary text-white text-center py-6">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="text-sm">Let us help you understand better.</p>
      </section>

      <section className="flex flex-col-reverse md:flex-row justify-center gap-8 px-6 py-10 max-w-7xl mx-auto">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <h3 className="text-center text-lg font-medium mb-4">Send Us A Message</h3>
          {showSuccess && (
            <div className="bg-green-500 text-white text-sm px-4 py-3 rounded mb-4 shadow-md transition-all duration-300">
              ✅ Heads up! Form submitted successfully.
            </div>
          )}

          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email id"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write a Message"
              className="w-full border border-gray-300 p-3 rounded h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white w-full py-3 font-semibold"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Support Info */}
        <div className="w-full my-auto md:w-1/2 space-y-6">
          {/* <img
            src="/assets/images/customer-support.png"
            alt="Customer Support"
            className="rounded w-full"
          /> */}
          <h3 className="text-xl font-semibold">
            The fastest growing Ed-Tech Platform.
          </h3>
          <p className="text-sm">
            Become a part of Stravix and experience the growth adventure.
            Make your biggest career building move. All the best.
          </p>
          <div>
            <p className="font-semibold">Registered Address:</p>
            <p className="text-sm">
              New-T-111, Sunday Market Road, Uttam Nagar, New Delhi, Delhi, India 110059
            </p>
          </div>
          <div>
            <p className="font-semibold">Communication Address:</p>
            <p className="text-sm">
              New-T-111, Sunday Market Road, Uttam Nagar, New Delhi, Delhi, India 110059
            </p>
          </div>
          <div className="space-y-3">
            <p className="border border-primary rounded-full py-2 px-4 text-primary flex items-center gap-2">
              📞 CALL US: +91 92116 50144
            </p>
            <p className="border border-primary rounded-full py-2 px-4 text-primary flex items-center gap-2">
              📧 EMAIL US: customerfirst@stravix.in
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ContactUs