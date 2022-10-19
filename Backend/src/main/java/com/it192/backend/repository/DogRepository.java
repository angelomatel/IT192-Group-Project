package com.it192.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.it192.backend.model.Dog;

@Repository
public interface DogRepository extends CrudRepository <Dog, Long> {
}