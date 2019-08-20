package pl.pai2.pai2.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Objects;

@Entity
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idAddress;

    @NotBlank(message = "Pole miasto jest wymagane")
    private String city;
    @NotBlank(message = "Pole ulica jest wymagane")
    private String streetAddress;
    @NotNull(message = "Pole numer domu jest wymagane")
    private int homeNumber;

    private int localNumber;

    @NotBlank(message = "Pole kod pocztowy jest wymagane")
    private String zipCode;

    @NotBlank(message = "Pole województwo jest wymagane")
    private String stateOrProvince;


    public long getIdAddress() {
        return idAddress;
    }

    public void setIdAddress(long idAddress) {
        this.idAddress = idAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public int getHomeNumber() {
        return homeNumber;
    }

    public void setHomeNumber(int homeNumber) {
        this.homeNumber = homeNumber;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getStateOrProvince() {
        return stateOrProvince;
    }

    public void setStateOrProvince(String stateOrProvince) {
        this.stateOrProvince = stateOrProvince;
    }

    public int getLocalNumber() {
        return localNumber;
    }

    public void setLocalNumber(int localNumber) {
        this.localNumber = localNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Address address = (Address) o;
        return homeNumber == address.homeNumber &&
                localNumber == address.localNumber &&
                city.equals(address.city) &&
                streetAddress.equals(address.streetAddress) &&
                zipCode.equals(address.zipCode) &&
                stateOrProvince.equals(address.stateOrProvince);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idAddress, city, streetAddress, homeNumber, localNumber, zipCode, stateOrProvince);
    }

    //    public List<Client> getClients() {
//        return clients;
//    }
//
//    public void setClients(List<Client> clients) {
//        this.clients = clients;
//    }
//
//    public List<Employee> getEmployees() {
//        return employees;
//    }
//
//    public void setEmployees(List<Employee> employees) {
//        this.employees = employees;
//    }
//
//    public List<Department> getDepartments() {
//        return departments;
//    }
//
//    public void setDepartments(List<Department> departments) {
//        this.departments = departments;
//    }
}
