import React from "react";
import { Link } from "react-router-dom"; 
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
        
        <p className="text-gray-400 text-center md:text-left">
          © 2025 Siddhik. All Rights Reserved.
        </p>

        <ul className="flex space-x-6 my-4 md:my-0">
          <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
          <li><Link to="/certifications" className="hover:text-blue-400 transition">Certifications</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
        </ul>

        <div className="flex space-x-5 text-xl">
          <a href="https://www.linkedin.com/in/abubakkarsiddhik" className="hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/AbubakkarSiddhik?tab=repositories" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/abubakkarsiddhik_webdev?igsh=MWNrYXd4bDM0N2p5" className="hover:text-pink-500 transition" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
