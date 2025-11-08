import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="border rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
