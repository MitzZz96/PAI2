package pl.pai2.pai2.services;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import pl.pai2.pai2.domain.Cart;
import pl.pai2.pai2.domain.OrderState;
import pl.pai2.pai2.domain.Product;
import pl.pai2.pai2.domain.ProductOrder;
import pl.pai2.pai2.repositories.AddressRepository;
import pl.pai2.pai2.repositories.CartRepository;
import pl.pai2.pai2.repositories.ProductOrderRepository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertFalse;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CartServiceTest {

    @Autowired
    private CartService cartService;

    @MockBean
    private CartRepository cartRepository;

    @MockBean
    private ProductOrderRepository productOrderRepository;

    @MockBean
    private ProductOrderService productOrderService;

    ProductOrder productOrder;

    Long l = new Long(1);
    Long l1 = new Long(2);
    String sd = "2007-02-15";
    String sd1 = "2007-02-15";
    Date d;
    Date d1;
    OrderState os;
    OrderState os1;
    Product product;

    @Test
    public void createOrUpdateCart() {
        try{
            SimpleDateFormat SDF = new SimpleDateFormat("yyyy-MM-dd");
            d = SDF.parse(sd);
        }catch(ParseException e){
            e.printStackTrace();
        }


        Cart cart = new Cart();
        cart.setIdCart(l);
        cart.setSummaryCost(234.5);
        cart.setDeliveryDate(d);
        cart.setShipDate(d);
        cart.setOrderState(os);
        cart.setUid("Uid");

        Mockito.when(cartRepository.save(cart)).thenReturn(cart);

        assertThat(cartService.createOrUpdateCart(cart)).isEqualTo(cart);
    }

    @Test
    public void findCartById() {
        try{
            SimpleDateFormat SDF = new SimpleDateFormat("yyyy-MM-dd");
            d = SDF.parse(sd);
        }catch(ParseException e){
            e.printStackTrace();
        }

        Cart cart = new Cart();
        cart.setIdCart(l);
        cart.setSummaryCost(234.5);
        cart.setDeliveryDate(d);
        cart.setShipDate(d);
        cart.setOrderState(os);
        cart.setUid("Uid");

        Mockito.when(cartRepository.findByIdCart(l)).thenReturn(cart);

        assertThat(cartService.findCartById(l)).isEqualTo(cart);
    }

    @Test
    public void findAllCartsByUid() {
        try{
            SimpleDateFormat SDF = new SimpleDateFormat("yyyy-MM-dd");
            d = SDF.parse(sd);
        }catch(ParseException e){
            e.printStackTrace();
        }
        Cart cart = new Cart();
        cart.setIdCart(l);
        cart.setSummaryCost(234.5);
        cart.setDeliveryDate(d);
        cart.setShipDate(d);
        cart.setOrderState(os);
        cart.setUid("Uid");

        try{
            SimpleDateFormat SDF = new SimpleDateFormat("yyyy-MM-dd");
            d = SDF.parse(sd1);
        }catch(ParseException e){
            e.printStackTrace();
        }
        Cart cart1 = new Cart();
        cart1.setIdCart(l1);
        cart1.setSummaryCost(234.5);
        cart1.setDeliveryDate(d);
        cart1.setShipDate(d);
        cart1.setOrderState(os);
        cart1.setUid("Uid");

        List<Cart> cartList = new ArrayList<>();
        cartList.add(cart);
        cartList.add(cart1);

        Mockito.when(cartRepository.findCartByUid("Uid")).thenReturn(cartList);

        assertThat(cartService.findAllCartsByUid("Uid")).isEqualTo(cartList);
    }

    @Test
    public void findAll() {
        try{
            SimpleDateFormat SDF = new SimpleDateFormat("yyyy-MM-dd");
            d = SDF.parse(sd);
        }catch(ParseException e){
            e.printStackTrace();
        }
        Cart cart = new Cart();
        cart.setIdCart(l);
        cart.setSummaryCost(234.5);
        cart.setDeliveryDate(d);
        cart.setShipDate(d);
        cart.setOrderState(os);
        cart.setUid("Uid");

        try{
            SimpleDateFormat SDF = new SimpleDateFormat("yyyy-MM-dd");
            d = SDF.parse(sd1);
        }catch(ParseException e){
            e.printStackTrace();
        }
        Cart cart1 = new Cart();
        cart1.setIdCart(l1);
        cart1.setSummaryCost(234.5);
        cart1.setDeliveryDate(d);
        cart1.setShipDate(d);
        cart1.setOrderState(os);
        cart1.setUid("Uid");

        List<Cart> cartList = new ArrayList<>();
        cartList.add(cart);
        cartList.add(cart1);

        Mockito.when(cartRepository.findAll()).thenReturn(cartList);

        assertThat(cartService.findAll()).isEqualTo(cartList);
    }

    @Test
    public void changeCartOrderState() {
        try{
            SimpleDateFormat SDF = new SimpleDateFormat("yyyy-MM-dd");
            d = SDF.parse(sd);
        }catch(ParseException e){
            e.printStackTrace();
        }
        Cart cart = new Cart();
        cart.setIdCart(l);
        cart.setSummaryCost(234.5);
        cart.setDeliveryDate(d);
        cart.setShipDate(d);
        cart.setOrderState(os);
        cart.setUid("Uid");



        Mockito.when(cartRepository.findByIdCart(l)).thenReturn(cart);
        Mockito.when(cartRepository.existsById(l)).thenReturn(true);


        cartService.changeCartOrderState(l, os1);

        assertThat(cartService.findCartById(l)).isEqualTo(cart);

    }

    @Test
    public void findCartProductOrders() {
        try{
            SimpleDateFormat SDF = new SimpleDateFormat("yyyy-MM-dd");
            d = SDF.parse(sd);
        }catch(ParseException e){
            e.printStackTrace();
        }
        Cart cart = new Cart();
        cart.setIdCart(l);
        cart.setSummaryCost(234.5);
        cart.setDeliveryDate(d);
        cart.setShipDate(d);
        cart.setOrderState(os);
        cart.setUid("Uid");


        List<ProductOrder> productOrdersList = new ArrayList<>();

        Mockito.when(cartRepository.findByIdCart(l)).thenReturn(cart);
        Mockito.when(productOrderRepository.findAllByCart(cart)).thenReturn(productOrdersList);

        assertThat(cartService.findCartProductOrders(l)).isEqualTo(productOrdersList);


    }

    @Test
    public void findCurrentCartByUid() {
        try{
            SimpleDateFormat SDF = new SimpleDateFormat("yyyy-MM-dd");
            d = SDF.parse(sd);
        }catch(ParseException e){
            e.printStackTrace();
        }
        Cart cart = new Cart();
        cart.setIdCart(l);
        cart.setSummaryCost(234.5);
        cart.setDeliveryDate(d);
        cart.setShipDate(d);
        cart.setOrderState(os);
        cart.setUid("Uid");

        List<Cart> cart1 = new ArrayList<>();
        cart1.add(cart);

        Mockito.when(cartRepository.findCartByUid("Uid")).thenReturn(cart1);

        assertThat(cartService.findCurrentCartByUid("Uid")).isEqualTo(cart);

    }

    @Test
    public void findCurrentProductOrders() {
        try{
            SimpleDateFormat SDF = new SimpleDateFormat("yyyy-MM-dd");
            d = SDF.parse(sd);
            d1 = SDF.parse(sd1);
        }catch(ParseException e){
            e.printStackTrace();
        }
        Cart cart = new Cart();
        cart.setIdCart(l);
        cart.setSummaryCost(234.5);
        cart.setDeliveryDate(d);
        cart.setShipDate(d1);
        cart.setOrderState(os);
        cart.setUid("Uid");

        List<ProductOrder> productOrdersList = new ArrayList<>();


        List<Cart> cartList = cartRepository.findCartByUid("Uid");
        cartList.add(cart);

        Mockito.when(cartRepository.findCartByUid("Uid")).thenReturn(cartList);

        Mockito.when(productOrderRepository.findAllByCart(cart)).thenReturn(productOrdersList);

        assertThat(cartService.findCurrentProductOrders("Uid")).isEqualTo(productOrdersList);

    }
}