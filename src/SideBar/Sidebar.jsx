import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaEnvelope,
  FaCalendarAlt,
  FaFileMedical,
  FaFileInvoice,
  FaCog,
  FaSignInAlt,
  FaBox, // Icon for Products
} from "react-icons/fa";
import Logo from '../assets/RANlogo.png'; // Replace with the correct logo path

const Sidebar = () => {
  return (
    <div className="fixed">
      <div className="w-64 h-screen  text-white flex flex-col justify-between border bg-blue-500 border-gray-300 transition-all duration-500 ease-in-out ">
        {/* Top Logo Section */}
        <div className="p-5">
          <div className="mb-8">
            {/* Replace with your company logo */}
            <a href="https://ran-website.vercel.app/">
              <img
                src={Logo}
                alt="Company Logo"
                className="w-32 mx-auto cursor-pointer"
              />
            </a>
          </div>

          <hr className="my-6 border-gray-300" />
          
          {/* Dashboard and Customer Section */}
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/dashboard"
                  className="group relative flex items-center p-2 rounded overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center text-white group-hover:text-white transition-colors duration-300">
                    <FaTachometerAlt className="text-lg" />
                    <span className="ml-2">Dashboard</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="group relative flex items-center p-2 rounded overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center text-white group-hover:text-white transition-colors duration-300">
                    <FaUsers className="text-lg" />
                    <span className="ml-2">Customers</span>
                  </span>
                </Link>
              </li>
              {/* Add Product Link */}
              <li>
                <Link
                  to="/products"
                  className="group relative flex items-center p-2 rounded overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center text-white group-hover:text-white transition-colors duration-300">
                    <FaBox className="text-lg" />
                    <span className="ml-2">Products</span>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          <hr className="my-6 border-gray-300" />
          
          {/* Appointments and Other Sections */}
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/appointments"
                  className="group relative flex items-center p-2 rounded overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center text-white group-hover:text-white transition-colors duration-300">
                    <FaCalendarAlt className="text-lg" />
                    <span className="ml-2">Appointments</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/health-records"
                  className="group relative flex items-center p-2 rounded overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center text-white group-hover:text-white transition-colors duration-300">
                    <FaFileMedical className="text-lg" />
                    <span className="ml-2">Health Records</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/billing"
                  className="group relative flex items-center p-2 rounded overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center text-white group-hover:text-white transition-colors duration-300">
                    <FaFileInvoice className="text-lg" />
                    <span className="ml-2">Billing</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="group relative flex items-center p-2 rounded overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center text-white group-hover:text-white transition-colors duration-300">
                    <FaCog className="text-lg" />
                    <span className="ml-2">Settings</span>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Login Section */}
        <div className="p-6">
          <hr className="mb-4 border-gray-300" />
          <Link
            to="/login"
            className="group relative flex items-center p-2 rounded overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center text-white group-hover:text-white transition-colors duration-300">
              <FaSignInAlt className="text-lg" />
              <span className="ml-2">Login</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
