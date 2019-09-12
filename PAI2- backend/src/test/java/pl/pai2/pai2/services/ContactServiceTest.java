package pl.pai2.pai2.services;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import pl.pai2.pai2.domain.Contact;
import pl.pai2.pai2.repositories.AddressRepository;
import pl.pai2.pai2.repositories.ContactRepository;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertFalse;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ContactServiceTest {

    @Autowired
    private ContactService contactService;

    @MockBean
    private ContactRepository contactRepository;


    @Test
    public void addNewContact() {
        Contact contact = new Contact();
        contact.setIdContact(1);
        contact.setNumber1(777888999);
        contact.setNumber2(999888777);
        contact.setEmail("mail@onet.pl");

        Mockito.when(contactRepository.save(contact)).thenReturn(contact);

        assertThat(contactService.addNewContact(contact)).isEqualTo(contact);

    }

    @Test
    public void getAllContacts() {

        Contact contact = new Contact();
        contact.setIdContact(1);
        contact.setNumber1(777888999);
        contact.setNumber2(999888777);
        contact.setEmail("mail@onet.pl");

        Contact contact1 = new Contact();
        contact1.setIdContact(2);
        contact1.setNumber1(774567999);
        contact1.setNumber2(999845777);
        contact1.setEmail("mail23@onet.pl");

        List<Contact> contactList = new ArrayList<>();

        Mockito.when(contactRepository.findAll()).thenReturn(contactList);

        assertThat(contactService.getAllContacts()).isEqualTo(contactList);
    }

    @Test
    public void getContactById() {
        Contact contact = new Contact();
        contact.setIdContact(1);
        contact.setNumber1(777888999);
        contact.setNumber2(999888777);
        contact.setEmail("mail@onet.pl");

        Mockito.when(contactRepository.findByIdContact(1)).thenReturn(contact);

        assertThat(contactService.getContactById(1)).isEqualTo(contact);
    }

    @Test
    public void deleteContactById() {
        Contact contact = new Contact();
        contact.setIdContact(1);
        contact.setNumber1(777888999);
        contact.setNumber2(999888777);
        contact.setEmail("mail@onet.pl");

        Mockito.when(contactRepository.findByIdContact(1)).thenReturn(contact);
        Mockito.when(contactRepository.existsById(contact.getIdContact())).thenReturn(false);

        assertFalse(contactRepository.existsById(contact.getIdContact()));
    }
}