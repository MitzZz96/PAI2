import React, { Component } from "react";
import Login from "../UserManagment/Login";
import Account from "./Account";

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

export default Acc;
