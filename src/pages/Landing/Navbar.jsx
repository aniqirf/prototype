import React from "react";
import logo from "../../assets/tbsb.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white py-4 px-6 flex justify-between items-center 
    bg-transparent backdrop-blur-md bg-black bg-opacity-30 transition-all duration-300 ease-in-out font-poppins">
      <img src={logo} alt="Webevo Solution Logo" className="h-10 w-auto" />
      <ul className="flex gap-4 text-lg">
        <li><a href="#" className="nav-link hover:text-gray-400">Home</a></li>
        <li><a href="#" className="nav-link hover:text-gray-400">About</a></li>
        <li><a href="#" className="nav-link hover:text-gray-400">Services</a></li>
        <li><a href="#" className="nav-link hover:text-gray-400">Contact</a></li>
      </ul>
      <NavLink to="/login">
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
            stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15 12H3m0 0l4-4m-4 4l4 4m10-8v8m0 0a4 4 0 004-4 4 4 0 00-4-4z" />
          </svg>
          Login
        </button>
      </NavLink>
    </nav>
  );
};

export default Navbar;