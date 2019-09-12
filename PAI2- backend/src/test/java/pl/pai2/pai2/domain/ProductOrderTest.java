package pl.pai2.pai2.domain;

import org.junit.Test;

import static org.junit.Assert.*;

public class ProductOrderTest {

    ProductOrder po = new ProductOrder();
    Long l = new Long(10);
    int i;
    Cart cart = new Cart();
    Product pro = new Product();

    @Test
    public void getIdProductOrder() {
        assertEquals(null, po.getIdProductOrder());
    }

    @Test
    public void setIdProductOrder() {
        po.setIdProductOrder(l);
        assertEquals(l, po.getIdProductOrder());
    }

    @Test
    public void getQuantity() {
        assertEquals(0, po.getQuantity());
    }

    @Test
    public void setQuantity() {
        i = 5;
        po.setQuantity(i);
        assertEquals(i, po.getQuantity());
    }

    @Test
    public void getSummaryPrice() {
        assertEquals(0.0, po.getSummaryPrice(), 0.0);
    }

    @Test
    public void setSummaryPrice() {
        double d = 3.2;
        po.setSummaryPrice(d);
        assertEquals(d, po.getSummaryPrice(), d);
    }

    @Test
    public void getCart() {
        assertEquals(null, po.getCart());
    }

    @Test
    public void setCart() {
        po.setCart(cart);
        assertEquals(cart, po.getCart());
    }

    @Test
    public void getProduct() {
        assertEquals(null, po.getProduct());
    }

    @Test
    public void setProduct() {
        po.setProduct(pro);
        assertEquals(pro, po.getProduct());
    }
}