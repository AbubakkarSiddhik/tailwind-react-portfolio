import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaHome, 
  FaUserAlt, 
  FaCode, 
  FaCertificate, 
  FaEnvelope,
  FaTimes,
  FaBars 
} from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", name: "Home", icon: <FaHome className="mr-2" /> },
    { path: "/about", name: "About", icon: <FaUserAlt className="mr-2" /> },
    { path: "/projects", name: "Projects", icon: <FaCode className="mr-2" /> },
    { path: "/certifications", name: "Certifications", icon: <FaCertificate className="mr-2" /> },
    { path: "/contact", name: "Contact", icon: <FaEnvelope className="mr-2" /> }
  ];

  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold hover:text-gray-300 transition">
          <span className="text-2xl">S</span>iddhik
        </Link>

        <ul className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="flex items-center px-4 py-2 text-white rounded-lg hover:bg-gray-800 hover:text-gray-300 transition-all"
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
      
        <button 
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none text-2xl p-2 hover:bg-gray-800 rounded-lg transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
          {/*my old code */}
        {/* <button onClick={handleClick} className="text-white md:hidden focus:outline-none text-2xl">
          {isOpen ? "✖" : "☰"}
        </button> */}
      </div>

      {/* Mobile Navigation */}
      <div className={`
        md:hidden 
        bg-gray-900
        overflow-hidden 
        transition-all 
        duration-300 
        ease-in-out 
        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
      `}>
        <ul className="flex flex-col space-y-2 p-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={toggleMenu}
                className="flex justify-center items-center px-4 py-3 text-white rounded-lg hover:bg-gray-800 hover:text-gray-300 transition"
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
