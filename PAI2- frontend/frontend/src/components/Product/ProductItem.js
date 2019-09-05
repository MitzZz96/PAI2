import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import fire from "../../Config/Fire";
import Popup from "reactjs-popup";
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
    const { userLogged } = nextProps.address;
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        cart: {
          uid: userLog.uid
        },

        userLogged,
        idCart: this.props.address.cart.idCart
      });
    }
  }

  handleChange = e => {
    if (e.target.value > this.props.product.quantity) {
      window.alert("Zmniejsz ilość produktu ze względu na dostępność");
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        summaryPrice: e.target.value * this.props.product.price
      });
    }
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
    window.alert("Dodano do koszyka");
    console.log(newProductOrder);
  };

  render() {
    const { product } = this.props;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="card product">
              <div className="image-container p-5">
                <img
                  className="image"
                  alt={product.description}
                  src={require(`../../images/Products_icons/${product.image}.jpg`)}
                />
              </div>

              <div className="card-body">
                <div className="description d-flex justify-content-between">
                  <h5 className="align-self-center mb-0">{product.name}</h5>
                  <h5 className="font-italic mr-1">{product.price} zł</h5>
                </div>

                <div className="description d-flex justify-content-between">
                  <h5 className="align-self-center mb-0">Dostępność:</h5>
                  <h5 className="align-self-center mb-0">
                    {product.quantity === 0 ? "Brak" : product.quantity}
                  </h5>
                </div>

                <div className="description d-flex justify-content-between">
                  <h5 className="align-self-center mt-1">Ilość:</h5>
                  <input
                    type="text"
                    min="1"
                    max="999"
                    step="1"
                    name="quantity"
                    value={this.state.quantity}
                    className="description-input mt-1"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              {product.quantity === 0 ? (
                <Popup
                  trigger={
                    <input
                      type="submit"
                      className="upload btn btn-info btn-block shadow-none"
                    />
                  }
                  modal
                  closeOnDocumentClick
                >
                  <center>
                    <h1 style={{ color: "red" }}>Produkt jest niedostępny </h1>
                  </center>
                </Popup>
              ) : (
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="submit"
                    className="upload btn btn-info btn-block shadow-none"
                  />
                </form>
              )}
            </div>
          </div>
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
