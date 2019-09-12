package pl.pai2.pai2.domain;

import org.junit.Test;

import java.text.ParseException;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Locale;

import static org.junit.Assert.*;

public class CartTest {

    Cart c = new Cart();
    Object t = new Object();
    OrderState o;

    String sd = "Tue May/07 00:00:00 CEST 2019";
    Long l = new Long(10);
    Date d;
    String s = "25.140.13.156";
    @Test
    public void getIdCart() {
        assertEquals(null, c.getIdCart());
    }

    @Test
    public void setIdCart() {
        c.setIdCart(l);
        assertEquals(l, c.getIdCart());
    }

    @Test
    public void getSummaryCost() {

        assertEquals(0.0, c.getSummaryCost(), 0.0);

    }

    @Test
    public void setSummaryCost() {
        c.setSummaryCost(10.0);
        assertEquals(10.0,c.getSummaryCost(),0.0);
    }

    @Test
    public void getDeliveryDate() {
        try{
            SimpleDateFormat SDF = new SimpleDateFormat("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ENGLISH);
           d = SDF.parse(sd);
        }catch(ParseException e){
            e.printStackTrace();
        }
        assertEquals(d, c.getDeliveryDate());

    }

    @Test
    public void setDeliveryDate() {
        c.setDeliveryDate(d);
        assertEquals(d, c.getDeliveryDate());
    }

    @Test
    public void getShipDate() {
        try{
            SimpleDateFormat SDF = new SimpleDateFormat("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ENGLISH);
            d = SDF.parse(sd);
        }catch(ParseException e){
            e.printStackTrace();
        }
        assertEquals(d, c.getShipDate());
    }

    @Test
    public void setShipDate() {
        c.setShipDate(d);
        assertEquals(d, c.getShipDate());
    }

    @Test
    public void getOrderState() {
        assertEquals(o, c.getOrderState());
    }

    @Test
    public void setOrderState() {
        c.setOrderState(o);
        assertEquals(o,c.getOrderState());
    }

    @Test
    public void getUid() {
        assertEquals(null, c.getUid());
    }

    @Test
    public void setUid() {
        c.setUid(s);
        assertEquals(s,c.getUid());
    }
}