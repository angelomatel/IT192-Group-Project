package com.it192.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.it192.backend.model.Dog;
import com.it192.backend.repository.DogRepository;

public class DogService implements IDogService {
    @Autowired
    private DogRepository dogRepository;

    @Override
    public List<Dog> getDogs(){
        List<Dog> allDogs = new ArrayList<>();
        dogRepository.findAll().forEach(allDogs::add);

        return allDogs;
    }

    @Override
    public Dog getDog(int id) {
        Optional<Dog> dog = dogRepository.findById(id);

        if(dog.isPresent()) return dog.get();

        return null;
    }

    @Override
    public Dog addDog(Dog dog) {
        return dogRepository.save(dog);
    }

    @Override
    public Dog updateDog(int id, Dog dog) {
        return dogRepository.save(dog);
    }
}
