package com.it192.backend.service;

import com.it192.backend.model.Adoption;
import com.it192.backend.repository.AdoptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AdoptionService implements IAdoptionService{

    @Autowired
    private AdoptionRepository adoptionRepository;

    @Override
    public List<Adoption> getAdoptions() {
        List<Adoption> allAdoptions = new ArrayList<>();
        adoptionRepository.findAll().forEach(allAdoptions::add);
        return null;
    }

    @Override
    public Adoption getAdoption(int id) {
        Optional<Adoption> adoption = adoptionRepository.findById(id);
        if(adoption.isPresent()) return adoption.get();

        return null;
    }

    @Override
    public Adoption addAdoption(Adoption adoption) {
        return adoptionRepository.save(adoption);
    }

    @Override
    public Adoption updateAdoption(int id, Adoption adoption) {
        return adoptionRepository.save(adoption);
    }

    @Override
    public void deleteAdoption(int id) {
        adoptionRepository.deleteById(id);
    }
}
