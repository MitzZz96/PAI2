package pl.pai2.pai2.services;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;
import pl.pai2.pai2.domain.Address;
import pl.pai2.pai2.repositories.AddressRepository;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertFalse;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AddressServiceTest {


    @Autowired
    private AddressService AddressService;

    @MockBean
    private AddressRepository AddressRepository;


    @Test
    public void addNewAddress() {
        Address address = new Address();
        address.setIdAddress(1);
        address.setCity("Kielce");
        address.setStreetAddress("Radomska");
        address.setHomeNumber(21);
        address.setZipCode("26-140");
        address.setStateOrProvince("Province");
        address.setLocalNumber(48);

        Mockito.when(AddressRepository.save(address)).thenReturn(address);

        assertThat(AddressService.addNewAddress(address)).isEqualTo(address);

    }

    @Test
    public void getAllAddresses(){
        Address address1 = new Address();
        address1.setIdAddress(1);
        address1.setCity("Kielce");
        address1.setStreetAddress("Radomska");
        address1.setHomeNumber(21);
        address1.setZipCode("26-140");
        address1.setStateOrProvince("Province");
        address1.setLocalNumber(48);

        Address address2 = new Address();
        address2.setIdAddress(2);
        address2.setCity("Kielce");
        address2.setStreetAddress("Zagórska");
        address2.setHomeNumber(114);
        address2.setZipCode("23-240");
        address2.setStateOrProvince("Province");
        address2.setLocalNumber(48);

        List<Address> addressList = new ArrayList<>();
        addressList.add(address1);
        addressList.add(address2);

        Mockito.when((AddressRepository.findAll())).thenReturn(addressList);

        assertThat(AddressService.getAllAddresses()).isEqualTo(addressList);
    }

    @Test
    public void getAddressById() {
        Address address = new Address();
        address.setIdAddress(1);
        address.setCity("Kielce");
        address.setStreetAddress("Radomska");
        address.setHomeNumber(21);
        address.setZipCode("26-140");
        address.setStateOrProvince("Province");
        address.setLocalNumber(48);

        Mockito.when(AddressRepository.findByIdAddress(1)).thenReturn(address);
        assertThat(AddressService.getAddressById(1)).isEqualTo(address);

    }

    @Test
    public void deleteAddressById() {
        Address address = new Address();
        address.setIdAddress(1);
        address.setCity("Kielce");
        address.setStreetAddress("Radomska");
        address.setHomeNumber(21);
        address.setZipCode("26-140");
        address.setStateOrProvince("Province");
        address.setLocalNumber(48);

        Mockito.when(AddressRepository.findByIdAddress(1)).thenReturn(address);
        Mockito.when(AddressRepository.existsById(address.getIdAddress())).thenReturn(false);

        assertFalse(AddressRepository.existsById(address.getIdAddress()));
    }
}
