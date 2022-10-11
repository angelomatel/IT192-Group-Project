package com.it192.backend.repository;

import com.it192.backend.model.Country;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends CrudRepository <Country, Integer> {
}