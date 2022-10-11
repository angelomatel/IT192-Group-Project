package com.it192.backend.service;

import com.it192.backend.model.Country;

import java.util.List;

public interface ICountryService {
    List<Country> getCountries();

    Country getCountry(int id);

    Country addCountry(Country country);

    Country updateCountry(int id, Country country);
}