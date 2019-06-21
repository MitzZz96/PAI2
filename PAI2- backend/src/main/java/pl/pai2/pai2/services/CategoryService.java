package pl.pai2.pai2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.pai2.pai2.domain.Category;
import pl.pai2.pai2.exceptions.ProductNameException;
import pl.pai2.pai2.repositories.CategoryRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category saveOrUpdateCategory(Category category){

        try {
            category.setName(category.getName().toUpperCase());

            return categoryRepository.save(category);
        } catch (Exception e){
            throw new ProductNameException("Category '"+ category.getName().toUpperCase()+ "' already exists");
        }
    }

    public Category findByIdCategory(long idCategory){

        Category category = categoryRepository.findByIdCategory(idCategory);

        if(category == null){
            throw new ProductNameException("Category '"+ idCategory +"' does not exists");
        }
        return category;
    }

    public Category findByName(String name){
        Category category = categoryRepository.findByName(name);

        if(category == null){
            throw new ProductNameException("Category '"+ name +"' does not exists");
        }
        return category;
    }

    public List<Category> findAllCategories(){
        return categoryRepository.findAll();
    }

}
