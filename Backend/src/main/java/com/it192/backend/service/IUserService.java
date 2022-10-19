package com.it192.backend.service;

import com.it192.backend.model.User;

import java.util.List;

public interface IUserService {
    List<User> getUsers();

    User getUser(long id);

    User addUser(User user);

    User updateUser(long id, User user);

    void deleteUser(long id);
}