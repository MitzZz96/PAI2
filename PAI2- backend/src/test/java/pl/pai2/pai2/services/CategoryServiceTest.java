package pl.pai2.pai2.services;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import pl.pai2.pai2.domain.Category;
import pl.pai2.pai2.repositories.CategoryRepository;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertFalse;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CategoryServiceTest {

    @Autowired
    CategoryService categoryService;

    @MockBean
    private CategoryRepository categoryRepository;

    Long l = new Long(1);
    Long l1 = new Long(2);
    Long l2 = new Long(3);


    @Test
    public void saveOrUpdateCategory() {
        Category category = new Category();
        category.setIdCategory(l);
        category.setName("Name");

        Mockito.when(categoryRepository.save(category)).thenReturn(category);

        assertThat(categoryService.saveOrUpdateCategory(category)).isEqualTo(category);
    }

    @Test
    public void findByIdCategory() {
        Category category = new Category();
        category.setIdCategory(l);
        category.setName("Name");

        Mockito.when(categoryRepository.findByIdCategory(l)).thenReturn(category);

        assertThat(categoryService.findByIdCategory(l)).isEqualTo(category);
    }

    @Test
    public void findByName() {
        Category category = new Category();
        category.setIdCategory(l);
        category.setName("Name");

        Mockito.when(categoryRepository.findByName("Name")).thenReturn(category);

        assertThat(categoryService.findByName("Name")).isEqualTo(category);
    }

    @Test
    public void findAllCategories() {
        Category category = new Category();
        category.setIdCategory(l);
        category.setName("Name");

        Category category1 = new Category();
        category1.setIdCategory(l1);
        category1.setName("Name1");

        List<Category> categoryList = new ArrayList<>();
        categoryList.add(category);
        categoryList.add(category1);

        Mockito.when(categoryRepository.findAll()).thenReturn(categoryList);

        assertThat(categoryService.findAllCategories()).isEqualTo(categoryList);
    }

    @Test
    public void generateNextId() {
        Category category = new Category();
        category.setIdCategory(l);
        category.setName("Name");

        Category category1 = new Category();
        category1.setIdCategory(l1);
        category1.setName("Name1");

        List<Category> categoryList = new ArrayList<>();
        categoryList.add(category);
        categoryList.add(category1);


       Mockito.when(categoryRepository.findAll()).thenReturn(categoryList);

       long result = 3;

       assertEquals(result, categoryService.generateNextId());

    }



}