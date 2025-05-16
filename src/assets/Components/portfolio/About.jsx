import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import aboutImg from "./about2.png";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, 
  FaGithub, FaNodeJs, FaLinkedin, FaTwitter
} from "react-icons/fa";
import { 
  SiTailwindcss, SiMongodb, SiExpress, SiFirebase 
} from "react-icons/si";
import resumeFile from "./resume.pdf";

function About() {
  const techStack = [
    { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <FaReact />, name: "React", color: "text-blue-400" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "text-teal-400" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-500" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600" },
    { icon: <SiExpress />, name: "Express", color: "text-gray-200" },
    { icon: <SiFirebase />, name: "Firebase", color: "text-orange-600" },
  ];
const navigate=useNavigate();
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and professional experience
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative group">
              <img
                src={aboutImg}
                alt="Profile"
                className="w-64 h-64 sm:w-72 sm:h-100 object-cover rounded-xl shadow-xl transition-all duration-500 group-hover:opacity-90"
              />
              <div className="absolute inset-0 border-2 border-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105 -rotate-2"></div>
              <div className="absolute inset-0 border-2 border-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105 rotate-2"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:w-2/3 space-y-8">
            {/* Introduction */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                Who I Am
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm <span className="text-blue-400 font-medium">Abubakkar Siddhik M</span>, a passionate Software Developer with a Bachelor of Computer Applications (BCA) from HH The Rajah's College, Pudukkottai (2022–2025). I specialize in building responsive and dynamic web applications with a focus on creating intuitive user experiences.
              </p>
            </div>

            {/* Experience Sections */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* College Experience */}
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                  College Experience
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-400">
                    <span className="font-medium text-white">BCA</span> - HH The Rajah's College, Pudukkottai
                  </p>
                  <p className="text-sm text-gray-500">Aug 2022 - May 2025</p>
                  <p className="text-gray-400">
                    Currently awaiting final semester results. Secured 1st place in an Inter-Collegiate Technical Quiz Competition organized by J.J. College of Arts and Science. Additionally, won a prize in the intra-college quiz competition at the Cyber Phoenix 2K25 event organized by the PG and Research Department of Computer Science at HH The Rajah's College.
                  </p>
                </div>
              </div>

              {/* Internship */}
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                  Internship Experience
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-400">
                    <span className="font-medium text-white">Software Developer</span> - Dynamic Liquids, Pudukkottai
                  </p>
                  <p className="text-sm text-gray-500">Feb 2025 - Apr 2025</p>
                  <p className="text-gray-400">
                    Collaborated with development team using agile practices to build robust web applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Highlight */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                Internship Project: MegaMart
              </h3>
              <p className="text-gray-400 mb-3">
                Developed a full-featured e-commerce platform with:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  React.js & Tailwind CSS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Firebase Authentication
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Firestore Database
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Product Management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Cart & Wishlist
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Responsive Design
                </li>
              </ul>
            </div>

         
          </div>
          
        </div>
           {/* Tech Stack */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                Tech Stack
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                  >
                    <span className={`text-3xl mb-1 group-hover:scale-110 transition-transform duration-300 ${tech.color}`}>
                      {tech.icon}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={resumeFile} 
                download
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-blue-700 text-center"
              >
                Download Resume
              </a>
           <button onClick={()=>navigate("/projects")}
            className="px-6 py-3 border border-blue-500 text-blue-400 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-500 hover:text-white text-center">View Projects</button>
               
              
            </div>
      </div>
    </section>
  );
}

export default About;
