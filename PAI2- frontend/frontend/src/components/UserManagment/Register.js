import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import fire from "../../Config/Fire";
import _ from "lodash";
import { addNewUser } from "../../actions/userActions";

export class Register extends Component {
  state = {
    uid: "",
    firstName: "",
    lastName: "",
    client: false,
    address: {
      city: "",
      homeNumber: null,
      localNumber: null,
      streetAddress: "",
      zipCode: "",
      stateOrProvince: ""
    },
    contact: {
      email: "",
      number1: null,
      number2: null
    }
  };

  componentWillReceiveProps() {
    var user = fire.auth().currentUser;

    this.setState({
      uid: user.uid,
      contact: {
        email: user.email
      }
    });
  }

  handleChangeName = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChangeContact = e => {
    let path = e.target.name;
    let value = e.target.value;
    let newNestedjson = this.state.contact;
    newNestedjson = _.set(newNestedjson, path, value);
    this.setState({
      contact: newNestedjson
    });
  };

  handleChangeAddress = e => {
    let path = e.target.name;
    let value = e.target.value;
    let newNestedjson = this.state.address;
    newNestedjson = _.set(newNestedjson, path, value);
    this.setState({
      address: newNestedjson
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      uid: this.state.uid,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      client: true,
      address: {
        city: this.state.address.city,
        homeNumber: this.state.address.homeNumber,
        localNumber: this.state.address.localNumber,
        streetAddress: this.state.address.streetAddress,
        zipCode: this.state.address.zipCode,
        stateOrProvince: this.state.address.stateOrProvince
      },
      contact: {
        email: this.state.contact.email,
        number1: this.state.contact.number1,
        number2: this.state.contact.number2
      }
    };

    console.log(newUser);

    this.props.addNewUser(newUser);

    window.location.href = "/acc";
  };

  render() {
    return (
      <div className="container">
        <div className="register">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="reg display-4 text-center">Rejestracja</h1>
              <hr></hr>
              <p className="lead text-center">Dodaj nowy adres</p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFirstName">Imię</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="inputFirstName"
                      placeholder="Imię"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleChangeName}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputLastName">Nazwisko</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="inputLastName"
                      placeholder="Nazwisko"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleChangeName}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputAddress">Adres</label>
                    <input
                      type="text"
                      className="form-control shadow-none "
                      id="inputAddress"
                      placeholder="Podaj ulicę "
                      name="streetAddress"
                      value={_.get(this.state.address, "streetAddress")}
                      onChange={this.handleChangeAddress}
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputHomeNumber">Nr domu</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="inputHomeNumber"
                      placeholder="Nr domu"
                      name="homeNumber"
                      value={_.get(this.state.address, "homeNumber")}
                      onChange={this.handleChangeAddress}
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputLocalNumber">Nr mieszkania</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="inputLocalNumber"
                      placeholder="Nr miesz"
                      name="localNumber"
                      value={_.get(this.state.address, "localNumber")}
                      onChange={this.handleChangeAddress}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">Miasto</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="inputCity"
                      placeholder="Podaj miasto"
                      name="city"
                      value={_.get(this.state.address, "city")}
                      onChange={this.handleChangeAddress}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">Województwo</label>
                    <select
                      id="inputState"
                      className="form-control shadow-none"
                      name="stateOrProvince"
                      value={_.get(this.state.address, "stateOrProvince")}
                      onChange={this.handleChangeAddress}
                    >
                      <option defaultValue>Wybierz...</option>
                      <option>Dolnośląskie</option>
                      <option>Kujawsko-pomorskie</option>
                      <option>Lubelskie</option>
                      <option>Lubuskie</option>
                      <option>Łódzkie</option>
                      <option>Małopolskie</option>
                      <option>Mazowieckie</option>
                      <option>Opolskie</option>
                      <option>Podkarpackie</option>
                      <option>Podlaskie</option>
                      <option>Pomorskie</option>
                      <option>Śląskie</option>
                      <option>Świętokrzyskie</option>
                      <option>Warmińsko-mazurskie </option>
                      <option>Wielkopolskie</option>
                      <option>Zachodniopomorskie</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Kod pocztowy</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="inputZip"
                      placeholder="Kod poczt..."
                      name="zipCode"
                      value={_.get(this.state.address, "zipCode")}
                      onChange={this.handleChangeAddress}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPhoneNumber1">Nr telefonu 1</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="inputPhoneNumber1"
                      placeholder="Nr telefonu 1"
                      name="number1"
                      value={_.get(this.state.contact, "number1")}
                      onChange={this.handleChangeContact}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPhoneNumber2">Nr telefonu 2</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="inputPhoneNumber2"
                      placeholder="Nr telefonu 2"
                      name="number2"
                      value={_.get(this.state.contact, "number2")}
                      onChange={this.handleChangeContact}
                    />
                  </div>
                </div>
            
                <input type="submit" className="button-register btn btn-info btn-block btn-default shadow-none mt-4 mb-5" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  addNewUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { addNewUser }
)(Register);
