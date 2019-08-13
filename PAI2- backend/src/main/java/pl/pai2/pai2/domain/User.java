package pl.pai2.pai2.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUser;

    @NotBlank(message = "Brak UID")
    private String uid;

    @NotBlank(message = "Pole imię jest wymagane")
    private String firstName;
    @NotBlank(message = "Pole nazwisko jest wymagane")
    private String lastName;

    private boolean isClient;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "idAddress", nullable = false)
    private Address address;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "idContact", nullable = false)
    private Contact contact;

    public User() {
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public long getIdUser() {
        return idUser;
    }

    public void setIdUser(long idUser) {
        this.idUser = idUser;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public boolean isClient() {
        return isClient;
    }

    public void setClient(boolean client) {
        this.isClient = client;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }


}
