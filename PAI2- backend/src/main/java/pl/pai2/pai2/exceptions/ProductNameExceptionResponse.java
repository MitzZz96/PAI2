package pl.pai2.pai2.exceptions;

public class ProductNameExceptionResponse {

    private String productId;

    public ProductNameExceptionResponse(String productId){
        this.productId = productId;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }
}
