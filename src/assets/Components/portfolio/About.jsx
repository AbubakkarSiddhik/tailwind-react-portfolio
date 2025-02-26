import React from "react";
import aboutImg from "./about.jpg";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import resumeFile from "./resume.pdf";

function About() {
  return (
    <section className="p-10 bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between">
      

      <div className="md:w-1/3 flex justify-center">
        <img
          src={aboutImg}
          alt="Profile"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full shadow-lg transition transform hover:scale-105 duration-300"
        />
      </div>

      <div className="md:w-2/3 text-center md:text-left space-y-5 mt-6 md:mt-0">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          About <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed px-2 sm:px-0">
          I'm a passionate <span className="text-blue-500 font-semibold">Software Developer</span> who loves building modern web applications.  
          With a strong background in front-end and back-end development, I create fast, responsive and user-friendly interfaces.
        </p>

        <h3 className="text-xl font-medium">Tech Stack</h3>
        {/* <div className=" grid grid-cols-4  sm:flex sm:justify-start space-x-3 sm:space-x-6 text-3xl sm:text-4xl text-gray-400"> */}
        <div className="grid grid-cols-4 sm:flex sm:justify-start justify-items-center gap-4 sm:gap-6 text-3xl sm:text-4xl text-gray-400">
  <FaHtml5 className="hover:text-orange-500 transition duration-300" />
  <FaCss3Alt className="hover:text-blue-500 transition duration-300" />
  <FaJs className="hover:text-yellow-400 transition duration-300" />
  <FaReact className="hover:text-blue-400 transition duration-300" />
  <SiTailwindcss className="hover:text-teal-400 transition duration-300" />
  <FaBootstrap className="hover:text-purple-500 transition duration-300" />
  <SiMongodb className="hover:text-green-500 transition duration-300" />
  <FaGithub className="hover:text-white transition duration-300" />
</div>

     

        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <a href={resumeFile} className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition duration-300">
            Hire Me
          </a>
          <a href="/projects" className="px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg shadow-md transition duration-300">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
