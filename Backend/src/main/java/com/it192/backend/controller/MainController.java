package com.it192.backend.controller;

import com.it192.backend.model.Dog;
import com.it192.backend.service.IDogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class MainController {
    @Autowired
    private IDogService dogService;

    @RequestMapping("/api/dogs")
    public List<Dog> findDogs() { return dogService.getDogs(); }

    @RequestMapping(value="/api/show-Dog/{id}")
    public Dog showDog(@PathVariable int id) { return dogService.getDog(id); }

    @RequestMapping(value="/api/add-Dog", method=RequestMethod.POST)
    public Dog addDog(@RequestBody Dog Dog) { return dogService.addDog(Dog); }

    @RequestMapping(value="/api/update-Dog/{id}", method=RequestMethod.PUT)
    public Dog updateDog(@PathVariable int id, @RequestBody Dog Dog) { return dogService.updateDog(id, Dog); }

}
