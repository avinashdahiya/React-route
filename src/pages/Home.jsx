import React from "react";
function Home() {
  return (
    <section className="px-4 pt-24 py-16 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-10 text-center text-blue-700 ">
          Welcome to <span className="text-gray-800">Radial Code</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          We craft modern, scalable, and powerful digital solutions for startups and enterprises.
        </p>

        {/* Key Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">💡 Innovation</h3>
            <p className="text-gray-700">
              We use cutting-edge technology and creative thinking to build unique products that stand out.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🎨 UI/UX Design</h3>
            <p className="text-gray-700">
              Our design-first approach ensures your users have an intuitive, beautiful experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">⚙️ Performance</h3>
            <p className="text-gray-700">
              Fast, secure, and scalable solutions tailored to your business needs using React and modern tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Home;
