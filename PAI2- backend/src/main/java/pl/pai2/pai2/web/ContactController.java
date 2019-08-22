package pl.pai2.pai2.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.pai2.pai2.domain.Contact;
import pl.pai2.pai2.services.ContactService;
import pl.pai2.pai2.services.MapValidationErrorService;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin
public class ContactController {

    @Autowired
    private ContactService contactService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;


    @PostMapping("")
    public ResponseEntity<?> addNewContact(@RequestBody Contact contact, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(result);
        if(errorMap!=null) return errorMap;

        Contact contact1 = contactService.addNewContact(contact);

        return new ResponseEntity<>(contact1, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    List<Contact> getAllContacts() {
        return contactService.getAllContacts();
    }

    @GetMapping("/get/{idContact}")
    public ResponseEntity<?> getContactById(@PathVariable long idContact) {
        Contact contact = contactService.getContactById(idContact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @DeleteMapping("/{idContact}")
    public ResponseEntity<?> deleteContactById(@PathVariable long idContact){
        contactService.deleteContactById(idContact);
        return new ResponseEntity<String>("Contact with ID: '" + idContact + "' was deleted", HttpStatus.OK);
    }
}
