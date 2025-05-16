import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <img
            src="https://www.radialcode.com/favicon.ico"
            alt="Radial Code Icon"
            className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
          />
          <img
            src="https://www.radialcode.com/assets/images/svg/logo.svg"
            alt="Radial Code Logo"
            className="h-6 sm:h-7 object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-6 md:space-x-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-base md:text-lg font-medium transition duration-200 ${
                  isActive
                    ? "text-blue-600 font-bold underline"
                    : "text-gray-700 hover:text-blue-600 hover:underline"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="sm:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-600 hover:text-blue-600 hover:border-blue-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              // Close icon
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.17 7.12 4.29A1 1 0 105.7 5.7L10.59 10.6 5.7 15.49a1 1 0 101.42 1.42L12 12.83l4.88 4.88a1 1 0 001.42-1.42L13.41 10.6l4.89-4.89z"
              />
            ) : (
              // Hamburger icon
              <path
                fillRule="evenodd"
                d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-4 py-3 space-y-2">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)} // close menu on click
                className={({ isActive }) =>
                  `block text-lg font-medium transition duration-200 px-3 py-2 rounded ${
                    isActive
                      ? "text-blue-600 font-bold underline"
                      : "text-gray-700 hover:text-blue-600 hover:underline"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
