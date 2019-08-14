package pl.pai2.pai2.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.pai2.pai2.domain.Cart;
import pl.pai2.pai2.domain.User;

import java.util.List;

@Repository
public interface CartRepository extends CrudRepository<Cart, Long> {

    @Override
    List<Cart> findAll();

    Cart findByIdCart(Long id);
    List<Cart> findCartByUid(String uid);
}
