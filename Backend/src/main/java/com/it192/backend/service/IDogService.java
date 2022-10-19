package com.it192.backend.service;

import com.it192.backend.model.Dog;

import java.util.List;

public interface IDogService {
    List<Dog> getDogs();

    Dog getDog(int id);

    Dog addDog(Dog dog);

    Dog updateDog(int id, Dog dog);

    void deleteDog(int id);
}