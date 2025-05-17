// src/pages/Services.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const services = [
  { id: "web-development", name: "Web Development", emoji: "💻" },
  { id: "mobile-apps", name: "Mobile Apps", emoji: "📱" },
  { id: "ui-ux-design", name: "UI/UX Design", emoji: "🎨" },
  { id: "social-media", name: "Social Media", emoji: "📢" },
];

function Services() {
  return (
    <section className="pt-24 px-4 pb-12 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-blue-700">
        Our Services
      </h2>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-sm rounded-xl p-5 flex flex-col justify-between items-center text-center border border-gray-100 hover:shadow-lg transition"
          >
            <div className="mb-3">
              <div className="text-3xl sm:text-4xl mb-2 text-blue-600">{service.emoji}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{service.name}</h3>
            </div>

            <Link
              to={service.id}
              className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Render Nested Route Here */}
      <Outlet />
    </section>
  );
}

export default Services;
