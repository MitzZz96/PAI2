import React, { Component } from "react";
import img from "../../images/test.jpg";

class BasketItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <React.Fragment>
        <br />
        <div className="card card-body">
          <div className="row table-secondary">
            <div className="col-7">
              <h3 className="mx-auto">Produkt</h3>
            </div>

            <div className="col-3">
              <h3 className="mx-auto">Cena detaliczna</h3>
            </div>

            <div className="col-2">
              <h3 className="mx-auto">Ilość</h3>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-2">
              <div className="image-container p-2">
                <img
                  className="image"
                  src={img}
                  alt="Ceresit Grunt głęboko penetrujący CT17 2 l"
                />
              </div>
            </div>
            <div className="col-md-4 col-8 text-center asd">
              <p className="align-self-center text-center">
                {product.product.name}
              </p>
            </div>
            <div className="col-3">
              <h5 className="mx-auto">{product.product.price}</h5>
            </div>
            <div className="col-3">
              <h5 className="mx-auto">{product.quantity}</h5>
            </div>
          </div>

          <div className="row table-secondary">
            <div className="col-7">
              <h5 className="mx-auto">Usuń produkt</h5>
            </div>

            <div className="col-3">
              <input
                type="text"
                min="1"
                max="9999"
                step="1"
                defaultValue={"1"}
                className="description-input"
              />
            </div>

            <div className="col-1">
              <h5 className="mx-auto">Suma: {product.summaryPrice}</h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BasketItem;
