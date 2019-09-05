import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  getUserCartProducts,
  getUser,
  getUserCart,
  getUserCartById,
  getCartOrders
} from "../../actions/userActions";
import fire from "../../Config/Fire";

class OrderDetails extends Component {
  state = {
    uid: "",
    cartProductsOrders: []
  };

  componentDidMount() {
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        userLogged: userLog,
        uid: userLog.uid,
        cartProductsOrders: this.props.address.cartProductsOrders
      });
      this.props.getUserCartById(this.props.match.params.id);
      this.props.getCartOrders(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.state.uid !== prevProps.address.userLogged.uid) {
      this.props.getUser(this.state.uid);
      this.props.getUserCartById(this.props.match.params.id);
      this.props.getCartOrders(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { user } = nextProps.user;
    const { userLogged } = nextProps.address;
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        uid: userLog.uid,
        user,
        userLogged
      });
    }
  }

  render() {
    const products = this.props.address.cartProductsOrders.map(product => {
      return (
        <OrderDetailsItem
          key={product.idProductOrder}
          product={product}
          summaryCost={this.props.address.cart.summaryCost}
        />
      );
    });
    return (
      <div className="container">
        <div className="main">
          <center>
            {this.props.address.userLogged.client === false ? (
              <React.Fragment>
                <h1 className="your-order display-4 text-center">
                  Zamówienie nr {this.props.address.cart.idCart}
                </h1>
                <hr />
                <Link to={`/orders`}>
                  <button className="button-your-order btn btn-info shadow-none">
                    Powróć do zamówień
                  </button>
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h1 className="your-order display-4 text-center">
                  Twoje zamówienie
                </h1>
                <hr />
                <Link to={`/ordersClient`}>
                  <button className="button-your-order btn btn-info shadow-none">
                    Powróć do Twoich zamówień
                  </button>
                </Link>
              </React.Fragment>
            )}
          </center>
          <hr />

          {products.length === 0 ? (
            <h1 className="mb-5" style={{ textAlign: "center", color: "red" }}>
              Brak produktów w zamówieniu
            </h1>
          ) : (
            products
          )}

          <hr />
          <div className="row">
            <div className="col-sm-12 col-md-12 mt-2 ">
              <center>
                <h2>
                  Suma całkowita: {this.props.address.cart.summaryCost} zł
                </h2>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const OrderDetailsItem = props => {
  const { product } = props;
  return (
    <React.Fragment>
      <br />
      <div className="card card-body">
        <div className="row table-secondary">
          <div className="col-sm-2 col-md-7">
            <h3 className="mt-2 ml-3">Produkt</h3>
          </div>

          <div className="col-sm-2 col-md-3">
            <h3 className="mr-4 mt-2">Cena detaliczna</h3>
          </div>

          <div className="col-sm-2 col-md-2">
            <h3 className="ml-5 mt-2">Ilość</h3>
          </div>
        </div>

        <div className="row ">
          <div className="col-7">
            <div className="row">
              <div className="col-3">
                <img
                  className="image mt-3 mb-3"
                  alt={product.product.description}
                  src={require(`../../images/Products_icons/${product.product.image}.jpg`)}
                />
              </div>
              <div className="col-7">
                <h2 className="text-center mt-4">{product.product.name} </h2>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h3 className="text-center mr-5 mt-4">
              {product.product.price} zł
            </h3>
          </div>
          <div className="col-2">
            <h3 className="text-center mt-4">{product.quantity}</h3>
          </div>
        </div>

        <div className="row table-secondary">
          <div className="delete-product col-7 d-inline-flex p-2 ml-0"></div>
          <div className="sum-product col-5 d-inline-flex p-3 ">
            <div className="col-12  ">
              <h4 className="float-sm-right">
                Suma: {product.summaryPrice} zł
              </h4>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

OrderDetails.propTypes = {
  getUserCartProducts: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserCart: PropTypes.func.isRequired,
  getUserCartById: PropTypes.func.isRequired,
  getCartOrders: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  address: state.address
});

export default connect(
  mapStateToProps,
  {
    getUserCartProducts,
    getUserCart,
    getUser,
    getUserCartById,
    getCartOrders
  }
)(OrderDetails);
