package pl.pai2.pai2.domain;

import java.util.ArrayList;

public class Features {
    private String id;
    private String type;
    ArrayList< Object > place_type = new ArrayList < Object > ();
    private float relevance;
    Properties PropertiesObject;
    private String text;
    private String place_name;
    ArrayList < Object > bbox = new ArrayList < Object > ();
    ArrayList < Float > center = new ArrayList <> ();
    Geometry GeometryObject;
    ArrayList < Object > context = new ArrayList < Object > ();
    private String matching_text;
    private String matching_place_name;
    private String address;


    // Getter Methods


    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMatching_text() {
        return matching_text;
    }

    public void setMatching_text(String matching_text) {
        this.matching_text = matching_text;
    }

    public String getMatching_place_name() {
        return matching_place_name;
    }

    public void setMatching_place_name(String matching_place_name) {
        this.matching_place_name = matching_place_name;
    }

    public ArrayList<Object> getPlace_type() {
        return place_type;
    }

    public void setPlace_type(ArrayList<Object> place_type) {
        this.place_type = place_type;
    }

    public Properties getPropertiesObject() {
        return PropertiesObject;
    }

    public void setPropertiesObject(Properties propertiesObject) {
        PropertiesObject = propertiesObject;
    }

    public ArrayList<Object> getBbox() {
        return bbox;
    }

    public void setBbox(ArrayList<Object> bbox) {
        this.bbox = bbox;
    }

    public ArrayList<Float> getCenter() {
        return center;
    }

    public void setCenter(ArrayList<Float> center) {
        this.center = center;
    }

    public Geometry getGeometryObject() {
        return GeometryObject;
    }

    public void setGeometryObject(Geometry geometryObject) {
        GeometryObject = geometryObject;
    }

    public ArrayList<Object> getContext() {
        return context;
    }

    public void setContext(ArrayList<Object> context) {
        this.context = context;
    }

    public String getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public float getRelevance() {
        return relevance;
    }

    public Properties getProperties() {
        return PropertiesObject;
    }

    public String getText() {
        return text;
    }

    public String getPlace_name() {
        return place_name;
    }

    public Geometry getGeometry() {
        return GeometryObject;
    }

    // Setter Methods

    public void setId(String id) {
        this.id = id;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setRelevance(float relevance) {
        this.relevance = relevance;
    }

    public void setProperties(Properties propertiesObject) {
        this.PropertiesObject = propertiesObject;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setPlace_name(String place_name) {
        this.place_name = place_name;
    }

    public void setGeometry(Geometry geometryObject) {
        this.GeometryObject = geometryObject;
    }
}