package pl.pai2.pai2.domain;

import org.junit.Test;

import java.lang.reflect.Array;
import java.util.ArrayList;

import static org.junit.Assert.*;

public class FeaturesTest {

    Features f = new Features();
    String s;
    float flo;
    ArrayList<Object> array = new ArrayList<Object>();
    ArrayList<Float> arrayFloat = new ArrayList<Float>();
    Properties prop = new Properties();
    Geometry geo = new Geometry();

    @Test
    public void getAddress() {
        assertEquals(s, f.getAddress());
    }

    @Test
    public void setAddress() {
        s = "Kielce";
        f.setAddress(s);
        assertEquals(s, f.getAddress());
    }

    @Test
    public void getMatching_text() {
        assertEquals(s,f.getMatching_text());
    }

    @Test
    public void setMatching_text() {
        s = "Matching";
        f.setMatching_text(s);
        assertEquals(s, f.getMatching_text());
    }

    @Test
    public void getMatching_place_name() {
        assertEquals(s, f.getMatching_place_name());
    }

    @Test
    public void setMatching_place_name() {
        s ="Place_name";
        f.setMatching_place_name(s);
        assertEquals(s, f.getMatching_place_name());
    }

    @Test
    public void getPlace_type() {
        assertEquals(array, f.getPlace_type());
    }

    @Test
    public void setPlace_type() {
        f.setPlace_type(array);
        assertEquals(array,f.getPlace_type());
    }

    @Test
    public void getPropertiesObject() {
        assertEquals(null, f.getPropertiesObject());
    }

    @Test
    public void setPropertiesObject() {
        f.setPropertiesObject(prop);
        assertEquals(prop, f.getPropertiesObject());
    }

    @Test
    public void getBbox() {
        assertEquals(array, f.getBbox());
    }

    @Test
    public void setBbox() {
        f.setBbox(array);
        assertEquals(array,f.getBbox());
    }

    @Test
    public void getCenter() {
        assertEquals(arrayFloat, f.getCenter());
    }

    @Test
    public void setCenter() {
        f.setCenter(arrayFloat);
        assertEquals(array,f.getCenter());
    }

    @Test
    public void getGeometryObject() {
        assertEquals(null, f.getGeometryObject());
    }

    @Test
    public void setGeometryObject() {
        f.setGeometryObject(geo);
        assertEquals(geo, f.getGeometryObject());
    }

    @Test
    public void getContext() {
        assertEquals(array, f.getContext());
    }

    @Test
    public void setContext() {
        f.setBbox(array);
        assertEquals(array,f.getContext());
    }

    @Test
    public void getId() {
        assertEquals(s, f.getId());
    }

    @Test
    public void getType() {
        assertEquals(s, f.getType());
    }

    @Test
    public void getRelevance() {
        assertEquals(flo, f.getRelevance(), flo);
    }

    @Test
    public void getProperties() {
        assertEquals(null, f.getProperties());
    }

    @Test
    public void getText() {
        assertEquals(s, f.getText());
    }

    @Test
    public void getPlace_name() {
        assertEquals(s, f.getPlace_name());
    }

    @Test
    public void getGeometry() {
        assertEquals(null, f.getGeometry());
    }

    @Test
    public void setId() {
        s = "Id";
        f.setId(s);
        assertEquals(s, f.getId());
    }

    @Test
    public void setType() {
        s = "Type";
        f.setType(s);
        assertEquals(s, f.getType());
    }

    @Test
    public void setRelevance() {
        flo = 12;
        f.setRelevance(flo);
        assertEquals(flo, f.getRelevance(), flo);
    }

    @Test
    public void setProperties() {
        f.setProperties(prop);
        assertEquals(prop, f.getProperties());
    }

    @Test
    public void setText() {
        s = "Text";
        f.setType(s);
        assertEquals(s, f.getType());
    }

    @Test
    public void setPlace_name() {
        s = "Place";
        f.setType(s);
        assertEquals(s, f.getType());
    }

    @Test
    public void setGeometry() {
        f.setGeometry(geo);
        assertEquals(geo, f.getGeometry());
    }
}