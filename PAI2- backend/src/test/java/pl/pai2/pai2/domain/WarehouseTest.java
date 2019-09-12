package pl.pai2.pai2.domain;

import org.junit.Test;

import static org.junit.Assert.*;

public class WarehouseTest {

    Warehouse w = new Warehouse();
    long l;
    String s;

    @Test
    public void getIdWarehouse() {
        assertEquals(0, w.getIdWarehouse());
    }

    @Test
    public void setIdWarehouse() {
        l = 2376;
        w.setIdWarehouse(l);
        assertEquals(l, w.getIdWarehouse());
    }

    @Test
    public void getName() {
        assertEquals(null, w.getName());
    }

    @Test
    public void setName() {
        s = "Name";
        w.setName(s);
        assertEquals(s, w.getName());
    }

    @Test
    public void equals1() {
        Object o = new Object();

        assertEquals(false,w.equals(o));
    }

    @Test
    public void hashCode1() {
        assertEquals(961,w.hashCode());
    }
}