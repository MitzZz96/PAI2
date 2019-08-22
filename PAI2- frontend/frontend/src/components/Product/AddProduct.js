import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { createProduct } from "../../actions/productActions";

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idProduct: "",
      name: "",
      price: 0,
      description: "",
      quantity: 0,
      category: {
        idCategory: 0
      },
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newProduct = {
      idProduct: this.state.idProduct,
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      quantity: this.state.quantity,
      category: {
        idCategory: this.state.idCategory
      },
    };
    console.log(newProduct);
    this.props.createProduct(
      this.state.idCategory,
      newProduct,
      this.props.history
    );
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <br />
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center text-info">
                  Add new product
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-sm ", {
                        "is-invaild": errors.idProduct
                      })}
                      placeholder="Product id"
                      name="idProduct"
                      value={this.state.idProduct}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-sm ", {
                        "is-invaild": errors.name
                      })}
                      placeholder="Product Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-sm ", {
                        "is-invaild": errors.price
                      })}
                      placeholder="Product Price"
                      name="price"
                      value={this.state.price}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-sm", {
                        "is-invaild": errors.description
                      })}
                      placeholder="Product Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-sm", {
                        "is-invaild": errors.quantity
                      })}
                      placeholder="Product Quantity"
                      name="quantity"
                      value={this.state.quantity}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control form-control-sm"
                      name="idCategory"
                      value={this.state.idCategory}
                      onChange={this.onChange}
                    >
                      <option value={1}>DANIA GOTOWE I MROZONKI</option>
                      <option value={2}>KAWA I HERBATA</option>
                      <option value={3}>MIESO, WEDLINY I RYBY</option>
                      <option value={4}>NABIAL</option>
                      <option value={5}>NAPOJE</option>
                      <option value={6}>OWOCE I WARZYWA</option>
                      <option value={7}>PIECZYWO</option>
                      <option value={8}>SLODYCZE</option>
                    </select>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddProduct.propTypes = {
  createProduct: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProduct }
)(AddProduct);
