package pl.pai2.pai2.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.pai2.pai2.domain.Product;
import pl.pai2.pai2.services.MapValidationErrorService;
import pl.pai2.pai2.services.ProductService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/product")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewProduct(@Valid @RequestBody Product product, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(result);
        if(errorMap!=null) return errorMap;

        Product product1 = productService.saveOrUpdateProduct(product);
        return new ResponseEntity<Product>(product, HttpStatus.CREATED);
    }

    @GetMapping("/{productName}")
    public ResponseEntity<?> getProductName(@PathVariable String productName){

        List<Product> products = productService.findByProductName(productName);

        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Product> getAllProducts(){return productService.findAllProducts();}
}
