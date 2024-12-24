import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EtudiantDetails = () => {
  const { id } = useParams();
  const [etudiant, setEtudiant] = useState({});
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/etudiants/${id}`)
      .then((response) => setEtudiant(response.data))
      .catch((error) => console.error(error));

    axios.get(`http://localhost:8080/api/notes/${id}`)
      .then((response) => setNotes(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>Détails de l'Étudiant</h1>
      <p>Nom : {etudiant.nom}</p>
      <p>Date de Création : {etudiant.dateDeCreation}</p>
      <p>Moyenne : {etudiant.moyenne?.toFixed(2)}</p>

      <h2>Notes</h2>
      <table>
        <thead>
          <tr>
            <th>Cours</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr
              key={note.id}
              style={{
                backgroundColor: note.valeurDeNote > 10 ? "green" : "red",
                color: "white",
              }}
            >
              <td>{note.nomDuCours}</td>
              <td>{note.valeurDeNote}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to={`/etudiants/${id}/ajouter-note`}>
        <button>Ajouter une Note</button>
      </Link>
    </div>
  );
};

export default EtudiantDetails;
