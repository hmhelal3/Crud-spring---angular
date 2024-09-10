package com.example.Crud_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Crud_spring.entity.Author;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {

}
