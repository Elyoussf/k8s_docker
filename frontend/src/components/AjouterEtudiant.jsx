import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AjouterEtudiant() {
  const [nom, setNom] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/etudiants", { nom });
      navigate("/"); // Redirection après soumission
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un étudiant :", error);
    }
  };

  return (
    <div>
      <h1>Ajouter un Étudiant</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AjouterEtudiant;
