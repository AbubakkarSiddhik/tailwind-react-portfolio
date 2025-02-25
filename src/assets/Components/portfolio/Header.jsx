import React, { useState } from "react";
import { Link } from "react-router-dom";

const hover = "hover:bg-gray-800";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          <span className="text-2xl">S</span>iddhik
        </Link>

        <button onClick={handleClick} className="text-white md:hidden focus:outline-none text-2xl">
          {isOpen ? "✖" : "☰"}
        </button>

        
        <ul className="hidden md:flex space-x-6 text-white">
          <li><Link to="/" className={`${hover} px-3 py-2 rounded hover:text-gray-300`}>Home</Link></li>
          <li><Link to="/about" className={`${hover} px-3 py-2 rounded hover:text-gray-300`}>About</Link></li>
          <li><Link to="/projects" className={`${hover} px-3 py-2 rounded hover:text-gray-300`}>Projects</Link></li>
          <li><Link to="/certifications" className={`${hover} px-3 py-2 rounded hover:text-gray-300`}>Certifications</Link></li>
          <li><Link to="/contact" className={`${hover} px-3 py-2 rounded hover:text-gray-300`}>Contact</Link></li>
        </ul>
      </div>

      <ul className={`transition-all duration-300 ease-in-out ${isOpen ? "flex" : "hidden"} flex-col space-y-2 text-white text-center bg-gray-900 p-4 md:hidden`}>
        <li><Link to="/" className={`${hover} px-3 py-2 rounded hover:text-gray-300 block`} onClick={handleClick}>Home</Link></li>
        <li><Link to="/about" className={`${hover} px-3 py-2 rounded hover:text-gray-300 block`} onClick={handleClick}>About</Link></li>
        <li><Link to="/projects" className={`${hover} px-3 py-2 rounded hover:text-gray-300 block`} onClick={handleClick}>Projects</Link></li>
        <li><Link to="/certifications" className={`${hover} px-3 py-2 rounded hover:text-gray-300 block`} onClick={handleClick}>Certifications</Link></li>
        <li><Link to="/contact" className={`${hover} px-3 py-2 rounded hover:text-gray-300 block`} onClick={handleClick}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
