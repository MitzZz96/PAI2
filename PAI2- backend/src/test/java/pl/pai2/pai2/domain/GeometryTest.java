package pl.pai2.pai2.domain;

import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;

public class GeometryTest {

    Geometry g = new Geometry();
    ArrayList<Object> array = new ArrayList<Object>();
    String s;

    @Test
    public void getCoordinates() {
        assertEquals(array, g.getCoordinates());
    }

    @Test
    public void isInterpolated() {
        assertEquals(false, g.isInterpolated());
    }

    @Test
    public void isOmitted() {
        assertEquals(false, g.isOmitted());
    }

    @Test
    public void setOmitted() {
        g.setOmitted(true);
        assertEquals(true, g.isOmitted());
    }

    @Test
    public void setInterpolated() {
        g.setInterpolated(true);
        assertEquals(true, g.isInterpolated());
    }

    @Test
    public void setCoordinates() {
        g.setCoordinates(array);
        assertEquals(array, g.getCoordinates());
    }

    @Test
    public void getType() {
        assertEquals(null, g.getType());
    }

    @Test
    public void setType() {
        s = "Type";
        g.setType(s);
        assertEquals(s, g.getType());
    }
}