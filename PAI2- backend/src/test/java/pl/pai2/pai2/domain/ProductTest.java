package pl.pai2.pai2.domain;

import org.junit.Test;

import static org.junit.Assert.*;

public class ProductTest {

    Product p = new Product();
    Category cat = new Category();

    long lo;
    String s;
    double d;


    @Test
    public void setIdProduct() {
        lo = 124;
        p.setIdProduct(lo);
        assertEquals(lo, p.getIdProduct());
    }

    @Test
    public void getName() {
        assertEquals(null, p.getName());
    }

    @Test
    public void setName() {
        s = "Name";
        p.setName(s);
        assertEquals(s, p.getName());
    }

    @Test
    public void getPrice() {
        assertEquals(0.0, p.getPrice(), 0.0);
    }

    @Test
    public void setPrice() {
        d = 2.4;
        p.setPrice(d);
        assertEquals(d, p.getPrice(), 2.4);
    }

    @Test
    public void getDescription() {
        assertEquals(null, p.getDescription());
    }

    @Test
    public void setDescription() {
        s = "Description";
        p.setDescription(s);
        assertEquals(s, p.getDescription());
    }

    @Test
    public void getImage() {
        assertEquals(null, p.getImage());
    }

    @Test
    public void setImage() {
        s = "Image";
        p.setImage(s);
        assertEquals(s, p.getImage());
    }

    @Test
    public void getQuantity() {
        assertEquals(0, p.getQuantity());
    }

    @Test
    public void setQuantity() {
        int i = 3;
        p.setQuantity(i);
        assertEquals(i, p.getQuantity());
    }

    @Test
    public void getCategory() {
        assertEquals(null, p.getCategory());
    }

    @Test
    public void setCategory() {
        p.setCategory(cat);
        assertEquals(cat, p.getCategory());
    }

    @Test
    public void equals1() {
        Object o = new Object();

        assertEquals(false, p.equals(o));
    }

}