package pl.pai2.pai2;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import org.apache.tomcat.util.json.ParseException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import pl.pai2.pai2.services.MapsService;
import pl.pai2.pai2.web.CategoryController;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

@SpringBootApplication
public class Pai2Application {

	public static void main(String[] args) throws ParseException, IOException {
		SpringApplication.run(Pai2Application.class, args);
        initFirebaseConnection();
    }

	static void initFirebaseConnection() throws IOException {
        FileInputStream serviceAccount =
                new FileInputStream("D:\\Studia\\Semestr_VI\\PAI2\\PROJEKT\\PAI2\\PAI2- backend\\src\\main\\resources\\projektpai-bca84-firebase-adminsdk-sgoeq-bd47a53428.json");

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .setDatabaseUrl("https://projektpai-bca84.firebaseio.com")
                .build();

        FirebaseApp.initializeApp(options);
    }

}
