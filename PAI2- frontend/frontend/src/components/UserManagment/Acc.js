import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../UserManagment/Login";
import img1 from "../../images/icons/book-interface.png";
import img2 from "../../images/icons/shopping-cart-interface.png";
import img3 from "../../images/icons/log-off.png";
import fire from "../../Config/Fire";

export class Acc extends Component {
  render() {
    return (
      <div className="container">
        {this.props.user.user ? (
          <Account user={this.props} />
        ) : (
          <Login user={this.props} />
        )}
      </div>
    );
  }
}

class Account extends Component {
  state = {
    user: {}
  };

  componentWillReceiveProps(nextProps) {
    const { user } = nextProps;
    this.setState({
      user
    });
  }

  logout = () => {
    fire.auth().signOut();
    window.location.href = "/";
  };

  render() {
    return (
      <div className="container user">
        <div className="row">
          <div className="col-9 mx-auto col-lg-4 my-3">
            <div className="card order">
              <div className="card-body order">
                <img src={img1} alt="Zamowienia" />
                {`Twoje zamówienia`}
              </div>
            </div>
          </div>
          <div className="col-9 mx-auto col-lg-4 my-3">
            <div className="card order">
              <div className="card-body order">
                <img src={img2} alt="Adresy" />
                {`Twoje adresy`}
              </div>
            </div>
          </div>
          <div className="col-9 mx-auto col-lg-4 my-3">
            <div className="card order">
              <div className="card-body order" onClick={this.logout}>
                <img src={img3} alt="Log off" />
                {`Wyloguj`}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Acc;
