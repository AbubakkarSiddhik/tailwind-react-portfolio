import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  },
  {
    id: 2,
    title: "Front-End Development",
    issuer: "JustRise Technologies Pvt Ltd",
    image: JustriseImg,
  },
  {
    id: 3,
    title: "MERN Stack Certification",
    issuer: "Simplilearn",
    image: MernImg,
  },
  {
    id: 4,
    title: "HTML, CSS & JavaScript",
    issuer: "MindLuster",
    image: MLfrontendImg,
  },
  {
    id: 5,
    title: "React.js for Beginners",
    issuer: "MindLuster",
    image: MLreactImg,
  },
  {
    id: 6,
    title: "MongoDB Basics",
    issuer: "Simplilearn",
    image: MongoDBImg,
  },
  {
    id: 7,
    title: "Full-Stack Web Dev",
    issuer: "NoviTech R&D Pvt Ltd",
    image: NovitechFSDImg,
  },
  {
    id: 8,
    title: "React.js Completion",
    issuer: "NoviTech R&D Pvt Ltd",
    image: NovitechReactImg,
  },
  {
    id: 9,
    title: "Python Programming",
    issuer: "Quality Thought",
    image: PythonImg,
  },
  {
    id: 10,
    title: "React.js for Beginners",
    issuer: "Simplilearn",
    image: SimplileanReactImg,
  },
  {
    id: 11,
    title: "Workshop Completion",
    issuer: "Wisdom Praise Infotech",
    image: WPIImg,
  },
];

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="p-10 bg-gray-900 text-white min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold">
          My <span className="text-blue-400">Certifications</span>
        </h2>
        <p className="text-gray-400 mt-2">Here are some of the certifications I've earned.</p>
      </div>

      {/* Slider */}
      <Slider {...settings} className="md:w-10/12 mx-auto mb-16">
        {certifications.map((cert) => (
          <div key={cert.id} className="p-4">
            <div 
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden text-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleCertClick(cert)}
            >
              <img src={cert.image} alt={cert.title} className="w-full h-56 object-contain" />
              <div className="p-4">
                <h3 className="text-xl font-bold truncate">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* All Certificates Grid */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">All Certificates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden text-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleCertClick(cert)}
            >
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-48 object-contain bg-black" 
              />
              <div className="p-4">
                <h3 className="text-lg font-bold truncate">{cert.title}</h3>
                <p className="text-gray-400 text-xs">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing certificate */}
      {showModal && selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-10 right-0 text-white text-3xl hover:text-blue-400"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="bg-gray-800 rounded-lg p-4">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold">{selectedCert.title}</h3>
                <p className="text-gray-400">{selectedCert.issuer}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
