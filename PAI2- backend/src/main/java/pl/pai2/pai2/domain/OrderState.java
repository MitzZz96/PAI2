package pl.pai2.pai2.domain;

public enum OrderState {

    EMPTY("Pusty"),
    PENDING("Oczekujące"),
    AWAITING_PAYMENT("Przyjęte. Oczekujące na zapłatę"),
    SENT("Wysłano"),
    COMPLETED("Zakończone"),
    CANCELLED("Anulowane");

    private String name;

    OrderState(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
