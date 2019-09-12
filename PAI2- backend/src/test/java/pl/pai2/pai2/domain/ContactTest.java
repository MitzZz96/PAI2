package pl.pai2.pai2.domain;

import org.junit.Test;

import static org.junit.Assert.*;

public class ContactTest {

    Contact con = new Contact();
    long l;
    int i;
    String s;

    @Test
    public void getIdContact() {
        assertEquals(l, con.getIdContact());
    }

    @Test
    public void setIdContact() {
        l = 4;
        con.setIdContact(l);
        assertEquals(l, con.getIdContact());
    }

    @Test
    public void getNumber1() {
        assertEquals(i, con.getNumber1());
    }

    @Test
    public void setNumber1() {
        i = 435;
        con.setNumber1(i);
        assertEquals(i, con.getNumber1());
    }

    @Test
    public void getNumber2() {
        assertEquals(i,con.getNumber2());
    }

    @Test
    public void setNumber2() {
        i = 235;
        con.setNumber2(i);
        assertEquals(i, con.getNumber2());
    }

    @Test
    public void getEmail() {
        assertEquals(s, con.getEmail());
    }

    @Test
    public void setEmail() {
        s = "email4@wp.pl";
        con.setEmail(s);
        assertEquals(s, con.getEmail());
    }
}