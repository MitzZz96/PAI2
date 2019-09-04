package pl.pai2.pai2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.pai2.pai2.domain.*;
import pl.pai2.pai2.exceptions.OrderNotSentException;
import pl.pai2.pai2.exceptions.PaymentException;
import pl.pai2.pai2.exceptions.DataNotFoundException;
import pl.pai2.pai2.repositories.CartRepository;
import pl.pai2.pai2.repositories.ProductOrderRepository;

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
            throw new DataNotFoundException("Cart with id '" + id + "' not found");
    }

    public List<Cart> findAllCartsByUid(String uid){
        List<Cart> cart = cartRepository.findCartByUid(uid);

        if(cart != null)
            return cart;
        else
            throw new DataNotFoundException("User with uid '" + uid + "' has no cart");
    }

    public List<Cart> findAll(){
        return cartRepository.findAll();
    }

    public void changeCartOrderState(Long id, OrderState orderState) {
        Cart cart = findCartById(id);
        if(orderState == OrderState.PAID){
            List<ProductOrder> orders = findCartProductOrders(id);

            if(orders.isEmpty())
                throw new DataNotFoundException("No products in cart");

            for (ProductOrder o : orders) {
                Product p = o.getProduct();
                System.out.println("cart : " + cart.getSummaryCost() + "  |  product : " + o.getSummaryPrice());
                p.setQuantity(p.getQuantity() - o.getQuantity());
                productService.saveOrUpdateProduct(p);
            }

            cart.setOrderState(orderState);
            cartRepository.save(cart);

            Cart newCart = new Cart();
            newCart.setUid(cart.getUid());
            newCart.setOrderState(OrderState.EMPTY);
            cartRepository.save(newCart);
        } else if(orderState == OrderState.SENT){
            if(cart.getOrderState() != OrderState.PAID)
                throw new PaymentException("Waiting for payment");

            cart.setShipDate(new Date());
            cart.setOrderState(orderState);
            cartRepository.save(cart);
        } else if(orderState == OrderState.COMPLETED){
            if(cart.getOrderState() != OrderState.SENT)
                throw new OrderNotSentException("Order has not been shipped yet");

            cart.setOrderState(orderState);
            cart.setDeliveryDate(new Date());
            cartRepository.save(cart);
        } else if(orderState == OrderState.CANCELLED) {
            cart.setOrderState(orderState);
            cartRepository.save(cart);

            Cart newCart = new Cart();
            newCart.setUid(cart.getUid());
            newCart.setOrderState(OrderState.EMPTY);
            cartRepository.save(newCart);
        } else {
            cart.setOrderState(orderState);
            cartRepository.save(cart);
        }
    }

    public List<ProductOrder> findCartProductOrders(Long id){
        Cart cart = findCartById(id);
        return productOrderRepository.findAllByCart(cart);
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
