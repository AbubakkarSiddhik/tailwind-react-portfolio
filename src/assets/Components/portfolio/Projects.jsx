import React from "react";
import GoldFit from "./GoldFit.jpg";
import Quiz from "./quiz1.png";
import Restaurent from "./restaurent.png";

const projects = [
  {
    id: 1,
    title: "Gym Website",
    image: GoldFit,
    description: "A responsive gym website built with Bootstrap 5 and custom CSS.",
    liveDemo: "https://gold-fit-gym-web.vercel.app/",
    github: "https://github.com/AbubakkarSiddhik/GoldFit-Gym-Web",
  },
  {
    id: 2,
    title: "Quiz Application",
    image: Quiz,
    description: "A responsive & dynamic Quiz Application with HTML, CSS and JavaScript showcasing tech industry leaders and programming languages.",
    liveDemo: "https://portfolio-iota-three-64.vercel.app/index4.html",
    github: "https://github.com/AbubakkarSiddhik/PersonalPortfolio/blob/main/quiz.html",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    image: Restaurent,
    description: "Created a restaurant website using HTML, CSS and JavaScript showcasing menu items and contact information.",
    liveDemo: "https://portfolio-iota-three-64.vercel.app/index2.html",
    github: "https://github.com/AbubakkarSiddhik/PersonalPortfolio/blob/main/index2.html",
  },
];

function Projects() {
  return (
    <section className="p-10 bg-gray-900 text-white min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-400 mt-2">Here are some of the projects I've worked on.</p>
      </div>

    
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="mt-4 flex justify-between">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-md">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
