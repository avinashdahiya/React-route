import React from "react";

function About() {
  return (
    <section className="px-4 py-16 min-h-screen bg-gray-50">
      {/* Why Choose Us Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-700 ">
          Why Choose <span className="text-gray-800">Radial Code</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer">
            <h3 className="text-xl font-bold mb-2 text-blue-600 hover:text-blue-800 transition">
              Expert Team
            </h3>
            <p className="text-gray-700">
              Skilled developers and designers focused on quality and innovation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer">
            <h3 className="text-xl font-bold mb-2 text-blue-600 hover:text-blue-800 transition">
              Customer Focused
            </h3>
            <p className="text-gray-700">
              We tailor solutions based on your business goals and user needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer">
            <h3 className="text-xl font-bold mb-2 text-blue-600 hover:text-blue-800 transition">
              Cutting Edge Tech
            </h3>
            <p className="text-gray-700">
              Utilizing modern tools and frameworks to keep you ahead of the curve.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-blue-700 ">
          Ready to build your digital future?
        </h2>
        <p className="mb-6 text-gray-600">
          Contact us today to discuss your project and discover how we can help your brand grow online.
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition cursor-pointer hover:scale-100">
          Get in Touch
        </button>
      </div>
    </section>
  );
}

export default About;
