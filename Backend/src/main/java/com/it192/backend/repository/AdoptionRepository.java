package com.it192.backend.repository;

import com.it192.backend.model.Adoption;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdoptionRepository extends CrudRepository <Adoption, Long> {
}
