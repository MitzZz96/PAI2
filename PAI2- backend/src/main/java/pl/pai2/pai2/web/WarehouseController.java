package pl.pai2.pai2.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.pai2.pai2.domain.Category;
import pl.pai2.pai2.domain.Product;
import pl.pai2.pai2.domain.Warehouse;
import pl.pai2.pai2.services.MapValidationErrorService;
import pl.pai2.pai2.services.WarehouseService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/warehouse")
@CrossOrigin
public class WarehouseController {

    @Autowired
    private WarehouseService warehouseService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewWarehouse(@Valid @RequestBody Warehouse warehouse, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(result);
        if(errorMap!=null) return errorMap;

        Warehouse warehouse1 = warehouseService.saveOrUpdateWarehouse(warehouse);
        return new ResponseEntity<Warehouse>(warehouse1, HttpStatus.CREATED);
    }

    @GetMapping("/{name}")
    public ResponseEntity<?> getWarehouseName(@PathVariable String name){

        Warehouse warehouse = warehouseService.findByName(name);

        return new ResponseEntity<>(warehouse, HttpStatus.OK);
    }

//    @GetMapping("/all/{idWarehouse}")
//    public List<Product> getAllWarehouseProducts(@PathVariable long idWarehouse){return warehouseService.getAllWarehouseProducts(idWarehouse);}

    @GetMapping("/all")
    public Iterable<Warehouse> getAllWarehouses(){return warehouseService.findAllWarehouses();}



}
