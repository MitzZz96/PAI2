import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAddress, getContact, getAllUsers } from "../../actions/userActions";

class Addresses extends Component {
  state = {
    address: {},
    contact: {}
  };

  componentDidMount() {
    //   this.setState({
    //     address: this.props.address.userLogged.address,
    //     contact: this.props.address.userLogged.contact
    //   });
    this.props.getAllUsers();
  }
  //   componentWillReceiveProps(nextProps) {
  //     const { address } = nextProps.address;
  //     const { contact } = nextProps.address;
  //     this.setState({
  //       address,
  //       contact
  //     });
  //   }

  render() {
    const { address } = this.state;
    const { contact } = this.state;
    let indexAddress = 1;
    let indexContact = 1;

    let upperTab = this.props.address.users.map(user => {
      return (
        <tr key={user.idUser}>
          <th scope="row">{indexContact++}</th>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.contact.email}</td>
          <td>{user.contact.number1}</td>
          <td>{user.contact.number2 ? user.contact.number2 : "-"}</td>
        </tr>
      );
    });

    let lowerTab = this.props.address.users.map(user => {
      return (
        <tr key={user.idUser}>
          <th scope="row">{indexAddress++}</th>
          <td>{user.address.streetAddress}</td>
          <td>{user.address.homeNumber}</td>
          <td>{user.address.localNumber}</td>
          <td>{user.address.city}</td>
          <td>{user.address.stateOrProvince}</td>
          <td>{user.address.zipCode}</td>
        </tr>
      );
    });

    return (
      <div className="container">
        <div className="main">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">
                Dane kontaktowe klientów
              </h1>
              <hr />
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Imię</th>
                    <th scope="col">Nazwisko</th>
                    <th scope="col">Email</th>
                    <th scope="col">Numer 1</th>
                    <th scope="col">Numer 2</th>
                  </tr>
                </thead>
                <tbody>{upperTab}</tbody>
              </table>

              <hr />
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ulica</th>
                    <th scope="col">Nr domu</th>
                    <th scope="col">Nr mieszkania</th>
                    <th scope="col">Miasto</th>
                    <th scope="col">Województwo</th>
                    <th scope="col">Kod pocztowy</th>
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
  // getAddress: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired,
  // getContact: PropTypes.func.isRequired,
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
