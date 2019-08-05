import React, { Component } from "react";
import logo from "../../images/Header/logo.png";
// import acc from "https://img.icons8.com/metro/26/000000/contacts.png";
// import order from "https://img.icons8.com/material/24/000000/shopping-cart.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
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
                <Link to={`/mainPage`}>
                  <img src={logo} alt="Logo sklepu" className="img-thumbnail" />
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
                <a className="btn btn-outline-success" href="registration.html">
                  {
                    //   <img src={acc}>Twoje konto</img>
                  }
                </a>
              </div>

              <div className="col-md-2 m-auto">
                <a className="btn btn-outline-success" href="#">
                  {
                    //   <img src={order}>Koszyk</img>
                  }
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="menu">
          <div className="row">
            <div className="col-md-2 m-auto">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Mięsa
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 m-auto">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Nabiał
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 m-auto">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Pieczywo
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 m-auto">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Owoce
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 m-auto">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Słodycze
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 m-auto">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Napoje
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
