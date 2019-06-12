package pl.pai2.pai2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import pl.pai2.pai2.web.CategoryController;

@SpringBootApplication
public class Pai2Application {

	public static void main(String[] args) {
		SpringApplication.run(Pai2Application.class, args);
	}

}
