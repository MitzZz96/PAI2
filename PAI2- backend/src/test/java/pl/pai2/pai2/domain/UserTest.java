package pl.pai2.pai2.domain;

import org.junit.Test;

import static org.junit.Assert.*;

public class UserTest {

    User u = new User();
    String s;
    long l;
    Address a = new Address();
    Contact c = new Contact();

    @Test
    public void getUid() {
        assertEquals(null, u.getUid());
    }

    @Test
    public void setUid() {
        s = "Uid";
        u.setUid(s);
        assertEquals(s, u.getUid());
    }

    @Test
    public void getIdUser() {
        assertEquals(0, u.getIdUser());
    }

    @Test
    public void setIdUser() {
        l = 224;
        u.setIdUser(l);
        assertEquals(l, u.getIdUser());
    }

    @Test
    public void getFirstName() {
        assertEquals(null, u.getFirstName());
    }

    @Test
    public void setFirstName() {
        s = "Michał";
        u.setFirstName(s);
        assertEquals(s, u.getFirstName());
    }

    @Test
    public void getLastName() {
        assertEquals(null, u.getLastName());
    }

    @Test
    public void setLastName() {
        s = "Żebrowski";
        u.setLastName(s);
        assertEquals(s, u.getLastName());
    }

    @Test
    public void isClient() {
        assertEquals(false, u.isClient());
    }

    @Test
    public void setClient() {
        u.setClient(true);
        assertEquals(true, u.isClient());
    }

    @Test
    public void getAddress() {
        assertEquals(null, u.getAddress());
    }

    @Test
    public void setAddress() {
        u.setAddress(a);
        assertEquals(a, u.getAddress());
    }

    @Test
    public void getContact() {
        assertEquals(null, u.getContact());
    }

    @Test
    public void setContact() {
        u.setContact(c);
        assertEquals(c, u.getContact());
    }
}