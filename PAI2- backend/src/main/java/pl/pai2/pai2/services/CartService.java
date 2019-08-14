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

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductOrderRepository productOrderRepository;

    @Autowired
    private  ProductService productService;


    public Cart createNewCart(Cart cart){
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


    public void completeOrder(String uid){
        Cart cart = findCurrentCartByUid(uid);
        if(cart.getOrderState() == OrderState.SENT) {
            cart.setOrderState(OrderState.COMPLETED);

            List<ProductOrder> orders = findCurrentProductOrders(uid);

            for (ProductOrder o : orders) {
                Product p = o.getProduct();
                p.setQuantity(p.getQuantity() - o.getQuantity());
                productService.saveOrUpdateProduct(p);
            }
        } else if(cart.getOrderState() == OrderState.AWAITING_PAYMENT)
            throw  new PaymentException("Waiting for payment");
        else
            throw new OrderNotDeliveredException("The order has not been delivered yet");
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
