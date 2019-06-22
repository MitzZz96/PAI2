package pl.pai2.pai2.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.pai2.pai2.domain.Warehouse;

import java.util.List;

@Repository
public interface WarehouseRepository extends CrudRepository<Warehouse, Long> {

    Warehouse findByName(String name);
    Warehouse findByIdWarehouse(long idWarehouse);

    @Override
    List<Warehouse> findAll();
}
