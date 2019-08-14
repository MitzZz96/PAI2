package pl.pai2.pai2.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.pai2.pai2.domain.Cart;
import pl.pai2.pai2.domain.ProductOrder;
import pl.pai2.pai2.services.CartService;
import pl.pai2.pai2.services.MapValidationErrorService;

import javax.validation.Path;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewCart(@Valid @RequestBody Cart cart, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(result);
        if (errorMap != null) return errorMap;

        Cart cart1 = cartService.createNewCart(cart);

        return new ResponseEntity<Cart>(cart1, HttpStatus.CREATED);
    }

    @GetMapping("/user/{uid}")
    public ResponseEntity<?> getUserCart(@PathVariable String uid){
        Cart cart = cartService.findCurrentCartByUid(uid);

        return new ResponseEntity<Cart>(cart, HttpStatus.OK);
    }

    @GetMapping("/user/orders/{uid}")
    public ResponseEntity<?> getUserCurrentCartProductOrders(@PathVariable String uid){
        List<ProductOrder> orders = cartService.findCurrentProductOrders(uid);

        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

}
