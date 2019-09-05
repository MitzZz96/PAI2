import React, { Component } from "react";
import Login from "../UserManagment/Login";
import Account from "./Account";
import { getAllUsers, getAllCarts } from "../../actions/userActions";

import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Acc extends Component {
  componentDidMount() {
    this.props.getAllUsers();
    this.props.getAllCarts();
  }
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

Acc.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  getAllCarts: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  address: state.address,
  contact: state.contact
});

export default connect(
  mapStateToProps,
  { getAllUsers, getAllCarts }
)(Acc);
