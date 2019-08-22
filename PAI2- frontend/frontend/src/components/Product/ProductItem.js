import React, { Component } from "react";
import img from "../../images/test.jpg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import fire from "../../Config/Fire";
import _ from "lodash";
import {
  getUserCart,
  getUser,
  addNewProductOrder
} from "../../actions/userActions";

class ProductItem extends Component {
  state = {
    quantity: 1,
    summaryPrice: this.props.product.price,
    product: {
      idProduct: this.props.product.idProduct
    },
    cart: {
      idCart: this.props.address.cart.idCart,
      uid: ""
    },
    userLogged: {},
    user: {}
  };

  componentDidMount() {
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        cart: {
          uid: userLog.uid
        },
        userLogged: this.props.address.userLogged
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.state.cart.uid !== prevProps.address.userLogged.uid) {
      this.props.getUser(this.state.cart.uid);
      this.props.getUserCart(this.state.cart.uid);
    }
  }

  componentWillReceiveProps(nextProps) {
    // const { user } = nextProps.user;
    const { userLogged } = nextProps.address;
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        cart: {
          uid: userLog.uid
        },
        // user,
        userLogged,
        idCart: this.props.address.cart.idCart
      });
    }
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
      summaryPrice: e.target.value * this.props.product.price
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newProductOrder = {
      quantity: this.state.quantity,
      summaryPrice: this.state.summaryPrice,
      product: {
        idProduct: this.state.product.idProduct
      },
      cart: {
        idCart: this.props.address.cart.idCart
      }
    };
    this.props.addNewProductOrder(newProductOrder);
    console.log(newProductOrder);
  };

  render() {
    // const { id } = this.props.match.params;
    const { product } = this.props;
    return (
      <React.Fragment>
        <div className="col-2 col-md-6 col-lg-3 my-3">
          <form onSubmit={this.handleSubmit}>
            <div className="card product">
              <div className="image-container p-5">
                <img
                  className="image"
                  src={img}
                  alt="Ceresit Grunt głęboko penetrujący CT17 2 l"
                />
              </div>

              <div className="card-body">
                <div className="description d-flex justify-content-between">
                  <h5 className="align-self-center mb-0">{product.name}</h5>
                  <h5 className="font-italic mr-1">{product.price} zł</h5>
                </div>

                <div className="description d-flex justify-content-between">
                  <h5 className="align-self-center mb-0">Dostępność:</h5>
                  <h5 className="align-self-center mb-0">{product.quantity}</h5>
                </div>

                <div className="description d-flex justify-content-between">
                  <h5 className="align-self-center mt-1">Ilość:</h5>
                  <input
                    type="text"
                    min="1"
                    max="999"
                    step="1"
                    // defaultValue={"1"}
                    name="quantity"
                    value={this.state.quantity}
                    className="description-input mt-1"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <input
                type="submit"
                className="btn btn-info btn-block mt-4"
                value="Dodaj do koszyka"
              />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

ProductItem.propTypes = {
  getUserCart: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired,
  addNewProductOrder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  address: state.address
});

export default connect(
  mapStateToProps,
  { getUserCart, getUser, addNewProductOrder }
)(ProductItem);
