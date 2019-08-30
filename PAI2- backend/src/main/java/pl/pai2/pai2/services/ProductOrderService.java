package pl.pai2.pai2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.pai2.pai2.domain.Cart;
import pl.pai2.pai2.domain.OrderState;
import pl.pai2.pai2.domain.ProductOrder;
import pl.pai2.pai2.exceptions.DataNotFoundException;
import pl.pai2.pai2.repositories.ProductOrderRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductOrderService {

    @Autowired
    private ProductOrderRepository productOrderRepository;

    @Autowired
    private CartService cartService;

    public ProductOrder saveOrUpdateProductOrder(ProductOrder productOrder){
        System.out.println("Cart status : " + productOrder.getCart().getIdCart());

        Cart cart = cartService.findCartById(productOrder.getCart().getIdCart());

        cart.setSummaryCost(cart.getSummaryCost() + productOrder.getSummaryPrice());
        if(cart.getOrderState() == OrderState.EMPTY)
            cart.setOrderState(OrderState.PENDING);

        cartService.createOrUpdateCart(cart);

        for(ProductOrder p : findByCart(cart)){
            if(p.getProduct().getIdProduct() == productOrder.getProduct().getIdProduct()){
                p.setQuantity(p.getQuantity() + productOrder.getQuantity());
                p.setSummaryPrice(p.getSummaryPrice() + productOrder.getSummaryPrice());
                System.out.println("ProductOrder duplicate found.");
                return productOrderRepository.save(p);
            } else
                System.out.println("ProductOrder duplicate not found.");
        }
        return productOrderRepository.save(productOrder);
    }

    public void removeProductOrder(Long id){
        Optional<ProductOrder> productOrder = productOrderRepository.findById(id);

        if(productOrder.isPresent()) {
            Cart cart = cartService.findCartById(productOrder.get().getCart().getIdCart());
            cart.setSummaryCost(cart.getSummaryCost() - productOrder.get().getSummaryPrice());
            cartService.createOrUpdateCart(cart);
            productOrderRepository.delete(productOrder.get());
            if(findAll().isEmpty())
                cartService.changeCartOrderState(productOrder.get().getCart().getIdCart(), OrderState.EMPTY);
        } else
            throw new DataNotFoundException("ProductOrder with id '" + id + "' not found");
    }

    public List<ProductOrder> findAll(){
        return productOrderRepository.findAll();
    }

    public Optional<ProductOrder> findById(Long id){
        Optional<ProductOrder> productOrder = productOrderRepository.findById(id);

        if(productOrder == null)
            throw new DataNotFoundException("ProductOrder with id '" + id + "' not found");
        else
            return productOrder;
    }

    public List<ProductOrder> findByCart(Cart cart){
        List<ProductOrder> productOrders = productOrderRepository.findAllByCart(cart);

        if(productOrders == null)
            throw new DataNotFoundException("No products found in the cart");
        else
            return productOrders;
    }


}
