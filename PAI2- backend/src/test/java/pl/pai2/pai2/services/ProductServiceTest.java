package pl.pai2.pai2.services;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import pl.pai2.pai2.domain.Category;
import pl.pai2.pai2.domain.Product;
import pl.pai2.pai2.repositories.ProductRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertFalse;


@RunWith(SpringRunner.class)
@SpringBootTest
public class ProductServiceTest {

    @Autowired
    ProductService productService;

    @MockBean
    ProductRepository productRepository;

    Category category;

    @Test
    public void saveOrUpdateProduct() {

        Product product = new Product();
        product.setIdProduct(1);
        product.setName("Name");
        product.setPrice(22.5);
        product.setDescription("Description");
        product.setImage("Image");
        product.setQuantity(1);
        product.setCategory(category);

        Mockito.when(productRepository.save(product)).thenReturn(product);

        assertThat(productService.saveOrUpdateProduct(product)).isEqualTo(product);

    }

    @Test
    public void findByName() {
        Product product = new Product();
        product.setIdProduct(1);
        product.setName("Name");
        product.setPrice(22.5);
        product.setDescription("Description");
        product.setImage("Image");
        product.setQuantity(1);
        product.setCategory(category);

        Product product1 = new Product();
        product1.setIdProduct(2);
        product1.setName("Name1");
        product1.setPrice(24.5);
        product1.setDescription("Description");
        product1.setImage("Image");
        product1.setQuantity(2);
        product1.setCategory(category);

        List<Product> productList = new ArrayList<>();
        productList.add(product);
        productList.add(product1);

        Mockito.when(productRepository.findByName("Name")).thenReturn(productList);

        assertThat(productService.findByName("Name")).isEqualTo(productList);
    }

    @Test
    public void findById() {
        Product product = new Product();
        product.setIdProduct(1);
        product.setName("Name");
        product.setPrice(22.5);
        product.setDescription("Description");
        product.setImage("Image");
        product.setQuantity(1);
        product.setCategory(category);

        Mockito.when(productRepository.findById(1)).thenReturn(product);

        assertThat(productService.findById(1)).isEqualTo(product);
    }

    @Test
    public void findAllProducts() {
        Product product = new Product();
        product.setIdProduct(1);
        product.setName("Name");
        product.setPrice(22.5);
        product.setDescription("Description");
        product.setImage("Image");
        product.setQuantity(1);
        product.setCategory(category);

        Product product1 = new Product();
        product1.setIdProduct(2);
        product1.setName("Name1");
        product1.setPrice(24.5);
        product1.setDescription("Description");
        product1.setImage("Image");
        product1.setQuantity(2);
        product1.setCategory(category);

        List<Product> productList = new ArrayList<>();
        productList.add(product);
        productList.add(product1);

        Mockito.when(productRepository.findAll()).thenReturn(productList);

        assertThat(productService.findAllProducts()).isEqualTo(productList);
    }
}