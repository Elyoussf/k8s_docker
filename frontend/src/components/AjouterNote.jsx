import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AjouterNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nomDuCours, setNomDuCours] = useState("");
  const [valeurDeNote, setValeurDeNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://backend.exam.svc.cluster.local/api/notes/${id}`, {
        nomDuCours,
        valeurDeNote,
      })
      .then(() => {
        alert("Note ajoutée avec succès !");
        navigate(`/etudiants/${id}`);
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter une Note</h2>
      <label>Nom du cours :</label>
      <input
        type="text"
        value={nomDuCours}
        onChange={(e) => setNomDuCours(e.target.value)}
        required
      />
      <label>Valeur de la note :</label>
      <input
        type="number"
        value={valeurDeNote}
        onChange={(e) => setValeurDeNote(e.target.value)}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AjouterNote;
