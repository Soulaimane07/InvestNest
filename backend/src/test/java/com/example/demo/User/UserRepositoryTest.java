package com.example.demo.User;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.example.demo.Model.User;
import com.example.demo.Repository.UserRepository;


@DataJpaTest
public class UserRepositoryTest {
   
    // @Autowired
    // private UserRepository userRepository;
    
    // @Test
    // void test(){
    //     //given
    //     User user = new User("user", "test@email.com", "1234");
    //     userRepository.save(user);

    //     // when
    //     List<User> expected = userRepository.findAll();

    //     // then
    // }
}
