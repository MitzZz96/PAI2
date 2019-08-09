package pl.pai2.pai2.domain;

import java.util.ArrayList;

public class Waypoint {
    private String type;
    ArrayList < Features > features = new ArrayList<>();
    ArrayList < String > query = new ArrayList < > ();
    private String attribution;


    // Getter Methods


    public ArrayList<Features> getFeatures() {
        return features;
    }

    public void setFeatures(ArrayList<Features> features) {
        this.features = features;
    }

    public ArrayList<String> getQuery() {
        return query;
    }

    public void setQuery(ArrayList<String> query) {
        this.query = query;
    }

    public String getType() {
        return type;
    }

    public String getAttribution() {
        return attribution;
    }

    // Setter Methods

    public void setType(String type) {
        this.type = type;
    }

    public void setAttribution(String attribution) {
        this.attribution = attribution;
    }
}


class Geometry {
    private String type;
    ArrayList< Object > coordinates = new ArrayList < Object > ();
    boolean interpolated;
    boolean omitted;

    public ArrayList<Object> getCoordinates() {
        return coordinates;
    }

    public boolean isInterpolated() {
        return interpolated;
    }

    public boolean isOmitted() {
        return omitted;
    }

    public void setOmitted(boolean omitted) {
        this.omitted = omitted;
    }

    public void setInterpolated(boolean interpolated) {
        this.interpolated = interpolated;
    }

    public void setCoordinates(ArrayList<Object> coordinates) {
        this.coordinates = coordinates;
    }

// Getter Methods

    public String getType() {
        return type;
    }

    // Setter Methods

    public void setType(String type) {
        this.type = type;
    }
}
class Properties {
    private String wikidata;
    private String accuracy;
    boolean landmark;
    private String address;
    private String category;
    private String maki;

    // Getter Methods


    public boolean isLandmark() {
        return landmark;
    }

    public void setLandmark(boolean landmark) {
        this.landmark = landmark;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getMaki() {
        return maki;
    }

    public void setMaki(String maki) {
        this.maki = maki;
    }

    public String getAccuracy() {
        return accuracy;
    }

    public void setAccuracy(String accuracy) {
        this.accuracy = accuracy;
    }

    public String getWikidata() {
        return wikidata;
    }

    // Setter Methods

    public void setWikidata(String wikidata) {
        this.wikidata = wikidata;
    }
}