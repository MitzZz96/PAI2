package pl.pai2.pai2.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.pai2.pai2.domain.Address;

import java.util.List;

@Repository
public interface AddressRepository extends CrudRepository<Address, Long> {

    Address findByIdAddress(long idAddress);

    @Override
    List<Address> findAll();

}
