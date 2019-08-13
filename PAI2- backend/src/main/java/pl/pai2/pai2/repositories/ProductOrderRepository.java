package pl.pai2.pai2.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.pai2.pai2.domain.Cart;
import pl.pai2.pai2.domain.ProductOrder;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductOrderRepository extends CrudRepository<ProductOrder, Long> {

    List<ProductOrder> findAllByCart(Cart cart);

    @Override
    Optional<ProductOrder> findById(Long aLong);

    @Override
    List<ProductOrder> findAll();
}
