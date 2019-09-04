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
              <h1 className="display-4 text-center">Twoje zamówienia</h1>
              <hr />

              {orders.length === 0 ? (
                <h1 style={{ textAlign: "center", color: "red" }}>
                  Brak aktywnych zamówień
                </h1>
              ) : (
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Data nadania</th>
                      <th scope="col">Data dostawy</th>
                      <th scope="col">Status</th>
                      <th scope="col">Koszt całkowity</th>
                      <th scope="col">Podgląd zamówienia</th>
                      <th scope="col">Mapa dojazdu</th>
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
      <th scope="row">{props.index}</th>
      <td>{cart.shipDate === null ? "-" : cart.shipDate}</td>
      <td>{cart.deliveryDate === null ? "-" : cart.deliveryDate}</td>
      <td>
        {cart.orderState === "SENT"
          ? "Wysłano"
          : cart.orderState === "EMPTY"
          ? "Koszyk jest pusty"
          : cart.orderState === "PENDING"
          ? "Oczekujące zamówienie"
          : cart.orderState === "AWAITING_PAYMENT"
          ? "Oczekująca zapłata"
          : cart.orderState === "PAID"
          ? "Zapłacone"
          : cart.orderState === "COMPLETED"
          ? "Zakończone"
          : cart.orderState === "CANCELLED"
          ? "Zmaówienie anulowane"
          : null}
      </td>
      <td>{cart.summaryCost} zł</td>
      <td>
        <Link to={`/orderDetails/${cart.idCart}`}>
          <button>Szczegóły</button>
        </Link>
      </td>

      <td>
        <Link to={`/map/${cart.uid}`}>
          <button>Mapa</button>
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
