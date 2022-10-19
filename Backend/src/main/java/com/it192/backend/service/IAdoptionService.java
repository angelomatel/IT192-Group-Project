package com.it192.backend.service;

import com.it192.backend.model.Adoption;

import java.util.List;

public interface IAdoptionService {
    List<Adoption> getAdoptions();

    Adoption getAdoption(int id);

    Adoption addAdoption(Adoption adoption);

    Adoption updateAdoption(int id, Adoption adoption);

    void deleteAdoption(int id);
}