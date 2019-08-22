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
            //product.setName(product.getName().toUpperCase());

            return productRepository.save(product);
        } catch (Exception e){
            throw new ProductNameException("Product Name '"+ product.getName().toUpperCase()+ "' already exists");
        }
    }

    public List<Product> findByName(String name){

        List<Product> products = productRepository.findByName(name);

        if(products == null){
            throw new ProductNameException("Product Name '"+ name +"' does not exists");
        }
        return products;
    }

    public Product findById(long idProduct){

        Product product = productRepository.findById(idProduct);

        if(product == null){
            throw new ProductNameException("Product Name '"+ idProduct +"' does not exists");
        }
        return product;
    }

    public List<Product> findAllProducts(){
        return productRepository.findAll();
    }
}
