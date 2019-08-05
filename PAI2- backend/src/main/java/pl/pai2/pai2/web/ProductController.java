package pl.pai2.pai2.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.pai2.pai2.domain.Category;
import pl.pai2.pai2.domain.Product;
import pl.pai2.pai2.services.CategoryService;
import pl.pai2.pai2.services.MapValidationErrorService;
import pl.pai2.pai2.services.ProductService;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/product")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;


    /**
     * api/product/kategoria_produktu/
     */
    @PostMapping("")
    public ResponseEntity<?> createNewProduct(@Valid @RequestBody Product product, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(result);
        if (errorMap != null) return errorMap;

        Product product1 = productService.saveOrUpdateProduct(product);

        return new ResponseEntity<Product>(product1, HttpStatus.CREATED);
    }

//    @GetMapping("/{name}")
//    public ResponseEntity<?> getProductName(@PathVariable String name) {
//
//        List<Product> products = productService.findByName(name);
//
//        return new ResponseEntity<>(products, HttpStatus.OK);
//    }

    @GetMapping("/{idProduct}")
    public ResponseEntity<?> getProductId(@PathVariable long idProduct) {

        Product product = productService.findById(idProduct);

        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Product> getAllProducts() {
        return productService.findAllProducts();
    }

    @GetMapping("/all/{categoryName}")
    public ResponseEntity<?> getProductsByCategory(@PathVariable String categoryName) {
        Category category = categoryService.findByName(categoryName);
        List<Product> products = new ArrayList<>();
        for(Product p : productService.findAllProducts()){
            if(p.getCategory().equals(category))
                products.add(p);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
