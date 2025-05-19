import React from "react";

function Home() {
  return (
    <section className="pt-24 px-4 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-blue-700 leading-tight">
          Welcome to <span className="text-gray-800">Radial Code</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
          We craft modern, scalable, and powerful digital solutions for startups and enterprises.
        </p>

        {/* Key Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {/* Card 1 */}
          <div className="p-5 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-600 hover:text-blue-800 transition">
              💡 Innovation
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We use cutting-edge technology and creative thinking to build unique products that stand out.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-600 hover:text-blue-800 transition">
              🎨 UI/UX Design
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our design-first approach ensures your users have an intuitive, beautiful experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-600 hover:text-blue-800 transition">
              ⚙️ Performance
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Fast, secure, and scalable solutions tailored to your business needs using React and modern tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
