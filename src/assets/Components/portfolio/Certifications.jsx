import React, { useState } from "react";
import { FaCertificate, FaUniversity, FaCode, FaGraduationCap, FaTimes, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiReact, SiMongodb, SiPython } from "react-icons/si";
import CambridgeImg from "./Cambridge.jpg";
import JustriseImg from "./Justrise.jpg";
import MernImg from "./Mern.jpg";
import MLfrontendImg from "./MindlusterFrontEnd.jpg";
import MLreactImg from "./MindLusterReact.jpg";
import MongoDBImg from "./MongoDB.jpg";
import NovitechFSDImg from "./NovitechFSD.jpg";
import NovitechReactImg from "./NovitechReact.jpg";
import PythonImg from "./Python.jpg";
import SimplileanReactImg from "./SimplilearnReact.jpg";
import WPIImg from "./WPI.jpg";

const certifications = [
  {
    id: 1,
    title: "English Communication Certification",
    issuer: "CAMBRIDGE",
    image: CambridgeImg,
    icon: <FaUniversity className="text-yellow-500" />,
    category: "language"
  },
  {
    id: 2,
    title: "Front-End Development",
    issuer: "JustRise Technologies Pvt Ltd",
    image: JustriseImg,
    icon: <SiJavascript className="text-blue-500" />,
    category: "frontend"
  },
  {
    id: 3,
    title: "MERN Stack Certification",
    issuer: "Simplilearn",
    image: MernImg,
    icon: <FaCode className="text-green-500" />,
    category: "fullstack"
  },
  {
    id: 4,
    title: "HTML, CSS & JavaScript",
    issuer: "MindLuster",
    image: MLfrontendImg,
    icon: <FaHtml5 className="text-orange-500" />,
    category: "frontend"
  },
  
  {
    id: 5,
    title: "React.js for Beginners",
    issuer: "MindLuster",
    image: MLreactImg,
    icon: <SiReact className="text-blue-400" />,
    category: "frontend"
  },
  {
    id: 6,
    title: "MongoDB Basics",
    issuer: "Simplilearn",
    image: MongoDBImg,
    icon: <SiMongodb className="text-green-600" />,
    category: "backend"
  },
  {
    id: 7,
    title: "Full-Stack Web Dev",
    issuer: "NoviTech R&D Pvt Ltd",
    image: NovitechFSDImg,
    icon: <FaCode className="text-purple-500" />,
    category: "fullstack"
  },
  {
    id: 8,
    title: "React.js Completion",
    issuer: "NoviTech R&D Pvt Ltd",
    image: NovitechReactImg,
    icon: <SiReact className="text-blue-400" />,
    category: "frontend"
  },
  {
    id: 9,
    title: "Python Programming",
    issuer: "Quality Thought",
    image: PythonImg,
    icon: <SiPython className="text-blue-600" />,
    category: "backend"
  },
  {
    id: 10,
    title: "React.js for Beginners",
    issuer: "Simplilearn",
    image: SimplileanReactImg,
    icon: <SiReact className="text-blue-400" />,
    category: "frontend"
  },
  {
    id: 11,
    title: "Workshop Completion",
    issuer: "Wisdom Praise Infotech",
    image: WPIImg,
    icon: <FaGraduationCap className="text-red-500" />,
    category: "workshop"
  },
];

const categoryColors = {
  frontend: "bg-blue-900/30 border-blue-500",
  backend: "bg-green-900/30 border-green-500",
  fullstack: "bg-purple-900/30 border-purple-500",
  language: "bg-yellow-900/30 border-yellow-500",
  workshop: "bg-red-900/30 border-red-500"
};

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const filteredCerts = activeFilter === "all" 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter);

  return (
    <section className="p-6 md:p-10 bg-gray-900 text-white min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-blue-400">Certifications</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Here are the certifications I've earned through dedicated learning and skill development.
        </p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === "all" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            <FaCertificate className="inline mr-2" />
            All Certificates
          </button>
          <button
            onClick={() => setActiveFilter("frontend")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === "frontend" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            <SiJavascript className="inline mr-2" />
            Frontend
          </button>
          <button
            onClick={() => setActiveFilter("backend")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === "backend" ? "bg-green-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            <SiPython className="inline mr-2" />
            Backend
          </button>
          <button
            onClick={() => setActiveFilter("fullstack")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === "fullstack" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            <FaCode className="inline mr-2" />
            Full Stack
          </button>
          <button
            onClick={() => setActiveFilter("language")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === "language" ? "bg-yellow-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            <FaUniversity className="inline mr-2" />
            Language
          </button>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <div 
              key={cert.id} 
              className={`group relative rounded-lg overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-2 border ${categoryColors[cert.category]}`}
              onClick={() => handleCertClick(cert)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <h3 className="text-white font-bold text-lg">{cert.title}</h3>
                  <p className="text-gray-300 text-sm">{cert.issuer}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2">
                {cert.icon}
              </div>
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-60 object-contain bg-black" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing certificate */}
      {showModal && selectedCert && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
              onClick={closeModal}
            >
              <FaTimes className="text-3xl" />
            </button>
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
              <div className={`p-4 ${categoryColors[selectedCert.category]} flex items-center gap-3`}>
                <div className="text-2xl">
                  {selectedCert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                  <p className="text-gray-300">{selectedCert.issuer}</p>
                </div>
              </div>
              <div className="p-4 overflow-y-auto max-h-[70vh]">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="w-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
