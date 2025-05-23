package com.example.demo.User;

import com.example.demo.Model.User;
import com.example.demo.Repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.Optional;

import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;


@DataJpaTest
public class UserTest {

    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    public void setup() {
        // userRepository.(); // Clean DB before each test
    }

    @Test
    void testCreateUser() {
        User user = new User();
        User saved = userRepository.save(user);

        assertThat(saved).isNotNull();
        assertThat(saved.getId()).isNotNull();
    }

    @Test
    public void testGetAllUsers() throws Exception {
        User user1 = new User("user1@example.com", "User One", "123");
        User user2 = new User("user2@example.com", "User Two", "456");
        userRepository.save(user1);
        userRepository.save(user2);

        List<User> listusers = userRepository.findAll();
        assertThat(listusers).isNotEmpty();

    }

    @Test
    public void testLoginSuccess() throws Exception {
        User user = new User("user", "login@example.com", "mypassword");
        userRepository.save(user);

        Optional<User> ifuser = userRepository.findByEmail("login@example.com");
        assertThat(ifuser).isNotNull();
    }

    @Test
    public void testGetUserById() {
        User user = new User();
        userRepository.save(user);

        Optional<User> testuser = userRepository.findById(user.getId());

        assertThat(testuser).isNotNull();
    }

    @Test
    public void testUpdateUserDetails() {
        User user = new User();
        userRepository.save(user);

        User userData = userRepository.findById(user.getId()).get();

        userData.setFullname("New Name");
        userData.setEmail("email@gmail.com");
        userData.setPassword("1234");
        userRepository.save(userData);

        Optional<User> updatedUser = userRepository.findById(user.getId());
        assertThat(updatedUser).isNotNull();
        assertThat(updatedUser.get().getFullname()).isEqualTo("New Name");
        assertThat(updatedUser.get().getEmail()).isEqualTo("email@gmail.com");
        assertThat(updatedUser.get().getPassword()).isEqualTo("1234");
    }

    @Test
    public void testUpdatePassword() {
        User user = new User();
        userRepository.save(user);

        User userData = userRepository.findById(user.getId()).get();
        userData.setPassword("1234");
        userRepository.save(userData);

        Optional<User> updatedUser = userRepository.findById(user.getId());
        assertThat(updatedUser).isNotNull();
        assertThat(updatedUser.get().getPassword()).isEqualTo("1234");
    }

    @Test
    public void testDeleteUser() {
        User user = new User();
        user = userRepository.save(user);
        userRepository.deleteById(user.getId());

        Optional<User> savedUser = userRepository.findById(user.getId());
        assertThat(savedUser).isNotPresent();
    }

}
