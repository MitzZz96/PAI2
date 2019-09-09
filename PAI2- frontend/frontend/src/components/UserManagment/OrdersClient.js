import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  getAddress,
  getContact,
  getAllUsers,
  getUserCart,
  getAllCarts,
  getUser,
  getUserCarts
} from "../../actions/userActions";
import fire from "../../Config/Fire";
class OrdersClient extends Component {
  state = {
    cart: [],
    carts: [],
    user: {},
    status: null,
    uid: "",
    date: ""
  };

  componentDidMount() {
    var userLog = fire.auth().currentUser;

    this.setState({
      uid: userLog.uid,
      carts: this.props.address.userCarts
    });
    this.props.getUserCart(this.props.address.userLogged.uid);
    this.props.getUserCarts(this.props.address.userLogged.uid);
  }

  componentDidUpdate(prevProps) {
    if (this.state.uid !== prevProps.address.userLogged.uid) {
      this.props.getUserCarts(this.props.address.userLogged.uid);
      this.setState({
        carts: prevProps.address.userCarts
      });
    }
  }

  render() {
    let index = 1;

    let orders = this.props.address.userCarts.map((cart, status) => {
      return (
        <OrderItem
          key={cart.idCart}
          index={index++}
          cart={cart}
          status={this.state.status}
        />
      );
    });

    return (
      <div className="container">
        <div className="main">
          <div className="row">
            <div className="col-md-12">
              <h1 className="your-order display-4 text-center">
                Twoje zamówienia
              </h1>
              <hr />

              {orders.length === 0 ? (
                <h1 style={{ textAlign: "center", color: "red" }}>
                  Brak aktywnych zamówień
                </h1>
              ) : (
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">
                        <center>#</center>
                      </th>
                      <th scope="col">
                        <center>Data nadania</center>
                      </th>
                      <th scope="col">
                        <center>Data dostawy</center>
                      </th>
                      <th scope="col">
                        <center>Status</center>
                      </th>
                      <th scope="col">
                        <center>Koszt całkowity</center>
                      </th>
                      <th scope="col">
                        <center>Podgląd zamówienia</center>
                      </th>
                      <th scope="col">
                        <center>Mapa dojazdu</center>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{orders}</tbody>
                </table>
              )}

              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const OrderItem = props => {
  const { cart } = props;
  return (
    <tr>
      <th scope="row">
        <center>{props.index}</center>
      </th>
      <td>
        {cart.shipDate === null ? (
          <center>-</center>
        ) : (
          <center>{cart.shipDate}</center>
        )}
      </td>
      <td>
        {cart.deliveryDate === null ? (
          <center>-</center>
        ) : (
          <center>{cart.deliveryDate}</center>
        )}
      </td>
      <td>
        {cart.orderState === "SENT" ? (
          <center>Wysłano</center>
        ) : cart.orderState === "EMPTY" ? (
          <center>Koszyk jest pusty</center>
        ) : cart.orderState === "PENDING" ? (
          <center>Oczekujące zamówienie</center>
        ) : cart.orderState === "AWAITING_PAYMENT" ? (
          <center>Oczekująca zapłata</center>
        ) : cart.orderState === "PAID" ? (
          <center>Zapłacone</center>
        ) : cart.orderState === "COMPLETED" ? (
          <center>Zakończone</center>
        ) : cart.orderState === "CANCELLED" ? (
          <center>Zmaówienie anulowane</center>
        ) : null}
      </td>
      <td>
        <center>{cart.summaryCost} zł</center>
      </td>
      <td>
        <Link to={`/orderDetails/${cart.idCart}`}>
          <center>
            <button>Szczegóły</button>
          </center>
        </Link>
      </td>

      <td>
        <Link to={`/map/${cart.uid}`}>
          <center>
            <button>Mapa</button>
          </center>
        </Link>
      </td>
    </tr>
  );
};

OrdersClient.propTypes = {
  getAddress: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  getUserCart: PropTypes.func.isRequired,
  getAllCarts: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserCarts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  address: state.address,
  contact: state.contact
});

export default connect(
  mapStateToProps,
  {
    getAddress,
    getContact,
    getAllUsers,
    getUserCart,
    getAllCarts,
    getUser,
    getUserCarts
  }
)(OrdersClient);
