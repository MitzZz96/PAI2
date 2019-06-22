package pl.pai2.pai2.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.pai2.pai2.domain.Contact;

import java.util.List;

@Repository
public interface ContactRepository extends CrudRepository<Contact, Long> {

    Contact findByIdContact(long idContact);

    @Override
    List<Contact> findAll();
}
