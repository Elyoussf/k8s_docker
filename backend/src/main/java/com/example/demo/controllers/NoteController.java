package com.example.demo.controllers;

import com.example.demo.models.Note;
import com.example.demo.repositories.NoteRepository;
import com.example.demo.repositories.EtudiantRepository;
import com.example.demo.models.Etudiant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:5173")
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private EtudiantRepository etudiantRepository;

    // Récupérer les notes d'un étudiant spécifique
    @GetMapping("/{idEtudiant}")
    public List<Note> getNotesByEtudiant(@PathVariable Long idEtudiant) {
        return noteRepository.findByEtudiantId(idEtudiant);
    }

    // Ajouter une nouvelle note pour un étudiant
    @PostMapping("/{idEtudiant}")
    public Note createNote(@PathVariable Long idEtudiant, @RequestBody Note note) {
        Etudiant etudiant = etudiantRepository.findById(idEtudiant)
                .orElseThrow(() -> new RuntimeException("Étudiant non trouvé"));

        note.setEtudiant(etudiant);
        return noteRepository.save(note);
    }
}
