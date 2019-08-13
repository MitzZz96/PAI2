package pl.pai2.pai2.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCart;

    private double summaryCost;

    private Date deliveryDate;

    private Date shipDate;

    private OrderState orderState;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "uid", nullable = false)
    private User user;

    public Cart() {
    }

    public Long getIdCart() {
        return idCart;
    }

    public void setIdCart(Long idCart) {
        this.idCart = idCart;
    }

    public double getSummaryCost() {
        return summaryCost;
    }

    public void setSummaryCost(double summaryCost) {
        this.summaryCost = summaryCost;
    }

    public Date getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(Date deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

    public Date getShipDate() {
        return shipDate;
    }

    public void setShipDate(Date shipDate) {
        this.shipDate = shipDate;
    }

    public OrderState getOrderState() {
        return orderState;
    }

    public void setOrderState(OrderState orderState) {
        this.orderState = orderState;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
