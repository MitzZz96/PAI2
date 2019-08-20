package pl.pai2.pai2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.pai2.pai2.domain.*;
import pl.pai2.pai2.exceptions.OrderNotDeliveredException;
import pl.pai2.pai2.exceptions.PaymentException;
import pl.pai2.pai2.exceptions.ProductNotFoundException;
import pl.pai2.pai2.repositories.CartRepository;
import pl.pai2.pai2.repositories.ProductOrderRepository;
import pl.pai2.pai2.repositories.UserRepository;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductOrderRepository productOrderRepository;

    @Autowired
    private  ProductService productService;


    public Cart createOrUpdateCart(Cart cart){
        return cartRepository.save(cart);
    }

    public Cart findCartById(Long id){
        Cart cart = cartRepository.findByIdCart(id);

        if(cart != null)
            return cart;
        else
            throw new ProductNotFoundException("Cart with id '" + id + "' not found");
    }

    public List<Cart> findAllCartsByUid(String uid){
        List<Cart> cart = cartRepository.findCartByUid(uid);

        if(cart != null)
            return cart;
        else
            throw new ProductNotFoundException("User with uid '" + uid + "' has no cart");
    }

// TODO : adekwatne metody do zmiany stanow, przetestowac ta nizej
    public void completeOrder(String uid, Cart cart){
        if(cart.getOrderState() == OrderState.SENT) {
            cart.setOrderState(OrderState.COMPLETED);
            cart.setDeliveryDate(new Date());

            cartRepository.save(cart);

            Cart newCart = new Cart();
            newCart.setUid(uid);
            newCart.setOrderState(OrderState.EMPTY);
            cartRepository.save(newCart);

        } else if(cart.getOrderState() == OrderState.AWAITING_PAYMENT)
            throw  new PaymentException("Waiting for payment");
        else
            throw new OrderNotDeliveredException("The order has not been delivered yet");
    }

    public void changeOrderState(String uid, OrderState orderState){
        Cart cart = findCurrentCartByUid(uid);
        if(orderState == OrderState.COMPLETED){
            completeOrder(uid, cart);
        } else if(orderState == OrderState.SENT){

            List<ProductOrder> orders = findCurrentProductOrders(uid);

            for (ProductOrder o : orders) {
                Product p = o.getProduct();
                System.out.println("cart : " + cart.getSummaryCost() + "  |  product : " + o.getSummaryPrice());
                cart.setSummaryCost(cart.getSummaryCost() + o.getSummaryPrice());
                p.setQuantity(p.getQuantity() - o.getQuantity());
                productService.saveOrUpdateProduct(p);
            }

            cart.setShipDate(new Date());
            cart.setOrderState(orderState);
            cartRepository.save(cart);
        } else {
            cart.setOrderState(orderState);
            cartRepository.save(cart);
        }
    }

    public Cart findCurrentCartByUid(String uid){
        List<Cart> cart = cartRepository.findCartByUid(uid);
        return cart.get(cart.size()-1);
    }

    public List<ProductOrder> findCurrentProductOrders(String uid){
        Cart cart = findCurrentCartByUid(uid);
        return productOrderRepository.findAllByCart(cart);
    }

}
