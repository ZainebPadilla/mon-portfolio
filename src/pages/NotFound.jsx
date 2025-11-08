import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-2">Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <Link to="/" className="text-blue-500 mt-2 inline-block">Retour à l'accueil</Link>
    </div>
  );
};

export default NotFound;
