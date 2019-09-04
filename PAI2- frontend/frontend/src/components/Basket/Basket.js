import React, { Component } from "react";
import BasketItem from "./BasketItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import fire from "../../Config/Fire";
import {
  getUserCart,
  getUser,
  getUserCartProducts,
  changeOrderState
} from "../../actions/userActions";
import StripeCheckout from "react-stripe-checkout";

class Basket extends Component {
  state = {
    cartProductsOrders: [],
    userLogged: {},
    user: {},
    cart: {},
    uid: ""
  };

  componentDidMount() {
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        userLogged: userLog,
        uid: userLog.uid,
        cartProductsOrders: this.props.address.cartProductsOrders,
        cart: this.props.address.cart
      });
      this.props.getUserCart(this.props.address.userLogged.uid);
      this.props.getUserCartProducts(this.props.address.userLogged.uid);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.state.uid !== prevProps.address.userLogged.uid) {
      this.props.getUser(this.state.uid);
      this.props.getUserCart(this.state.uid);
      this.props.getUserCartProducts(this.state.uid);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { user } = nextProps.user;
    const { userLogged } = nextProps.address;
    const { cartProductsOrders } = nextProps.address;
    const { cart } = nextProps.address;
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        uid: userLog.uid,
        user,
        userLogged,
        cartProductsOrders,
        cart
      });
    }
  }

  handleToken = async token => {
    const amount = this.state.cart.summaryCost;

    const response = await axios.post("http://localhost:3030/checkout", {
      token,
      amount
    });
    const { status } = response.data;

    console.log("Response:", response.data);
    if (status === "success") {
      window.alert("Sukces! Sprawdź email po więcej informacji");
      this.props.changeOrderState(this.state.cart.idCart, "PAID");
      this.reloadWin();
    } else {
      window.alert("Coś poszło nie tak", { type: "error" });
    }
  };

  reloadWin = () => {
    setTimeout(function() {
      window.location.reload(true);
    }, 1000);
  };

  render() {
    let basketItems = this.state.cartProductsOrders.map(product => {
      return <BasketItem key={product.idProductOrder} product={product} />;
    });

    return (
      <div className="container">
        <div className="main">
          <div className="my-card">
            <div className="row">
              <div className="col-md-12">
                <h1 className="header-basket">Twój koszyk</h1>
                <hr />

                <div className="container">
                  {basketItems.length === 0 ? (
                    <h1
                      className="mb-5"
                      style={{ textAlign: "center", color: "red" }}
                    >
                      Brak produktów w koszyku
                    </h1>
                  ) : (
                    basketItems
                  )}
                  <hr />
                  <div className="row">
                    <div className="col-sm-12 col-md-5 ">
                      <h2 className=" float-sm-left">
                        Suma całkowita: {this.state.cart.summaryCost} zł
                      </h2>
                    </div>

                    <div className="col-sm-12 col-md-7">
                      {basketItems.length === 0 ? (
                        <button
                          className="btn btn-info shadow-none float-sm-right"
                          onClick={() => {
                            window.alert("Brak produktów w koszyku");
                          }}
                        >
                          Zamów i zapłać
                        </button>
                      ) : (
                        <StripeCheckout
                          stripeKey="pk_test_8VCpBN8J5r2s5vGeV0mihHZA00EZ5unMxL"
                          token={this.handleToken}
                          amount={this.state.cart.summaryCost * 100}
                          name={`Płatność do zamówienia`}
                          panelLabel="Zapłać"
                          currency="PLN"
                          allowRememberMe={false}
                        >
                          <button className="btn btn-info float-sm-right ">
                            Zamów i zapłać
                          </button>
                        </StripeCheckout>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Basket.propTypes = {
  getUserCart: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserCartProducts: PropTypes.func.isRequired,
  changeOrderState: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  address: state.address
});

export default connect(
  mapStateToProps,
  { getUserCart, getUser, getUserCartProducts, changeOrderState }
)(Basket);
