package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomDuCours;

    private Double valeurDeNote;

    @ManyToOne
    @JoinColumn(name = "idEtudiant")
    @JsonBackReference // Prevents recursion during JSON serialization
    private Etudiant etudiant;

    // Getters et Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomDuCours() {
        return nomDuCours;
    }

    public void setNomDuCours(String nomDuCours) {
        this.nomDuCours = nomDuCours;
    }

    public Double getValeurDeNote() {
        return valeurDeNote;
    }

    public void setValeurDeNote(Double valeurDeNote) {
        this.valeurDeNote = valeurDeNote;
    }

    public Etudiant getEtudiant() {
        return etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.etudiant = etudiant;
    }
}
