import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

// Données projets
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
      { src: intuition1, caption: "Floating button to open the extension" },
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
      { src: dhParfum4, caption: "Shopping cart and checkout" }
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
    technologies: ["Ruby on Rails", "ActiveAdmin", "Tailwind CSS", "PostgreSQL"],
    images: [{ src: akin1, caption: "Homepage with project highlights" }]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  // 🔍 Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev + 1) % project.images.length);
        if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, project.images.length]);

  if (!project) return <div className="p-6 text-red-600">Project not found.</div>;

  return (
    <div className="container mx-auto p-6 relative">
      {/* Back button */}
      <Link
        to="/"
        className="inline-block mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
      >
        ← Back to Portfolio
      </Link>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-700 italic text-lg md:text-xl">{project.shortDescription}</p>
      </div>

      {/* Description */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
        {project.description.map((text, idx) => (
          <p key={idx} className="text-gray-800 mb-4 leading-relaxed">
            {text}
          </p>
        ))}
      </div>

      {/* Technologies */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies used:</h2>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="mb-12 relative">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-500 font-bold z-10"
              >
                ‹
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-500 font-bold z-10"
              >
                ›
              </button>
            )
          }
        >
          {project.images.map((img, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img.src}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="w-full max-h-[80vh] object-contain mx-auto rounded-lg"
              />
              {img.caption && (
                <p className="italic text-gray-600 font-medium mt-2 text-center">{img.caption}</p>
              )}
            </div>
          ))}
        </Carousel>
      </div>

      {/* 🔍 Lightbox overlay */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50"
          onClick={closeLightbox}
        >
          <img
            src={project.images[lightboxIndex].src}
            alt="Fullscreen"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />
          {project.images[lightboxIndex].caption && (
            <p className="text-gray-200 italic text-lg mt-4 text-center">
              {project.images[lightboxIndex].caption}
            </p>
          )}
          <button
            className="absolute left-6 text-5xl text-gray-300 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + project.images.length) % project.images.length
              );
            }}
          >
            ‹
          </button>
          <button
            className="absolute right-6 text-5xl text-gray-300 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % project.images.length);
            }}
          >
            ›
          </button>
          <button
            className="absolute top-6 right-6 text-4xl text-gray-400 hover:text-white"
            onClick={closeLightbox}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
