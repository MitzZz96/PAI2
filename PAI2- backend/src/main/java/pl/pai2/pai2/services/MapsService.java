package pl.pai2.pai2.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import pl.pai2.pai2.domain.Waypoint;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;

public class MapsService {

    public MapsService() {
    }

    public Waypoint getWaypointByName(String name) throws IOException {
        Client client = ClientBuilder.newClient();
        String target = name.replace(" ", "%20");
        Response response = client.target("https://api.mapbox.com/geocoding/v5/mapbox.places/"+ target + ".json?access_token=pk.eyJ1IjoibWVjaWtrayIsImEiOiJjanlzbng3eXcwMWhmM2xwMnJka3hrcjRjIn0.5BEuGZBstvpKxRvDcLCzJw")
                .request(MediaType.TEXT_PLAIN_TYPE)
                .header("Accept", "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8")
                .get();

        String st = response.readEntity(String.class);
        return new ObjectMapper().readValue(st, Waypoint.class);
    }

}
