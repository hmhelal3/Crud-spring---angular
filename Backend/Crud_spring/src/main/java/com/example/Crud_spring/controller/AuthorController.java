package com.example.Crud_spring.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Crud_spring.entity.Author;
import com.example.Crud_spring.service.AuthorService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthorController {
    private final AuthorService authorService;

    @PostMapping("/author")
    public Author postAuthor(@RequestBody Author author) {
        return authorService.postAuthor(author);
    }

    @GetMapping("/authors")
    public List<Author> getAllAuthor() {
        return authorService.getAllAuthor();
    }

    @GetMapping("/author/{id}")
    public ResponseEntity<Author> getAuthorById(@PathVariable Long id) {
        Author author = authorService.getAuthorById(id);
        if (author == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(author);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/author/{id}")
    public ResponseEntity<Author> updateAuthor(@PathVariable Long id, @RequestBody Author author) {
        Author existingAuthor = authorService.getAuthorById(id);
        if (existingAuthor == null)
            return ResponseEntity.notFound().build();
            existingAuthor.setName(author.getName());
            existingAuthor.setBook(author.getBook());
            Author updatedAuthor = authorService.updateAuthor(existingAuthor);
        return ResponseEntity.ok(updatedAuthor);
    }

    @DeleteMapping("/author/{id}")
    public ResponseEntity<?> deleteAuthor(@PathVariable Long id) {
        Author existingAuthor = authorService.getAuthorById(id);
        if (existingAuthor == null)
            return ResponseEntity.notFound().build();
        authorService.deleteAuthor(id);
        return ResponseEntity.ok().build();
    }
}
