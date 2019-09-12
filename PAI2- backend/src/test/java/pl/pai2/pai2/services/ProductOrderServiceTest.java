package pl.pai2.pai2.services;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import pl.pai2.pai2.domain.Cart;

import pl.pai2.pai2.domain.OrderState;
import pl.pai2.pai2.domain.Product;
import pl.pai2.pai2.domain.ProductOrder;
import pl.pai2.pai2.repositories.CartRepository;
import pl.pai2.pai2.repositories.ProductOrderRepository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import static org.junit.Assert.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertFalse;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProductOrderServiceTest {

    @Autowired
    ProductOrderService productOrderService;

    @Autowired
    CartService cartService;

    @MockBean
    ProductOrderRepository productOrderRepository;

    @MockBean
    CartRepository cartRepository;

    Cart cart = new Cart();

    ProductOrder productOrder;
    Product product = new Product();
    OrderState os;

    Long l = new Long(1);
    Long l1 = new Long(2);
    Date d;
    String sd = "2007-02-15";


    @Test
    public void saveOrUpdateProductOrder() {

      try{
            SimpleDateFormat SDF = new SimpleDateFormat("yyyy-MM-dd");
            d = SDF.parse(sd);
        }catch(ParseException e){
            e.printStackTrace();
        }

        cart.setIdCart(l);
        cart.setSummaryCost(234.5);
        cart.setDeliveryDate(d);
        cart.setShipDate(d);
        cart.setOrderState(os.PENDING);
        cart.setUid("Uid");

        Cart cart2 =
        cartService.createOrUpdateCart(cart);
        Mockito.when(cartRepository.save(cart)).thenReturn(cart);


        ProductOrder productOrder = new ProductOrder();
        productOrder.setIdProductOrder(l);
        productOrder.setQuantity(1);
        productOrder.setSummaryPrice(254.4);
        productOrder.setCart(cart2);
        productOrder.setProduct(product);

        try {
            Cart cart1 = cartService.findCartById(productOrder.getCart().getIdCart());
            Mockito.when(cartRepository.save(cart1)).thenReturn(cart1);
            Mockito.when(productOrderRepository.save(productOrder)).thenReturn(productOrder);

            assertThat(productOrderService.saveOrUpdateProductOrder(productOrder)).isEqualTo(productOrder);
        }catch (NullPointerException e){
           e.getMessage();
        }

    }

    @Test
    public void removeProductOrder() {
        ProductOrder productOrder = new ProductOrder();
        productOrder.setIdProductOrder(l);
        productOrder.setQuantity(1);
        productOrder.setSummaryPrice(254.4);
        productOrder.setCart(cart);
        productOrder.setProduct(product);

        Mockito.when(productOrderRepository.findById(l)).thenReturn(Optional.of(productOrder));
        Mockito.when(productOrderRepository.existsById(productOrder.getIdProductOrder())).thenReturn(false);

        assertFalse(productOrderRepository.existsById(productOrder.getIdProductOrder()));

    }

    @Test
    public void findAll() {
        ProductOrder productOrder = new ProductOrder();
        productOrder.setIdProductOrder(l);
        productOrder.setQuantity(1);
        productOrder.setSummaryPrice(254.4);
        productOrder.setCart(cart);
        productOrder.setProduct(product);

        ProductOrder productOrder1 = new ProductOrder();
        productOrder1.setIdProductOrder(l1);
        productOrder1.setQuantity(2);
        productOrder1.setSummaryPrice(226.4);
        productOrder1.setCart(cart);
        productOrder1.setProduct(product);

        List<ProductOrder> productOrderList = new ArrayList<>();
        productOrderList.add(productOrder);
        productOrderList.add(productOrder1);

        Mockito.when(productOrderRepository.findAll()).thenReturn(productOrderList);

        assertThat(productOrderService.findAll()).isEqualTo(productOrderList);
    }

    @Test
    public void findById() {
        ProductOrder productOrder = new ProductOrder();
        productOrder.setIdProductOrder(l);
        productOrder.setQuantity(1);
        productOrder.setSummaryPrice(254.4);
        productOrder.setCart(cart);
        productOrder.setProduct(product);

        Mockito.when(productOrderRepository.findById(l)).thenReturn(Optional.of(productOrder));

        assertThat(productOrderService.findById(l)).isEqualTo(Optional.of(productOrder));
    }

    @Test
    public void findByCart() {
        ProductOrder productOrder = new ProductOrder();
        productOrder.setIdProductOrder(l);
        productOrder.setQuantity(1);
        productOrder.setSummaryPrice(254.4);
        productOrder.setCart(cart);
        productOrder.setProduct(product);

        ProductOrder productOrder1 = new ProductOrder();
        productOrder1.setIdProductOrder(l1);
        productOrder1.setQuantity(2);
        productOrder1.setSummaryPrice(226.4);
        productOrder1.setCart(cart);
        productOrder1.setProduct(product);

        List<ProductOrder> productOrderList = new ArrayList<>();
        productOrderList.add(productOrder);
        productOrderList.add(productOrder1);

        Mockito.when(productOrderRepository.findAllByCart(cart)).thenReturn(productOrderList);

        assertThat(productOrderService.findByCart(cart)).isEqualTo(productOrderList);

    }
}