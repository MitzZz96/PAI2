import React, { Component } from "react";
import logo from "../../images/Header/logo.png";
import acc from "../../images/icons/contacts.png";
import order from "../../images/icons/shopping-cart.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    let linksMarkup = this.props.links.map((link, index, type) => {
      return (
        <div key={index++} className="col-md-2 m-auto">
          <ol className="nav">
            <li className="nav-item">
              <Link to={`/category/${link.link}`}>
                <div className="nav-link active">{link.name}</div>
              </Link>
            </li>
          </ol>
        </div>
      );
    });

    return (
      <div className="container">
        <nav className="navbar">
          <div className="logo_shop">
            <Link to={`/`}>
              <img src={logo} alt="Logo sklepu" />
            </Link>
          </div>
          <div className="icon_user float-sm-right ">
            <Link to={`/acc`}>
              <div className="btn btn-outline-success mr-4" >
                <img src={acc} alt="Account" className="img-icon-user" />
                Twoje konto
              </div>
            </Link>
            <Link to="/basket">
              <div className="btn btn-outline-success ml-4">
                <img
                  src={order}
                  alt="Shopping cart"
                  className="img-icon-basket"
                />
                Twój koszyk
              </div>
            </Link>
          </div>
         
            
         
        </nav>

        <div className="menu">
          <div className="row">{linksMarkup}</div>
        </div>
      </div>
    );
  }
}

export default Header;
