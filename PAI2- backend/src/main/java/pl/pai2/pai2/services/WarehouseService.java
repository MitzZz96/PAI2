package pl.pai2.pai2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.pai2.pai2.domain.Product;
import pl.pai2.pai2.domain.Warehouse;
import pl.pai2.pai2.exceptions.ProductNameException;
import pl.pai2.pai2.repositories.ProductRepository;
import pl.pai2.pai2.repositories.WarehouseRepository;

import java.util.List;

@Service
public class WarehouseService {

    @Autowired
    private WarehouseRepository warehouseRepository;

    @Autowired
    private ProductRepository productRepository;


    public Warehouse saveOrUpdateWarehouse(Warehouse warehouse){

        try {
            //warehouse.setName(warehouse.getName().toUpperCase());

            return warehouseRepository.save(warehouse);
        } catch (Exception e){
            throw new ProductNameException("Warehouse with name '"+ warehouse.getName().toUpperCase()+ "' already exists");
        }
    }

    public Warehouse findByName(String name){

        Warehouse warehouses = warehouseRepository.findByName(name);

        if(warehouses == null){
            throw new ProductNameException("Warehouse with name '"+ name +"' does not exists");
        }
        return warehouses;
    }

//    public List<Product> getAllWarehouseProducts(long idWarehouse){
//        Warehouse warehouse = warehouseRepository.findByIdWarehouse(idWarehouse);
//        List<Product> products = productRepository.findByWarehouse(warehouse);
//        if (products != null)
//            return products;
//
//        return null;
//    }

    public List<Warehouse> findAllWarehouses(){
        return warehouseRepository.findAll();
    }

}
