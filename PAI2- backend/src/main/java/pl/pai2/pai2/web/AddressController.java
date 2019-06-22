package pl.pai2.pai2.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.pai2.pai2.domain.Address;
import pl.pai2.pai2.services.AddressService;
import pl.pai2.pai2.services.MapValidationErrorService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/address")
@CrossOrigin
public class AddressController {

    @Autowired
    private AddressService addressService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> addNewAddress(@Valid @RequestBody Address address, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(result);
        if(errorMap!=null) return errorMap;

        Address address1 = addressService.addNewAddress(address);

        return new ResponseEntity<>(address1, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    List<Address> getAllAddresses() {
        return addressService.getAllAddresses();
    }

    @GetMapping("/{idAddress}")
    public ResponseEntity<?> getAddressById(@PathVariable long idAddress) {
        Address address = addressService.getAddressById(idAddress);
        return new ResponseEntity<>(address, HttpStatus.OK);
    }

    @DeleteMapping("/{idAddress}")
    public ResponseEntity<?> deleteAddressById(@PathVariable long idAddress){
        addressService.deleteAddressById(idAddress);
        return new ResponseEntity<String>("Address with ID: '" + idAddress + "' was deleted", HttpStatus.OK);
    }
}
