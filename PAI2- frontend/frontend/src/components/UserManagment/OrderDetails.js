import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getUserCartProducts,
  getUser,
  getUserCart
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
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        uid: userLog.uid
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="main">
          <h1 className="display-4 text-center">Twój koszyk</h1>
          <hr />
          <h1>hi</h1>
        </div>
      </div>
    );
  }
}

OrderDetails.propTypes = {
  getUserCartProducts: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserCart: PropTypes.func.isRequired,
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
    getUser
  }
)(OrderDetails);
