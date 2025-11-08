import React from "react";
import { useParams, Link } from "react-router-dom";

const projectData = {
  1: {
    title: "Intuition Chrome Extension",
    description: [
      "A Chrome extension focused on blockchain-based claims and analytics.",
      "It allows users to track and interact with blockchain data efficiently."
    ],
    images: ["/images/intuition1.png", "/images/intuition2.png", "/images/intuition3.png"]
  },
  2: {
    title: "Zero Waste Project",
    description: [
      "An application for companies to track raw material usage, waste, and CO₂ emissions.",
      "Includes dashboards, CRUD for materials, production tracking, and environmental KPIs."
    ],
    images: ["/images/zero_waste1.png", "/images/zero_waste2.png", "/images/zero_waste3.png"]
  },
  3: {
    title: "E-commerce Website - DH Parfum",
    description: [
      "Custom WordPress e-commerce site for a perfume entrepreneur.",
      "Features product catalog, WooCommerce integration, and responsive design."
    ],
    images: ["/images/dhparfum1.png", "/images/dhparfum2.png", "/images/dhparfum3.png"]
  },
  4: {
    title: "Real Estate Showcase",
    description: [
      "A showcase website for a real estate professional built with Ruby on Rails.",
      "Includes property listings, project details, and responsive design."
    ],
    images: ["/images/real_estate1.png", "/images/real_estate2.png", "/images/real_estate3.png"]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div className="p-6">Project not found.</div>;

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      {project.description.map((text, idx) => (
        <p key={idx} className="mb-4">{text}</p>
      ))}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {project.images.map((src, idx) => (
          <img key={idx} src={src} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-64 object-cover rounded" />
        ))}
      </div>
    </div>
  );
}
