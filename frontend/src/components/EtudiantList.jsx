import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EtudiantList() {
  const [etudiants, setEtudiants] = useState([]);

  const fetchEtudiants = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/etudiants");
      setEtudiants(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des étudiants :", error);
    }
  };

  useEffect(() => {
    fetchEtudiants(); // Appelé uniquement au montage du composant
  }, []); // Pas de dépendances additionnelles

  return (
    <div>
      <h1>Liste des Étudiants</h1>
      <Link to="/ajouter-etudiant">Ajouter un étudiant</Link>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date de Création</th>
          </tr>
        </thead>
        <tbody>
          {etudiants.map((etudiant) => (
            <tr key={etudiant.id}>
              <td>
                <Link to={`/etudiants/${etudiant.id}`}>{etudiant.nom}</Link>
              </td>
              <td>{etudiant.dateDeCreation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EtudiantList;
