import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllUsers } from "../../actions/userActions";

class Addresses extends Component {
  state = {
    address: {},
    contact: {}
  };

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    let indexAddress = 1;
    let indexContact = 1;

    let upperTab = this.props.address.users.map(user => {
      return (
        <tr key={user.idUser}>
        <th scope="row"><center>{indexContact++}</center></th>
        <td><center>{user.firstName}</center></td>
        <td><center>{user.lastName}</center></td>
        <td><center>{user.contact.email}</center></td>
        <td><center>{user.contact.number1}</center></td>
        <td>{user.contact.number2 ?<center> {user.contact.number2}</center> :<center> - </center>}</td>
      </tr>
      );
    });

    let lowerTab = this.props.address.users.map(user => {
      return (
        <tr key={user.idUser}>
        <th scope="row"><center>{indexAddress++}</center></th>
        <td><center>{user.address.streetAddress}</center></td>
        <td><center>{user.address.homeNumber}</center></td>
        <td><center>{user.address.localNumber}</center></td>
        <td><center>{user.address.city}</center></td>
        <td><center>{user.address.stateOrProvince}</center></td>
        <td><center>{user.address.zipCode}</center></td>
      </tr>
      );
    });

    return (
      <div className="container">
      <div className="main">
        <div className="row">
          <div className="col-md-12">
            <h1 className="customer-contact-details display-4 text-center">
              Dane kontaktowe klientów
            </h1>
            <hr />
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col"><center>#</center></th>
                  <th scope="col"><center>Imię</center></th>
                  <th scope="col"><center>Nazwisko</center></th>
                  <th scope="col"><center>Email</center></th>
                  <th scope="col"><center>Numer 1</center></th>
                  <th scope="col"><center>Numer 2</center></th>
                </tr>
              </thead>
              <tbody>{upperTab}</tbody>
            </table>

            <hr />
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col"><center>#</center></th>
                  <th scope="col"><center>Ulica</center></th>
                  <th scope="col"><center>Nr domu</center></th>
                  <th scope="col"><center>Nr mieszkania</center></th>
                  <th scope="col"><center>Miasto</center></th>
                  <th scope="col"><center>Województwo</center></th>
                  <th scope="col"><center>Kod pocztowy</center></th>
                </tr>
              </thead>
              <tbody>{lowerTab}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

Addresses.propTypes = {
  address: PropTypes.object.isRequired,
  getAllUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  address: state.address,
  contact: state.contact
});

export default connect(
  mapStateToProps,
  { getAllUsers }
)(Addresses);
