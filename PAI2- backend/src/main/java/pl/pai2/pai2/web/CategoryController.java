package pl.pai2.pai2.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.pai2.pai2.domain.Category;
import pl.pai2.pai2.services.CategoryService;
import pl.pai2.pai2.services.MapValidationErrorService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/category")
@CrossOrigin
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewCategory(@Valid @RequestBody Category category, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(result);
        if(errorMap!=null) return errorMap;

        Category category1 = categoryService.saveOrUpdateCategory(category);
        return new ResponseEntity<Category>(category1, HttpStatus.CREATED);
    }

    @GetMapping("/{idCategory}")
    public ResponseEntity<?> getCategoryById(@PathVariable long idCategory){

        Category category = categoryService.findByIdCategory(idCategory);

        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @GetMapping("/all")
    public List<Category> getAllCategories(){return categoryService.findAllCategories();}

}
