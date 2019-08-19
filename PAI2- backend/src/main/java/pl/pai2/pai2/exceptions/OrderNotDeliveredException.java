package pl.pai2.pai2.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class OrderNotDeliveredException extends RuntimeException{

    public OrderNotDeliveredException(String message){
        super(message);
    }
}