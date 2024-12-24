package com.example.demo.repositories;

import com.example.demo.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {
    List<Note> findByEtudiantId(Long idEtudiant);
}
