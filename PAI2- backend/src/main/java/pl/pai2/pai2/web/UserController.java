package pl.pai2.pai2.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.pai2.pai2.domain.Address;
import pl.pai2.pai2.domain.Contact;
import pl.pai2.pai2.domain.User;
import pl.pai2.pai2.services.AddressService;
import pl.pai2.pai2.services.ContactService;
import pl.pai2.pai2.services.MapValidationErrorService;
import pl.pai2.pai2.services.UserService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    ContactService contactService;

    @Autowired
    AddressService addressService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewAccount(@Valid @RequestBody User user, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(result);
        if (errorMap != null) return errorMap;

        Address address = user.getAddress();
        Contact contact = user.getContact();

        addressService.addNewAddress(address);
        contactService.addNewContact(contact);

        User user1 = userService.registerUser(user);

        return new ResponseEntity<User>(user1, HttpStatus.CREATED);
    }

    @GetMapping("/uid/{uid}")
    public ResponseEntity<?> getUserByUid(@PathVariable String uid) {

        User user = userService.findUserByUid(uid);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email){
        User user = userService.findUserByEmail(email);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> findAll(){
        List<User> users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }


}
