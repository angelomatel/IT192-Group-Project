package com.it192.backend.service;

import com.it192.backend.model.Country;
import com.it192.backend.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CountryService implements ICountryService {
    @Autowired
    private CountryRepository countryRepository;

    @Override
    public List<Country> getCountries() {
        List<Country> allCountries = new ArrayList<>();
        countryRepository.findAll().forEach(allCountries::add);

        return allCountries;
    }

    @Override
    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    @Override
    public Country updateCountry(int id, Country country) {
        return countryRepository.save(country);
    }

    @Override
    public Country getCountry(int id) {
        Optional<Country> country = countryRepository.findById(id);

        if(country.isPresent())
            return country.get();

        return null;
    }
}
