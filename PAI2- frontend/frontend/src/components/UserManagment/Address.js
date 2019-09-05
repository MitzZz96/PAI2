import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Address extends Component {
  state = {
    address: {},
    contact: {}
  };

  componentDidMount() {
    this.setState({
      address: this.props.address.userLogged.address,
      contact: this.props.address.userLogged.contact
    });
  }

  render() {
    const { address } = this.state;
    const { contact } = this.state;
    let indexAddress = 1;
    let indexContact = 1;
    return (
      <div className="container">
        <div className="main">
          <div className="row">
            <div className="col-md-12">
              <h1 className="customer-contact-details display-4 text-center">
                Twoje dane kontaktowe
              </h1>
              <hr />
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">
                      <center>#</center>
                    </th>
                    <th scope="col">
                      <center>Ulica</center>
                    </th>
                    <th scope="col">
                      <center>Nr domu</center>
                    </th>
                    <th scope="col">
                      <center>Nr mieszkania</center>
                    </th>
                    <th scope="col">
                      <center>Miasto</center>
                    </th>
                    <th scope="col">
                      <center>Województwo</center>
                    </th>
                    <th scope="col">
                      <center>Kod pocztowy</center>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <center>{indexAddress++}</center>
                    </th>
                    <td>
                      <center>{address.streetAddress}</center>
                    </td>
                    <td>
                      <center>{address.homeNumber}</center>
                    </td>
                    <td>
                      <center>{address.localNumber}</center>
                    </td>
                    <td>
                      <center>{address.city}</center>
                    </td>
                    <td>
                      <center>{address.stateOrProvince}</center>
                    </td>
                    <td>
                      <center>{address.zipCode}</center>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">
                      <center>#</center>
                    </th>
                    <th scope="col">
                      <center>Email</center>
                    </th>
                    <th scope="col">
                      <center>Numer 1</center>
                    </th>
                    <th scope="col">
                      <center>Numer 2</center>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <center>{indexContact++}</center>
                    </th>
                    <td>
                      <center>{contact.email}</center>
                    </td>
                    <td>
                      <center>{contact.number1}</center>
                    </td>
                    <td>
                      <center>{contact.number2 ? contact.number2 : "-"}</center>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Address.propTypes = {
  address: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  address: state.address,
  contact: state.contact
});

export default connect(mapStateToProps)(Address);
