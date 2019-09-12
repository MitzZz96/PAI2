package pl.pai2.pai2.services;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import pl.pai2.pai2.domain.Address;
import pl.pai2.pai2.domain.Contact;
import pl.pai2.pai2.domain.User;
import pl.pai2.pai2.repositories.AddressRepository;
import pl.pai2.pai2.repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertFalse;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {

    @Autowired
    UserService userService;


    @MockBean
    UserRepository userRepository;

    @MockBean
    AddressRepository addressRepository;

    Address address = new Address();
    Contact contact = new Contact();

    @Test
    public void registerUser() {
        User user = new User();
        user.setUid("Uid");
        user.setIdUser(1);
        user.setFirstName("Name");
        user.setLastName("LastName");
        user.setClient(true);
        user.setAddress(address);
        user.setContact(contact);

        Mockito.when(userRepository.save(user)).thenReturn(user);

        assertThat(userService.registerUser(user)).isEqualTo(user);

    }

    @Test
    public void findAll() {
        User user = new User();
        user.setUid("Uid");
        user.setIdUser(1);
        user.setFirstName("Name");
        user.setLastName("LastName");
        user.setClient(true);
        user.setAddress(address);
        user.setContact(contact);

        User user1 = new User();
        user1.setUid("Uid1");
        user1.setIdUser(2);
        user1.setFirstName("NameW");
        user1.setLastName("LastNameW");
        user1.setClient(true);
        user1.setAddress(address);
        user1.setContact(contact);

        List<User> userList = new ArrayList<>();

        userList.add(user);
        userList.add(user1);

        Mockito.when(userRepository.findAll()).thenReturn(userList);

        assertThat(userService.findAll()).isEqualTo(userList);
    }

    @Test
    public void deleteUser() {
        User user = new User();
        user.setUid("Uid");
        user.setIdUser(1);
        user.setFirstName("Name");
        user.setLastName("LastName");
        user.setClient(true);
        user.setAddress(address);
        user.setContact(contact);

        Long l = new Long(1);

        Mockito.when(userRepository.findClientByUid("Uid")).thenReturn(user);
        Mockito.when(userRepository.existsById(l)).thenReturn(false);

        assertFalse(userRepository.existsById(l));
    }

    @Test
    public void isClient() {
        User user = new User();
        user.setUid("Uid");
        user.setIdUser(1);
        user.setFirstName("Name");
        user.setLastName("LastName");
        user.setClient(true);
        user.setAddress(address);
        user.setContact(contact);

        Mockito.when(userRepository.findClientByUid("Uid")).thenReturn(user);

        assertTrue(userService.isClient("Uid"));
    }

    @Test
    public void findUserByEmail() {
        User user = new User();
        user.setUid("Uid");
        user.setIdUser(1);
        user.setFirstName("Name");
        user.setLastName("LastName");
        user.setClient(true);
        user.setAddress(address);
        user.setContact(contact);

        Mockito.when(userRepository.findByContact_Email("mail@o2.pl")).thenReturn(user);

        assertThat(userService.findUserByEmail("mail@o2.pl")).isEqualTo(user);
    }

    @Test
    public void findUserByUid() {
        User user = new User();
        user.setUid("Uid");
        user.setIdUser(1);
        user.setFirstName("Name");
        user.setLastName("LastName");
        user.setClient(true);
        user.setAddress(address);
        user.setContact(contact);

        Mockito.when(userRepository.findClientByUid("Uid")).thenReturn(user);

        assertThat(userService.findUserByUid("Uid")).isEqualTo(user);
    }

    @Test
    public void getUserLocationCoordinates() {
        User user = new User();
        user.setUid("Uid");
        user.setIdUser(1);
        user.setFirstName("Name");
        user.setLastName("LastName");
        user.setClient(true);
        user.setAddress(address);
        user.setContact(contact);

        User user2 = userService.registerUser(user);

        List<Float> floatsList = new ArrayList<>();
        floatsList.add(213f);


        Mockito.when(userRepository.save(user2)).thenReturn(user2);


        try {
            assertThat(userService.getUserLocationCoordinates("Uid")).isEqualTo(floatsList);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}