package com.example.demo.controllers;

import com.example.demo.models.Etudiant;
import com.example.demo.models.Note;
import com.example.demo.repositories.EtudiantRepository;
import com.example.demo.repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/etudiants")
@CrossOrigin(origins = "http://localhost:5173")
public class EtudiantController {

    @Autowired
    private EtudiantRepository etudiantRepository;

    @Autowired
    private NoteRepository noteRepository;

    // Liste de tous les étudiants
    @GetMapping
    public List<Etudiant> getAllEtudiants() {
        return etudiantRepository.findAll();
    }

    // Créer un étudiant
    @PostMapping
    public Etudiant createEtudiant(@RequestBody Etudiant etudiant) {
        etudiant.setDateDeCreation(java.time.LocalDate.now());
        return etudiantRepository.save(etudiant);
    }

    // Récupérer un étudiant avec ses notes
    @GetMapping("/{id}")
    public Etudiant getEtudiantById(@PathVariable Long id) {
        return etudiantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Étudiant non trouvé avec l'ID : " + id));
    }

    // Ajouter une note à un étudiant
    @PostMapping("/{id}/notes")
    public Note addNoteToEtudiant(@PathVariable Long id, @RequestBody Note note) {
        Etudiant etudiant = etudiantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Étudiant non trouvé avec l'ID : " + id));
        note.setEtudiant(etudiant);
        return noteRepository.save(note);
    }
}