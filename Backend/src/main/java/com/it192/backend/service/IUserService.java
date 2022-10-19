package com.it192.backend.service;

import com.it192.backend.model.User;

import java.util.List;

public interface IUserService {
    List<User> getUsers();

    User getUser(int id);

    User addUser(User user);

    User updateUser(int id, User user);

    void deleteUser(int id);
}