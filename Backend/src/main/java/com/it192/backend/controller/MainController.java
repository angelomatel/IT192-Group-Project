package com.it192.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.it192.backend.model.Adoption;
import com.it192.backend.model.Dog;
import com.it192.backend.model.User;

import com.it192.backend.service.IAdoptionService;
import com.it192.backend.service.IDogService;
import com.it192.backend.service.IUserService;

import java.util.List;
 
//For CORS policy bypass
@CrossOrigin(maxAge = 3600)
 
@RestController
public class MainController {
    @Autowired
    private IDogService dogService;

    @Autowired
    private IUserService userService;

    @Autowired
    private IAdoptionService adoptionService;

    // DOGS
    @RequestMapping("/api/dogs")
    public List<Dog> findDogs() {
        return dogService.getDogs();
    }

    @RequestMapping(value = "/api/show-dog/{id}")
    public Dog showDog(@PathVariable("id") long id) {
        return dogService.getDog(id);
    }

    @RequestMapping(value = "/api/add-dog", method = RequestMethod.POST)
    public Dog addDog(@RequestBody Dog dog) {
        return dogService.addDog(dog);
    }

    @RequestMapping(value = "/api/update-dog/{id}", method = RequestMethod.PUT)
    public Dog updateDog(@PathVariable("id") long id, @RequestBody Dog dog) {
        return dogService.updateDog(id, dog);
    }

    @RequestMapping(value = "/api/delete-dog/{id}", method = RequestMethod.DELETE)
    public void deleteDog(@PathVariable("id") long id) {
        dogService.deleteDog(id);
    }

    // ADOPTIONS
    @RequestMapping("/api/adoptions")
    public List<Adoption> findAdoptions() {
        return adoptionService.getAdoptions();
    }

    @RequestMapping(value = "/api/adoption/{id}")
    public Adoption showAdoption(@PathVariable("id") long id) {
        return adoptionService.getAdoption(id);
    }

    @RequestMapping(value = "/api/add-adoption", method = RequestMethod.POST)
    public Adoption addAdoption(@RequestBody Adoption adoption) {
        return adoptionService.addAdoption(adoption);
    }

    @RequestMapping(value = "/api/update-adoption/{id}", method = RequestMethod.PUT)
    public Adoption updateAdoption(@PathVariable("id") long id, @RequestBody Adoption adoption) {
        return adoptionService.updateAdoption(id, adoption);
    }

    @RequestMapping(value = "/api/delete-adoption/{id}", method = RequestMethod.DELETE)
    public void deleteAdoption(@PathVariable("id") long id) {
        adoptionService.deleteAdoption(id);
    }

    // USERS
    @RequestMapping("/api/users")
    public List<User> findUsers() {
        return userService.getUsers();
    }

    @RequestMapping(value = "/api/show-user/{id}")
    public User showUser(@PathVariable("id") long id) {
        return userService.getUser(id);
    }

    @RequestMapping(value = "/api/add-user", method = RequestMethod.POST)
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @RequestMapping(value = "/api/update-user/{id}", method = RequestMethod.PUT)
    public User updateUser(@PathVariable("id") long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @RequestMapping(value = "/api/delete-user/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable("id") long id) {
        userService.deleteUser(id);
    }
}
