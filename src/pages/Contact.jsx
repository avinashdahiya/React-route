 import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="px-4 py-16 flex justify-center items-center min-h-[70vh] bg-gray-50">
      <div className="w-full max-w-xl border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-700 hover:scale-105 transition">
          Contact Us
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* First & Last Name Fields */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block mb-1 text-sm font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder="First Name"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="lastName" className="block mb-1 text-sm font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Submit Button aligned left */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center text-green-600 text-lg font-semibold">
            ✅ Thank you, {formData.firstName}, for contacting us! We’ll get back to you soon.
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;


