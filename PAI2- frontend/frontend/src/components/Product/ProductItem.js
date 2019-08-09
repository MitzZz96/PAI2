import React, { Component } from "react";
import img from "../../images/test.jpg";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  render() {
    // const { id } = this.props.match.params;
    const { product } = this.props;
    return (
      <React.Fragment>
        <div className="col-2 col-md-6 col-lg-3 my-3">
          <div className="card product">
            <Link to={`/category/${product.category.name}/${product.name}`}>
              <div className="image-container p-5">
                <img
                  className="image"
                  src={img}
                  alt="Ceresit Grunt głęboko penetrujący CT17 2 l"
                />
              </div>
            </Link>

            <div className="card-body">
              <Link to={`/category/${product.category.name}/${product.name}`}>
                <div className="description d-flex justify-content-between">
                  <p className="align-self-center mb-0">{product.name}</p>
                </div>

                <div className="description d-flex justify-content-between">
                  <h5 className="text-blue mb-0">
                    <span className="font-italic mr-1">{product.price} zł</span>
                  </h5>
                </div>
              </Link>
            </div>
            <a href="#" className="btn btn-outline-secondary">
              Add to card
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductItem;
