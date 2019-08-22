package pl.pai2.pai2.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.pai2.pai2.domain.Cart;
import pl.pai2.pai2.domain.OrderState;
import pl.pai2.pai2.domain.ProductOrder;
import pl.pai2.pai2.services.CartService;
import pl.pai2.pai2.services.MapValidationErrorService;

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

        Cart cart1 = cartService.createOrUpdateCart(cart);

        return new ResponseEntity<Cart>(cart1, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllCarts(){
        return new ResponseEntity<>(cartService.findAll(), HttpStatus.OK);
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

    @GetMapping("/user/{uid}/change_state/{state}")
    public ResponseEntity<?> changeOrderState(@PathVariable String uid, @PathVariable OrderState state){
        cartService.changeOrderState(uid, state);
        return new ResponseEntity<>("Order state changed to " + state, HttpStatus.OK);
    }

}
