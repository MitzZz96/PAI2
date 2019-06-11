package pl.pai2.pai2.exceptions;

public class ProductNotFoundExceptionResponse {

    private String ProjectNotFound;

    public ProductNotFoundExceptionResponse(String projectNotFound){
        ProjectNotFound = projectNotFound;
    }

    public String getProjectNotFound() {
        return ProjectNotFound;
    }

    public void setProjectNotFound(String projectNotFound) {
        ProjectNotFound = projectNotFound;
    }
}
