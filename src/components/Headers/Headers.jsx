import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Reset isMenuOpen when the route changes

  return (
    <header className="shadow sticky z-50 bg-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-300">
            Pixel
          </Link>
        </div>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `font-medium transition duration-300 ${
                isActive ? "text-blue-600" : "text-gray-800 hover:text-gray-600"
              }`
            }>
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `font-medium transition duration-300 ${
                isActive ? "text-blue-600" : "text-gray-800 hover:text-gray-600"
              }`
            }>
            Services
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `font-medium transition duration-300 ${
                isActive ? "text-blue-600" : "text-gray-800 hover:text-gray-600"
              }`
            }>
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium transition duration-300 ${
                isActive ? "text-blue-600" : "text-gray-800 hover:text-gray-600"
              }`
            }>
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium transition duration-300 ${
                isActive ? "text-blue-600" : "text-gray-800 hover:text-gray-600"
              }`
            }>
            Contact
          </NavLink>
        </nav>

        {/* Call-to-Action Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/get-started"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col space-y-4 px-6 py-4">
              <NavLink
                to="/home"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-gray-600"
                  }`
                }>
                Home
              </NavLink>
              <NavLink
                to="/services"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-gray-600"
                  }`
                }>
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-gray-600"
                  }`
                }>
                Portfolio
              </NavLink>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-gray-600"
                  }`
                }>
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-gray-600"
                  }`
                }>
                Contact
              </NavLink>
              <Link
                to="/get-started"
                onClick={toggleMenu}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition duration-300">
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
