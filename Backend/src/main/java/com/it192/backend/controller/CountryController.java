package com.it192.backend.controller;

import com.it192.backend.model.Country;
import com.it192.backend.service.ICountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class CountryController {
    @Autowired
    private ICountryService countryService;

    @RequestMapping("/api/countries")
    public List<Country> findCountries() { return countryService.getCountries(); }

    @RequestMapping(value="/api/show-country/{id}")
    public Country showCountry(@PathVariable int id) { return countryService.getCountry(id); }

    @RequestMapping(value="/api/add-country", method=RequestMethod.POST)
    public Country addCountry(@RequestBody Country country) { return countryService.addCountry(country); }

    @RequestMapping(value="/api/update-country/{id}", method=RequestMethod.PUT)
    public Country updateCountry(@PathVariable int id, @RequestBody Country country) { return countryService.updateCountry(id, country); }

}
