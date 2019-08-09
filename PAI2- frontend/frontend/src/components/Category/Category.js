import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProductsFromCategory } from "../../actions/productActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Item from "./Item";

class Category extends Component {
  state = {
    search: "",
    products: [],
    direction: {
      price: "asc"
    }
  };

  componentDidMount() {
    // axios.get(`/api/product/${idCategory}`).then(res => {
    //   console.log(res);
    //   this.setState({ api: res.data });
    // });
    const { category_name } = this.props.match.params;
    this.props.getProductsFromCategory(category_name);
  }

  componentWillReceiveProps(nextProps) {
    const { products } = nextProps.product;
    this.setState({
      products
    });
  }

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  sortByPrice = key => {
    this.setState({
      products: this.state.products.sort((a, b) =>
        this.state.direction[key] === "asc"
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
  };

  render() {
    const { category_name } = this.props.match.params;

    let filtredProducts = this.state.products.filter(product => {
      return product.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <div className="container">
        <div className="main">
          <center>
            <h1>Dział produktów {category_name}</h1>
          </center>

          <div className="col-md-3">
            <input
              className="form-control "
              type="search"
              placeholder="Wyszukaj"
              aria-label="Search"
              onChange={this.onchange}
            />
            <button onClick={() => this.sortByPrice("price")}>Sortuj</button>
          </div>
          <div className="col-md-3" />

          <div className="row">
            <Item filtredProducts={filtredProducts} />
          </div>
          <br />
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  getProductsFromCategory: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { getProductsFromCategory }
)(Category);
