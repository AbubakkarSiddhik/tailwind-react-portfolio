import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from './Profile.png';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiMail } from "react-icons/ci";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-900 text-white min-h-screen">
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-5xl font-bold">Hi</h1>
        <h2 className="text-4xl font-semibold">
          I'm <span className="text-blue-400">Abubakkar Siddhik</span>
        </h2>

        {/*  in Mobile- image below name */}
        <div className="md:hidden flex justify-center my-6">
          <img
            src={img1}
            alt="Developer"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>

        <h3 className="text-2xl font-medium">Web Developer</h3>
        <p className="text-lg text-gray-400">
          Passionate about building responsive and dynamic web applications with a focus on user-friendly solutions.
        </p>

        <button
          className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition duration-300"
          onClick={() => navigate('/contact')}
        >
          Contact Me
        </button>

        <div className="flex gap-6 mt-4 justify-center md:justify-start">
          <a
            href="https://www.instagram.com/abubakkarsiddhik_webdev?igsh=MWNrYXd4bDM0N2p5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl md:text-4xl cursor-pointer text-gray-400 hover:text-pink-500 transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/abubakkarsiddhik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin className="text-3xl md:text-4xl cursor-pointer text-gray-400 hover:text-blue-500 transition duration-300" />
          </a>
          <a href="mailto:abubakkarsiddhik12@gmail.com" target="_blank" rel="noopener noreferrer">
            <CiMail className="text-3xl md:text-4xl cursor-pointer text-gray-400 hover:text-orange-500 transition duration-300" />
          </a>
        </div>
      </div>

      {/* in Desktop- image on the right */}
      <div className="hidden md:flex md:w-1/2 justify-center mt-6 md:mt-0">
        <img
          src={img1}
          alt="Developer"
          className="w-96 h-96 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
