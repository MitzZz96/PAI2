package pl.pai2.pai2.domain;

import org.junit.Test;

import static org.junit.Assert.*;

public class AddressTest {
    private long idAddress = 0;

    Address A = new Address();

    @Test
    public void getIdAddress() {
        assertEquals(idAddress, A.getIdAddress());

    }

    @Test
    public void setIdAddress() {

       long Address = 255;
        A.setIdAddress(255);
        assertEquals(Address,A.getIdAddress());
    }

    @Test
    public void getCity() {

        assertEquals(null, A.getCity());
    }

    @Test
    public void setCity() {
        A.setCity("Kielce");
        assertEquals("Kielce",A.getCity());
    }

    @Test
    public void getStreetAddress() {
        assertEquals(null, A.getStreetAddress());
    }

    @Test
    public void setStreetAddress() {
        A.setStreetAddress("Orkan");
        assertEquals("Orkan",A.getStreetAddress());
    }

    @Test
    public void getHomeNumber() {
        assertEquals(0, A.getHomeNumber());
    }

    @Test
    public void setHomeNumber() {
        A.setHomeNumber(21);
        assertEquals(21,A.getHomeNumber());
    }

    @Test
    public void getZipCode() {
        assertEquals(null, A.getZipCode());
    }

    @Test
    public void setZipCode() {
        A.setZipCode("25-140");
        assertEquals("25-140",A.getZipCode());
    }

    @Test
    public void getStateOrProvince() {
        assertEquals(null, A.getStateOrProvince());
    }

    @Test
    public void setStateOrProvince() {
        A.setStateOrProvince("świętokrzyskie");
        assertEquals("świętokrzyskie",A.getStateOrProvince());
    }

    @Test
    public void getLocalNumber() {
        assertEquals(0, A.getLocalNumber());
    }

    @Test
    public void setLocalNumber() {
        A.setLocalNumber(48);
        assertEquals(48,A.getLocalNumber());
    }

    @Test
    public void equals1() {
        Object o = new Object();

        assertEquals(false,A.equals(o));
    }

    @Test
    public void hashCode1() {
        assertEquals(1742810335,A.hashCode());
    }
}