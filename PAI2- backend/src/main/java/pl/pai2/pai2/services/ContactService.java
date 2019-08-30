package pl.pai2.pai2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.pai2.pai2.domain.Contact;
import pl.pai2.pai2.exceptions.DataNotFoundException;
import pl.pai2.pai2.repositories.ContactRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Contact addNewContact(Contact contact) {
        for(Contact a : contactRepository.findAll())
            if(a.equals(contact))
                throw new DataNotFoundException("Address : " + a.getIdContact() + " already exist");

        contactRepository.save(contact);
        return contact;
    }

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    public Contact getContactById(long idContact) {
        Contact address = contactRepository.findByIdContact(idContact);

        if (address == null)
            throw new DataNotFoundException("Address with ID : " + idContact + " does not exist");

        return address;
    }

    public void deleteContactById(long idContact) {
        if (contactRepository.findByIdContact(idContact) == null)
            throw new DataNotFoundException("Address with ID : " + idContact + " does not exist");

        contactRepository.deleteById(idContact);
    }
}
