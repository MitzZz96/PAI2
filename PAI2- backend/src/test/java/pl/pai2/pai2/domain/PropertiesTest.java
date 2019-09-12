package pl.pai2.pai2.domain;

import org.junit.Test;

import static org.junit.Assert.*;

public class PropertiesTest {

    Properties p = new Properties();
    String s;

    @Test
    public void isLandmark() {
        assertEquals(false, p.isLandmark());
    }

    @Test
    public void setLandmark() {
        p.setLandmark(true);
        assertEquals(true, p.isLandmark());
    }

    @Test
    public void getAddress() {
        assertEquals(null, p.getAddress());
    }

    @Test
    public void setAddress() {
        s = "Address";
        p.setAddress(s);
        assertEquals(s, p.getAddress());
    }

    @Test
    public void getCategory() {
        assertEquals(null, p.getCategory());
    }

    @Test
    public void setCategory() {
        s = "Category";
        p.setCategory(s);
        assertEquals(s, p.getCategory());
    }

    @Test
    public void getMaki() {
        assertEquals(null, p.getMaki());
    }

    @Test
    public void setMaki() {
        s = "Maki";
        p.setMaki(s);
        assertEquals(s, p.getMaki());
    }
}