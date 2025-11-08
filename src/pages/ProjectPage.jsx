import { useParams, useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Projet 1",
    description: "Description complète du projet 1",
    images: ["/images/projet1-1.jpg", "/images/projet1-2.jpg", "/images/projet1-3.jpg"]
  },
  {
    id: 2,
    title: "Projet 2",
    description: "Description complète du projet 2",
    images: ["/images/projet2-1.jpg", "/images/projet2-2.jpg", "/images/projet2-3.jpg"]
  },
  {
    id: 3,
    title: "Projet 3",
    description: "Description complète du projet 3",
    images: ["/images/projet3-1.jpg", "/images/projet3-2.jpg", "/images/projet3-3.jpg"]
  },
  {
    id: 4,
    title: "Projet 4",
    description: "Description complète du projet 4",
    images: ["/images/projet4-1.jpg", "/images/projet4-2.jpg", "/images/projet4-3.jpg"]
  },
];

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="p-8 text-center text-red-600">Projet non trouvé</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Retour à l'accueil
      </button>

      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-6">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {project.images.map((img, index) => (
          <img key={index} src={img} alt={`${project.title} ${index + 1}`} className="w-full h-48 object-cover rounded-md" />
        ))}
      </div>
    </div>
  );
}
