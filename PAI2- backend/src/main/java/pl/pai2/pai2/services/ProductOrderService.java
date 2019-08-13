package pl.pai2.pai2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.pai2.pai2.domain.Cart;
import pl.pai2.pai2.domain.Product;
import pl.pai2.pai2.domain.ProductOrder;
import pl.pai2.pai2.exceptions.ProductNotFoundException;
import pl.pai2.pai2.repositories.ProductOrderRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductOrderService {

    @Autowired
    private ProductOrderRepository productOrderRepository;

    public ProductOrder addProductOrder(ProductOrder productOrder){
        return productOrderRepository.save(productOrder);
    }

    public void removeProductOrder(Long id){
        Optional<ProductOrder> productOrder = productOrderRepository.findById(id);

        if(productOrder.isPresent())
            productOrderRepository.delete(productOrder.get());
        else
            throw new ProductNotFoundException("ProductOrder with id '" + id + "' not found");
    }

    public Optional<ProductOrder> findById(Long id){
        Optional<ProductOrder> productOrder = productOrderRepository.findById(id);

        if(productOrder == null)
            throw new ProductNotFoundException("ProductOrder with id '" + id + "' not found");
        else
            return productOrder;
    }

    public List<ProductOrder> findByCart(Cart cart){
        List<ProductOrder> productOrders = productOrderRepository.findAllByCart(cart);

        if(productOrders == null)
            throw new ProductNotFoundException("No products found in the cart");
        else
            return productOrders;
    }


}