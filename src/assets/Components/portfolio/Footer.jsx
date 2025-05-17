import React from "react";
import { Link } from "react-router-dom"; 
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-6">
      <div className="container mx-auto px-5">
      
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-4">
         
          <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2025 Abubakkar Siddhik M. All Rights Reserved.
          </p>

          
          <div className="flex space-x-5 text-xl mb-4 md:mb-0">
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

       
        <div className="border-t border-gray-800 pt-6">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/certifications" className="hover:text-blue-400 transition">
                Certifications
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
