package pl.pai2.pai2.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.pai2.pai2.domain.Product;
import pl.pai2.pai2.domain.Waypoint;
import pl.pai2.pai2.services.MapsService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/coord")
public class CoordinatesController {

    @GetMapping("/{name}")
    public ResponseEntity<?> getProductName(@PathVariable String name) throws IOException {

        MapsService mapsService = new MapsService();

        Waypoint waypoint = mapsService.getWaypointByName(name);

        return new ResponseEntity<>(waypoint.getFeatures().get(0).getCenter(), HttpStatus.OK);
    }

}
