import React, { useState } from "react";

function Services() {
  const [requestedService, setRequestedService] = useState("");

  const handlePrompt = () => {
    const service = prompt("Which service do you need help with?");
    if (service) {
      setRequestedService(service);
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-center text-blue-700 ">
        Our Services
      </h2>

      <p className="mb-6 sm:mb-8 text-gray-600 text-center text-base sm:text-lg max-w-3xl mx-auto">
        We offer a wide range of professional services tailored to your needs.
        Explore what we provide below or ask for a custom solution!
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 mb-8 text-gray-700">
        {[

          { name: "Web Development", emoji: "💻" },
          { name: "Mobile Apps", emoji: "📱" },
          { name: "UI/UX Design", emoji: "🎨" },
          { name: "Social Media", emoji: "📢" }, 


        ].map(({ emoji, name }) => (
          <li
            key={name}
            className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg hover:shadow-md cursor-pointer transition-transform duration-300"
          >
            <span className="text-blue-600 text-2xl">{emoji}</span>
            <span className="font-semibold text-base sm:text-lg hover:scale-110 hover:text-blue-800 transition-transform duration-300">
              {name}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <button
          onClick={handlePrompt}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
        >
          Ask for a Custom Service
        </button>
      </div>

      {requestedService && (
        <p className="mt-6 text-center text-green-600 font-semibold text-base sm:text-lg">
          You requested: <span className="italic">{requestedService}</span>
        </p>
      )}
    </section>
  );
}

export default Services;
