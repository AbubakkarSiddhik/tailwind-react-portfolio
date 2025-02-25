import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CambridgeImg from "./cambridge.jpg";
import JustriseImg from "./Justrise.jpg";
import MernImg from "./Mern.jpg";
import MLfrontendImg from "./MindLusterFrontEnd.jpg";
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
    image:  MernImg,
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

  return (
    <section className="p-10 bg-gray-900 text-white min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold">
          My <span className="text-blue-400">Certifications</span>
        </h2>
        <p className="text-gray-400 mt-2">Here are some of the certifications I've earned.</p>
      </div>

      <Slider {...settings} className="md:w-10/12 mx-auto">
  {certifications.map((cert) => (
    <div key={cert.id} className="p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden text-center">
        <img src={cert.image} alt={cert.title} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold truncate">{cert.title}</h3>
          <p className="text-gray-400 text-sm">{cert.issuer}</p>
        </div>
      </div>
    </div>
  ))}
</Slider>

    </section>
  );
}

export default Certifications;
