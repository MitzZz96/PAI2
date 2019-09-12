package pl.pai2.pai2.domain;

import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;

public class WaypointTest {

    Waypoint w = new Waypoint();
    String s;
    ArrayList<Features> af = new ArrayList<Features>();
    ArrayList<String> as = new ArrayList<String>();


    @Test
    public void getFeatures() {
        assertEquals(af, w.getFeatures());
    }

    @Test
    public void setFeatures() {
        w.setFeatures(af);
        assertEquals(af, w.getFeatures());
    }

    @Test
    public void getQuery() {
        assertEquals(as, w.getQuery());
    }

    @Test
    public void setQuery() {
        w.setQuery(as);
        assertEquals(as, w.getQuery());
    }

    @Test
    public void getType() {
        assertEquals(null, w.getType());
    }

    @Test
    public void getAttribution() {
        assertEquals(null, w.getAttribution());
    }

    @Test
    public void setType() {
        s = "Type";
        w.setType(s);
        assertEquals(s, w.getType());
    }

    @Test
    public void setAttribution() {
        s = "Attribution";
        w.setAttribution(s);
        assertEquals(s, w.getAttribution());
    }
}