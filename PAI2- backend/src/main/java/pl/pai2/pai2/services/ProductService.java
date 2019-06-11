package pl.pai2.pai2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.pai2.pai2.domain.Product;
import pl.pai2.pai2.exceptions.ProductNameException;
import pl.pai2.pai2.repositories.ProductRepository;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product saveOrUpdateProduct(Product product){

        try {
            product.setName(product.getName().toUpperCase());

            return productRepository.save(product);
        } catch (Exception e){
            throw new ProductNameException("Product Name '"+ product.getName().toUpperCase()+ "' already exists");
        }
    }

    public List<Product> findByProductName(String productName){

        List<Product> products = productRepository.findByProductName(productName);

        if(products == null){
            throw new ProductNameException("Product Name '"+ productName +"' does not exists");
        }
        return products;
    }

    public List<Product> findAllProducts(){
        return productRepository.findAll();
    }
}
