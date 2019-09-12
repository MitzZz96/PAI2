package pl.pai2.pai2.domain;

import org.junit.Test;

import static org.junit.Assert.*;

public class CategoryTest {

    Category C = new Category();

    Long l = new Long(2);
    String s;
    @Test
    public void getIdCategory() {
        assertEquals(null, C.getIdCategory());
    }

    @Test
    public void setIdCategory() {
        C.setIdCategory(l);
        assertEquals(l, C.getIdCategory());
    }

    @Test
    public void getName() {
        assertEquals(s, C.getName());
    }

    @Test
    public void setName() {
        s = "mięsa";
        C.setName(s);
        assertEquals(s, C.getName());
    }
}