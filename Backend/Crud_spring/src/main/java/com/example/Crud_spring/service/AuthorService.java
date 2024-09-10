package com.example.Crud_spring.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Crud_spring.entity.Author;
import com.example.Crud_spring.repository.AuthorRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthorService {
    private final AuthorRepository authorRepository;
    
    public Author postAuthor(Author author) {
        return authorRepository.save(author);
    }

    public List<Author> getAllAuthor() {
        return authorRepository.findAll();
    }
    
    public Author getAuthorById(Long id) {
        return authorRepository.findById(id).orElse(null);
    }
    public Author updateAuthor(Author author) {
        return authorRepository.save(author);
    }

    public void deleteAuthor(Long id) {
        authorRepository.deleteById(id);
    }

}
