import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EtudiantList from "./components/EtudiantList";
import EtudiantDetails from "./components/EtudiantDetails";
import AjouterEtudiant from "./components/AjouterEtudiant";
import AjouterNote from "./components/AjouterNote";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Liste des Étudiants</Link>
          </li>
          <li>
            <Link to="/ajouter-etudiant">Ajouter un Étudiant</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* Liste des étudiants */}
        <Route path="/" element={<EtudiantList />} />
        {/* Détails d'un étudiant */}
        <Route path="/etudiants/:id" element={<EtudiantDetails />} />
        {/* Formulaire pour ajouter un étudiant */}
        <Route path="/ajouter-etudiant" element={<AjouterEtudiant />} />
        {/* Formulaire pour ajouter une note */}
        <Route path="/etudiants/:id/ajouter-note" element={<AjouterNote />} />
      </Routes>
    </Router>
  );
}

export default App;
