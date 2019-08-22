import React, { Component } from "react";
import img from "../../images/test.jpg";
import BasketItem from "./BasketItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import fire from "../../Config/Fire";
import _ from "lodash";
import {
  getUserCart,
  getUser,
  getUserCartProducts
} from "../../actions/userActions";

class Basket extends Component {
  state = {
    cartProductsOrders: [],
    userLogged: {},
    user: {},
    uid: ""
  };

  componentDidMount() {
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        userLogged: userLog,
        uid: userLog.uid,
        cartProductsOrders: this.props.address.cartProductsOrders
      });
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
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        uid: userLog.uid,
        user,
        userLogged,
        cartProductsOrders
      });
    }
  }

  handleClick = () => {
    console.log("object");
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
                <h1 className="display-4 text-center">Twój koszyk</h1>
                <hr />

                <div className="container">
                  {basketItems}
                  <hr />
                  <button className="btn btn-info" onClick={this.handleClick}>
                    zamów
                  </button>
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
  address: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  address: state.address
});

export default connect(
  mapStateToProps,
  { getUserCart, getUser, getUserCartProducts }
)(Basket);
