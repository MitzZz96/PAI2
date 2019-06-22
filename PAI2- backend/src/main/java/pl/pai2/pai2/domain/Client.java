package pl.pai2.pai2.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idClient;

    @NotBlank(message = "Pole imię jest wymagane")
    private String firstName;
    @NotBlank(message = "Pole nazwisko jest wymagane")
    private String lastName;
    @NotBlank(message = "Login jest wymagany")
    private String login;
    @NotBlank(message = "Hasło jest wymagane")
    private char password;

    private int permission;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "idAddress", nullable = false)
    private Address address;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "idContact", nullable = false)
    private Contact contact;

    public Client() {
    }

    public long getIdClient() {
        return idClient;
    }

    public void setIdClient(long idClient) {
        this.idClient = idClient;
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

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public char getPassword() {
        return password;
    }

    public void setPassword(char password) {
        this.password = password;
    }

    public int getPermission() {
        return permission;
    }

    public void setPermission(int permission) {
        this.permission = permission;
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
