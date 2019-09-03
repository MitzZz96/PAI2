import React, { Component } from "react";
import img from "../../images/test.jpg";
import { deleteProductOrder } from "../../actions/userActions";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import { connect } from "react-redux";
import classnames from "classnames";

class BasketItem extends Component {
  handleClick = () => {
    this.props.deleteProductOrder(this.props.product.idProductOrder);
  };
  render() {
    const { product } = this.props;
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
                    src={img}
                    alt="Ceresit Grunt głęboko penetrujący CT17 2 l"
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
            <div className="delete-product col-7 d-inline-flex p-2 ml-0">
              <div className="col-3 float-sm-left ">
                <button
                  className="btn btn-info btn-sm btn-block shadow-none "
                  onClick={this.handleClick}
                >
                  Usuń produkt
                </button>
              </div>
            </div>
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
  }
}

BasketItem.propTypes = {
  deleteProductOrder: PropTypes.func.isRequired,

  address: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  address: state.address
});

export default connect(
  mapStateToProps,
  { deleteProductOrder }
)(BasketItem);
