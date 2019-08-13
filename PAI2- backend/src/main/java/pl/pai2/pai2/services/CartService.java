package pl.pai2.pai2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.pai2.pai2.domain.Cart;
import pl.pai2.pai2.domain.ProductOrder;
import pl.pai2.pai2.domain.User;
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
    private UserRepository userRepository;

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

    public List<Cart> findCartByUser(User user){
        List<Cart> cart = cartRepository.findByUser(user);

        if(cart != null)
            return cart;
        else
            throw new ProductNotFoundException("User with email '" + user.getContact().getEmail() + "' has no cart");
    }

    public Cart findUserCurrentCartByUid(String uid){
        return findUserCurrentCart(userRepository.findClientByUid(uid));
    }

    public Cart findUserCurrentCart(User user){
        List<Cart> cart = findCartByUser(user);
        return cart.get(cart.size()-1);
    }

    public List<ProductOrder> findCurrentProductOrders(String uid){
        Cart cart = findUserCurrentCartByUid(uid);
        return productOrderRepository.findAllByCart(cart);
    }

}
