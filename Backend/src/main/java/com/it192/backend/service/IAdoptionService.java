package com.it192.backend.service;

import com.it192.backend.model.Adoption;

import java.util.List;

public interface IAdoptionService {
    List<Adoption> getAdoptions();

    Adoption getAdoption(long id);

    Adoption addAdoption(Adoption adoption);

    Adoption updateAdoption(long id, Adoption adoption);

    void deleteAdoption(long id);
}