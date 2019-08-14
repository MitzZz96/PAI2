import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProductsFromCategory } from "../../actions/productActions";
import { getAllCategories } from "../../actions/categoryActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Item from "./Item";

class Category extends Component {
  state = {
    search: "",
    products: [],
    categories: [],
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
    this.props.getAllCategories();
  }

  componentWillReceiveProps(nextProps) {
    const { products } = nextProps.product;
    const { categories } = nextProps.categories;
    this.setState({
      products,
      categories
    });
  }

  // componentDidUpdate() {
  //   let nazwaKategorii = this.state.products
  //     .map(cat => {
  //       return cat.category;
  //     })
  //     .map(name => {
  //       return name.name;
  //     });
  //   const kat = nazwaKategorii[0];
  //   // const { category_name } = this.props.match.params;
  //   // this.props.getProductsFromCategory(category_name);

  //   console.log(kat);
  // }

  // componentDidUpdate() {
  //   const { category_name } = this.props.match.params;
  //   this.props.getProductsFromCategory(category_name);
  // }

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
  getAllCategories: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product,
  categories: state.categories
});

export default connect(
  mapStateToProps,
  { getProductsFromCategory, getAllCategories }
)(Category);
