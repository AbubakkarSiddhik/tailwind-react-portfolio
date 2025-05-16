import React from "react";
import GoldFit from "./GoldFit.jpg";
import Quiz from "./quiz1.png";
import Restaurent from "./restaurent.png";
import Portfolio from "./portfolio.png";
import Calculator from "./calculator.png";
import GuessingGame from "./guessingGame.png";
import OTP from "./OTP.png";
import QRCode from "./QRcode.png";
import FashionFinds from "./fashion.png";
import Todo from "./todo.png";
import MegaMart from "./MegaMart.png"; 

const internProject = [
  {
    id: 1,
    title: "MegaMart E-commerce Website",
    image: MegaMart,
    description: "Developed during an internship at Dynamic Liquids using React.js, Tailwind CSS, and Firebase. Features include user authentication, product listing, cart, wishlist, and responsive layout.",
    liveDemo: "https://megamart-inky.vercel.app/",
    github: "https://github.com/AbubakkarSiddhik/MegaMart"
  }
];

const otherProjects = [
  {
    id: 2,
    title: "Personal Portfolio Website",
    image: Portfolio,
    description: "Developed a responsive website using HTML, CSS and JavaScript to showcase my skills and projects.",
    liveDemo: "https://portfolio-iota-three-64.vercel.app/",
    github: "https://github.com/AbubakkarSiddhik/PersonalPortfolio"
  },
  {
    id: 3,
    title: "Quiz Application",
    image: Quiz,
    description: "Developed a dynamic quiz app using HTML, CSS, and JavaScript, allowing users to answer questions and receive feedback.",
    liveDemo: "https://portfolio-iota-three-64.vercel.app/index4.html",
    github: "https://github.com/AbubakkarSiddhik/PersonalPortfolio/blob/main/quiz.html"
  },
  {
    id: 4,
    title: "GoldFit Gym Website",
    image: GoldFit,
    description: "Developed a fitness-focused website using Bootstrap 5 and custom CSS, showcasing gym programs, pricing plans, trainer highlights, and client testimonials.",
    liveDemo: "https://gold-fit-gym-web.vercel.app/",
    github: "https://github.com/AbubakkarSiddhik/GoldFit-Gym-Web"
  },
  {
    id: 5,
    title: "Spicy Palace Restaurant Website",
    image: Restaurent,
    description: "Developed a restaurant website using HTML, CSS, and JavaScript, showcasing menu items and contact information with smooth animations.",
    liveDemo: "https://portfolio-iota-three-64.vercel.app/index2.html",
    github: "https://github.com/AbubakkarSiddhik/PersonalPortfolio/blob/main/index2.html"
  },
  {
    id: 6,
    title: "QR Code Generator",
    image: QRCode,
    description: "Generate scannable QR codes from input text or URLs with instant preview, built using HTML, CSS, and JavaScript.",
    liveDemo: "https://portfolio-iota-three-64.vercel.app/QrCode.html",
    github: "https://github.com/AbubakkarSiddhik/PersonalPortfolio/blob/main/QrCode.html"
  },
  {
    id: 7,
    title: "Fashion Finds E-commerce Website",
    image: FashionFinds,
    description: "Developed an e-commerce platform using HTML, CSS, and JavaScript to explore the latest fashion trends, showcasing a range of fashionable dresses.",
    liveDemo: "https://e-commerce-website-nine-liard.vercel.app/",
    github: "https://github.com/AbubakkarSiddhik/E-Commerce-Website"
  },
  {
    id: 8,
    title: "Simple Calculator",
    image: Calculator,
    description: "User-friendly calculator application using HTML, CSS, and JavaScript for performing basic arithmetic operations.",
    liveDemo: "https://portfolio-iota-three-64.vercel.app/calculator.html",
    github: "https://github.com/AbubakkarSiddhik/PersonalPortfolio/blob/main/calculator.html"
  },
  {
    id: 9,
    title: "Guess the Number",
    image: GuessingGame,
    description: "Interactive number guessing game using HTML, CSS, and JavaScript with score tracking and responsive design.",
    liveDemo: "https://portfolio-iota-three-64.vercel.app/index5.html",
    github: "https://github.com/AbubakkarSiddhik/PersonalPortfolio/blob/main/index5.html"
  },
  {
    id: 10,
    title: "OTP Generator",
    image: OTP,
    description: "Secure random OTP generator using HTML, CSS, and JavaScript with a clean interface and copy functionality.",
    liveDemo: "https://portfolio-iota-three-64.vercel.app/otpGenrerator.html",
    github: "https://github.com/AbubakkarSiddhik/PersonalPortfolio/blob/main/otpGenrerator.html"
  },
  {
    id: 11,
    title: "To-Do List App",
    image: Todo,
    description: "Task management application using HTML, CSS, and JavaScript with creation, editing, and deletion features.",
    liveDemo: "https://portfolio-iota-three-64.vercel.app/index3.html",
    github: "https://github.com/AbubakkarSiddhik/PersonalPortfolio/blob/main/index3.html"
  }
];

function Projects() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here's a collection of my work showcasing my skills in web development and design
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Internship Project
          </h3>
          <div className="flex justify-center">
            {internProject.map((project) => (
              <div 
                key={project.id} 
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group max-w-2xl w-full"
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-center font-medium rounded-lg transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-center font-medium rounded-lg transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-center font-medium rounded-lg transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-center font-medium rounded-lg transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
