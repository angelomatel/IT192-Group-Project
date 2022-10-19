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

//@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class MainController {
    @Autowired
    private IDogService dogService;

    @Autowired
    private IUserService userService;

    @Autowired
    private IAdoptionService adoptionService;

    //DOGS
    @RequestMapping("/api/dogs")
    public List<Dog> findDogs() { return dogService.getDogs(); }

    @RequestMapping(value="/api/show-Dog/{id}")
    public Dog showDog(@PathVariable int id) { return dogService.getDog(id); }

    @RequestMapping(value="/api/add-Dog", method=RequestMethod.POST)
    public Dog addDog(@RequestBody Dog Dog) { return dogService.addDog(Dog); }

    @RequestMapping(value="/api/update-Dog/{id}", method=RequestMethod.PUT)
    public Dog updateDog(@PathVariable int id, @RequestBody Dog dog) { return dogService.updateDog(id, dog); }

    @RequestMapping(value="/api/delete-Dog/{id}", method=RequestMethod.DELETE)
    public void deleteDog(@PathVariable int id, @RequestBody Dog Dog) {  }

    //ADOPTIONS
    @RequestMapping("/api/adoptions")
    public List<Adoption> findAdoptions() { return adoptionService.getAdoptions(); }
    @RequestMapping(value="/api/adoption/{id}")
    public Adoption showAdoption(@PathVariable("id") long id) { return adoptionService.getAdoption(id); }

    @RequestMapping(value="/api/add-adoption", method=RequestMethod.POST)
    public Adoption addAdoption(@RequestBody Adoption adoption) { return adoptionService.addAdoption(adoption); }

    @RequestMapping(value="/api/update-adoption/{id}", method=RequestMethod.PUT)
    public Adoption updateAdoption(@PathVariable("id") long id, @RequestBody Adoption adoption) { return adoptionService.updateAdoption(id, adoption); }

    @RequestMapping(value="/api/delete-adoption/{id}", method=RequestMethod.DELETE)
    public void deleteAdoption(@PathVariable("id") long id) { adoptionService.deleteAdoption(id); }

    //USERS
    @RequestMapping("/api/users")
    public List<User> findUsers() { return userService.getUsers(); }

    @RequestMapping(value="/api/show-User/{id}")
    public User showUser(@PathVariable int id) { return userService.getUser(id); }

    @RequestMapping(value="/api/add-User", method=RequestMethod.POST)
    public User addUser(@RequestBody User user) { return userService.addUser(user); }

    @RequestMapping(value="/api/update-User/{id}", method=RequestMethod.PUT)
    public User updateUser(@PathVariable int id, @RequestBody User user) { return userService.updateUser(id, user); }

    @RequestMapping(value="/api/delete-User/{id}", method=RequestMethod.DELETE)
    public void deleteUser(@PathVariable int id, @RequestBody User user) {userService.deleteUser(id);  }
}
