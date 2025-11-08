import React from "react";
import { useParams, Link } from "react-router-dom";

// Import images
import intuition1 from "../assets/images/intuition1.png";
import intuition3 from "../assets/images/intuition3.png";
import intuition4 from "../assets/images/intuition4.png";

import zeroWaste1 from "../assets/images/zero_waste1.png";
import zeroWaste2 from "../assets/images/zero_waste2.png";
import zeroWaste3 from "../assets/images/zero_waste3.png";
import zeroWaste4 from "../assets/images/zero_waste4.png";

import dhParfum1 from "../assets/images/dhparfum1.png";
import dhParfum2 from "../assets/images/dhparfum2.png";
import dhParfum4 from "../assets/images/dhparfum4.png";

import akin1 from "../assets/images/akin1.png";

const projectData = {
  1: {
    title: "Intuition Chrome Extension",
    shortDescription: "Community-driven Web3 trust layer for browsing.",
    description: [
      "A Chrome extension focused on blockchain-based claims and analytics.",
      "It allows users to see who in their network vouches for a page, add contextual notes, and avoid phishing threats.",
      "Users can leave attestations on websites in a decentralized manner, creating a social trust layer for the web."
    ],
    technologies: ["JavaScript", "Plasmo Framework", "Blockchain", "Chrome Extension API"],
    images: [
      { src: intuition1, caption: "Floatting button to open the extension" },
      { src: intuition3, caption: "Viewing blockchain attestations on a website" },
      { src: intuition4, caption: "Other pages of the extension" }
    ]
  },
  2: {
    title: "Zero Waste Project",
    shortDescription: "App to track waste and CO₂ emissions for businesses.",
    description: [
      "Helps companies monitor raw materials, waste, and CO₂ emissions.",
      "Includes dashboards, CRUD for materials, production tracking, and environmental KPIs.",
      "Designed for both visitors and admins to analyze and optimize resource usage."
    ],
    technologies: ["Ruby on Rails", "PostgreSQL", "HTML/CSS/JS", "Bootstrap"],
    images: [
      { src: zeroWaste1, caption: "Dashboard overview" },
      { src: zeroWaste2, caption: "Dashboard overview" },
      { src: zeroWaste3, caption: "Production tracking" },
      { src: zeroWaste4, caption: "Process management interface" }
    ]
  },
  3: {
    title: "E-commerce Website - DH Parfum",
    shortDescription: "Custom WordPress e-commerce for perfume business.",
    description: [
      "Developed for a perfume entrepreneur to sell online.",
      "Features product catalog, WooCommerce integration, and responsive design.",
      "Includes backend setup for order management and payments."
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "CSS", "Responsive Design"],
    images: [
      { src: dhParfum1, caption: "Homepage design" },
      { src: dhParfum2, caption: "Product catalog" },
      { src: dhParfum4, caption: "Shopping cart and checkout" },
    ]
  },
  4: {
    title: "AKIN Construction",
    shortDescription: "Professional showcase website with admin back-office.",
    description: [
      "Professional showcase website for AKIN Construction, a masonry company in Brittany.",
      "Public pages: Home, Services, Projects, Team, Contact.",
      "Admin back-office with CRUD for services, projects, team members, and client messages.",
      "Modern responsive design with Tailwind CSS, SEO-friendly structure, and autonomy for the client."
    ],
    technologies: ["Ruby on Rails", "ActiveAdmin", "Tailwind CSS", "PostgreSQL", "Turbo", "Stimulus"],
    images: [
      { src: akin1, caption: "Homepage with project highlights" }
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div className="p-6 text-red-600">Project not found.</div>;

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-700 mb-4 italic">{project.shortDescription}</p>

      {project.description.map((text, idx) => (
        <p key={idx} className="mb-4">{text}</p>
      ))}

      <h2 className="text-2xl font-semibold mt-6 mb-2">Technologies used:</h2>
      <ul className="list-disc list-inside mb-6">
        {project.technologies.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {project.images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img.src}
              alt={`${project.title} screenshot ${idx + 1}`}
              className="w-full  object-cover rounded"
            />
            {img.caption && <p className="text-gray-600 text-sm mt-1">{img.caption}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
