import React, { Component } from "react";
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
    category: "",
    direction: {
      price: "asc"
    },
    search_type: true
  };

  componentDidMount() {
    const { category_name } = this.props.match.params;
    this.props.getProductsFromCategory(category_name);
    this.props.getAllCategories();
  }

  componentDidUpdate(prevProps) {
    if (this.state.category !== prevProps.match.params.category_name) {
      const { category_name } = this.props.match.params;
      this.props.getProductsFromCategory(category_name);
      this.props.getAllCategories();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { products } = nextProps.product;
    const { categories } = nextProps.categories;
    this.setState({
      products,
      categories,
      category: nextProps.match.params.category_name
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

  handleClick = () => {
    this.sortByPrice("price");
    this.setState({
      search_type: !this.state.search_type
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
          <center className="product_detarman">
            <h1>Dział produktów {category_name}</h1>
          </center>

          <div className="row ">
            <div className="col-sm-2 col-md-3 search-engine ">
              <input
                className="form-control shadow-none  ml-3 mt-2 "
                type="search"
                placeholder="Wyszukaj"
                aria-label="Search"
                onChange={this.onchange}
              />
            </div>

            <div className=" col-sm-1 col-md-1 mt-2 ">
              <button
                className="button-sort  shadow-none "
                onClick={this.handleClick}
              >
                {this.state.search_type ? "Sortuj rosnąco" : "Sortuj malejąco"}
              </button>
            </div>
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
