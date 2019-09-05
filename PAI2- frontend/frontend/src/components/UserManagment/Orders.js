import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getAddress,
  getContact,
  getAllUsers,
  getUserCart,
  getAllCarts,
  getUser
} from "../../actions/userActions";
import fire from "../../Config/Fire";
import OrderItem from "./OrderItem";

class Orders extends Component {
  state = {
    clients: [],
    uid: ""
  };

  componentDidMount() {
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        uid: userLog.uid
      });
    }
    this.props.getAllUsers();
    this.props.getAllCarts();
  }

  render() {
    let index = 1;

    let orders = this.props.address.carts.map(cart => {
      let filtredUser = this.props.address.users.map(user => {
        for (let i = 0; i < this.props.address.users.length; i++) {
          for (let i = 0; i < this.props.address.users.length; i++) {
            if (cart.uid === this.props.address.users[i].uid)
              return this.props.address.users[i];
          }
        }
        return user;
      });
      return (
        <OrderItem
          key={cart.idCart}
          index={index++}
          user={filtredUser[0]}
          cart={cart}
        />
      );
    });

    return (
      <div className="container">
        <div className="main">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Aktywne zamówienia</h1>
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
                      <th scope="col">Imię</th>
                      <th scope="col">Nazwisko</th>
                      <th scope="col">Status</th>
                      <th scope="col">Data nadania</th>
                      <th scope="col">Koszt całkowity</th>
                      <th scope="col">Zmień status zamówienia</th>
                      <th scope="col">Zamówienie</th>
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

Orders.propTypes = {
  getAddress: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  address: state.address,
  contact: state.contact
});

export default connect(
  mapStateToProps,
  { getAddress, getContact, getAllUsers, getUserCart, getAllCarts, getUser }
)(Orders);
