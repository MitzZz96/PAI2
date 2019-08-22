package pl.pai2.pai2.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.pai2.pai2.domain.ProductOrder;
import pl.pai2.pai2.services.MapValidationErrorService;
import pl.pai2.pai2.services.ProductOrderService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/productOrder")
@CrossOrigin
public class ProductOrderController {

    @Autowired
    private ProductOrderService productOrderService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> addNewProductOrder(@Valid @RequestBody ProductOrder productOrder, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(result);
        if (errorMap != null) return errorMap;

        ProductOrder productOrder1 = productOrderService.saveOrUpdateProductOrder(productOrder);

        return new ResponseEntity<ProductOrder>(productOrder1, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> removeProductOrder(@PathVariable Long id){
        productOrderService.removeProductOrder(id);
        return new ResponseEntity<>("Product order with id '" + id +  "' was deleted", HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(productOrderService.findAll(), HttpStatus.OK);
    }

}
