import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAddress, getContact, getAllUsers } from "../../actions/userActions";

export class Clients extends Component {
  state = {
    address: {},
    contact: {},
    users: [],
    client_clicked: false
  };

  componentDidMount() {
    this.props.getAddress(1);
    this.props.getContact(1);
    this.props.getAllUsers();
  }

  componentWillReceiveProps(nextProps) {
    const { address } = nextProps.address;
    const { contact } = nextProps.address;
    const { users } = nextProps.address;
    this.setState({
      address,
      contact,
      users
    });
  }

  render() {
    const { address } = this.state;
    const { contact } = this.state;
    let users = this.state.users.filter(client => {
      return client.client === true;
    });
    let idUsers = users.map((id, a, b) => {
      return (
        <tr>
          <th scope="row" />
          <td>{users[a].firstName}</td>
          <td>{users[a].lastName}</td>
          <td>
            <button
              onClick={() => {
                var x = document.getElementById(`${users[a].idUser}`);
                if (x.style.display === "none") {
                  x.style.display = "block";
                } else {
                  x.style.display = "none";
                }
                this.setState({
                  client_clicked: !this.state.client_clicked
                });
              }}
            >
              {this.state.client_clicked ? "Ukryj" : "Pokaż"}
            </button>
          </td>
        </tr>
      );
    });

    let contactUsers = users.map((id, a) => {
      return (
        <table
          className="table table-striped table-hover"
          id={users[a].idUser}
          style={{ display: "none" }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ulica</th>
              <th scope="col">Nr domu</th>
              <th scope="col">Nr mieszkania</th>
              <th scope="col">Miasto</th>
              <th scope="col">Województwo</th>
              <th scope="col">Kod pocztowy</th>
              <th scope="col">Email</th>
              <th scope="col">Numer 1</th>
              <th scope="col">Numer 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{address.idAddress}</th>
              <td>{address.streetAddress}</td>
              <td>{address.homeNumber}</td>
              <td>{address.localNumber}</td>
              <td>{address.city}</td>
              <td>{address.stateOrProvince}</td>
              <td>{address.zipCode}</td>
              <td>{contact.email}</td>
              <td>{contact.number1}</td>
              <td>{contact.number2 ? contact.number2 : "-"}</td>
            </tr>
          </tbody>
        </table>
      );
    });
    return (
      <div className="container">
        <div className="main">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Aktywni klienci</h1>
              <hr />
              {idUsers.length === 0 ? (
                <h1 style={{ textAlign: "center", color: "red" }}>
                  Brak aktywnych klientów
                </h1>
              ) : (
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Imię</th>
                      <th scope="col">Nazwisko</th>
                      <th scope="col">Dane kontaktowe</th>
                    </tr>
                  </thead>
                  <tbody>{idUsers}</tbody>
                </table>
              )}

              <hr />
              {contactUsers}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Clients.propTypes = {
  getAddress: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  address: state.address,
  contact: state.contact
});

export default connect(
  mapStateToProps,
  { getAddress, getContact, getAllUsers }
)(Clients);
