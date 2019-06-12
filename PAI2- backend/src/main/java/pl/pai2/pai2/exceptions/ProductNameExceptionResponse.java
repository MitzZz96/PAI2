package pl.pai2.pai2.exceptions;

public class ProductNameExceptionResponse {

    private String name;

    public ProductNameExceptionResponse(String name){
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
