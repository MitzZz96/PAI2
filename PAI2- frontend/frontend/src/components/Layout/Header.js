import React, { Component } from "react";
import logo from "../../images/Header/logo.png";
import acc from "../../images/icons/contacts.png";
import order from "../../images/icons/shopping-cart.png";
import { Link } from "react-router-dom";
import Category from "../Category/Category";

class Header extends Component {
  render() {
    let linksMarkup = this.props.links.map((link, index, type) => {
      return (
        <div key={index++} className="col-md-2 m-auto">
          <ul className="nav">
            <li className="nav-item">
              <div className="nav-link active">
                <Link to={`/category/${link.link}`}>{link.name}</Link>
              </div>
            </li>
          </ul>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md m-auto">
            <div className="rectangle">
              <div className="elementBlank">o</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 m-auto">
            <nav className="navbar">
              <div className="col-md-2 m-auto">
                <Link to={`/`}>
                  <img src={logo} alt="Logo sklepu" />
                </Link>
              </div>

              <form className="form-inline ">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success " type="submit">
                  Search
                </button>
              </form>

              <div className="col-md-2 m-auto">
                <div className="btn btn-outline-success">
                  <Link to={`/acc`}>
                    <img src={acc} alt="Account" className="img-icon" />
                    Twoje konto
                  </Link>
                </div>
              </div>

              <div className="col-md-2 m-auto">
                <div className="btn btn-outline-success">
                  <img src={order} alt="Shopping cart" className="img-icon" />
                  Twój koszyk
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="menu">
          <div className="row">{linksMarkup}</div>
        </div>
      </div>
    );
  }
}

export default Header;
