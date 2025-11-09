import React from "react";
import { Link } from "react-router-dom";

// Import images
import intuition1 from "../assets/images/intuition1.png";
import zeroWaste1 from "../assets/images/zero_waste1.png";
import dhParfum1 from "../assets/images/dhparfum1.png";
import akin1 from "../assets/images/akin1.png";

const projects = [
  {
    id: 1,
    title: "Intuition Chrome Extension",
    shortDescription: "A Chrome extension focused on blockchain-based claims and analytics.",
    image: intuition1
  },
  {
    id: 2,
    title: "Zero Waste Project",
    shortDescription: "An app to track waste and CO₂ emissions for restaurants and companies.",
    image: zeroWaste1
  },
  {
    id: 3,
    title: "E-commerce Website - DH Parfum",
    shortDescription: "Custom e-commerce website for a perfume entrepreneur using WordPress and WooCommerce.",
    image: dhParfum1
  },
  {
    id: 4,
    title: "AKIN Construction",
    shortDescription: "Professional showcase website with admin back-office built in Ruby on Rails.",
    image: akin1
  }
];

export default function Home() {
  return (
    <div className="container mx-auto p-6">

      {/* Bio Section */}
      <section className="mb-12">
                
        <p className="text-lg mb-4">
          Full Stack Developer, passionate about creating modern, scalable web applications.
          Specialized in React, Ruby on Rails, WordPress, and building solutions that solve real-world problems.
          Strong experiece in project management, able to handle whole projects for your enterprise !
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {["React", "Ruby on Rails", "WordPress", "JavaScript", "HTML/CSS", "GitHub"].map((skill) => (
            <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
              {skill}
            </span>
          ))}
        </div>

        <p className="mb-4">
          My projects range from innovative Chrome extensions with blockchain features, 
          to e-commerce platforms and professional showcase websites with admin dashboards.
        </p>

        <p className="italic text-gray-600">
          I enjoy turning complex problems into intuitive, user-friendly solutions and continuously learning new technologies.
        </p>
      </section>

      <hr className="my-8 border-gray-300" />

      {/* Projects Section */}
      <section className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {projects.map(project => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-gray-600 mt-2">{project.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
