package pl.pai2.pai2.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.pai2.pai2.domain.Product;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

    List<Product> findByName(String name);

    @Override
    List<Product> findAll();
}