import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Intuition Chrome Extension",
    shortDescription: "A Chrome extension focused on blockchain-based claims and analytics.",
    image: "/images/intuition.png"
  },
  {
    id: 2,
    title: "Zero Waste Project",
    shortDescription: "An app to track waste and CO₂ emissions for restaurants and companies.",
    image: "/images/zero_waste.png"
  },
  {
    id: 3,
    title: "E-commerce Website - DH Parfum",
    shortDescription: "Custom e-commerce website for a perfume entrepreneur using WordPress and WooCommerce.",
    image: "/images/dhparfum.png"
  },
  {
    id: 4,
    title: "Real Estate Showcase",
    shortDescription: "Showcase website for a real estate professional built with Ruby on Rails.",
    image: "/images/real_estate.png"
  }
];

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">
          I am a Full Stack Developer with experience in React, Ruby on Rails, WordPress, and project management. Explore my projects below:
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map(project => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-600">{project.shortDescription}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
