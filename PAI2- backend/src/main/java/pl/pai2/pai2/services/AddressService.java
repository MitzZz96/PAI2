package pl.pai2.pai2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.pai2.pai2.domain.Address;
import pl.pai2.pai2.exceptions.DataNotFoundException;
import pl.pai2.pai2.repositories.AddressRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    public Address addNewAddress(Address address) {
        for(Address a : addressRepository.findAll())
            if(a.equals(address))
                return address;

        addressRepository.save(address);
        return address;
    }

    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }

    public Address getAddressById(long idAddress) {
        Address address = addressRepository.findByIdAddress(idAddress);

        if (address == null)
            throw new DataNotFoundException("Address with ID : " + idAddress + " does not exist");

        return address;
    }

    public void deleteAddressById(long idAddress) {
        if (addressRepository.findByIdAddress(idAddress) == null)
            throw new DataNotFoundException("Address with ID : " + idAddress + " does not exist");

        addressRepository.deleteById(idAddress);
    }
}
