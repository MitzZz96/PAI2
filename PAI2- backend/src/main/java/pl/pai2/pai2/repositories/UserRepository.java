package pl.pai2.pai2.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.pai2.pai2.domain.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    @Override
    List<User> findAll();

    @Override
    Optional<User> findById(Long aLong);

    User findClientByUid(String uid);
    User findClientByFirstNameAndLastName(String firstName, String lastName);
    User findByContact_Email(String email);
}
