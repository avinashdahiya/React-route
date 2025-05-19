import React from "react";

function About() {
  return (
    <section className="pt-24 px-4 pb-16 min-h-screen bg-gray-50">
      {/* Why Choose Us Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-blue-700">
          Why Choose <span className="text-gray-800">Radial Code</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {/* Card 1 */}
          <div className="p-5 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-600 hover:text-blue-800 transition">
              Expert Team
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Skilled developers and designers focused on quality and innovation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-600 hover:text-blue-800 transition">
              Customer Focused
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              We tailor solutions based on your business goals and user needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-600 hover:text-blue-800 transition">
              Cutting Edge Tech
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Utilizing modern tools and frameworks to keep you ahead of the curve.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">
          Ready to build your digital future?
        </h2>
        <p className="mb-6 text-gray-600 text-sm sm:text-base">
          Contact us today to discuss your project and discover how we can help your brand grow online.
        </p>
        <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition cursor-pointer">
          Get in Touch
        </button>
      </div>
    </section>
  );
}

export default About;
