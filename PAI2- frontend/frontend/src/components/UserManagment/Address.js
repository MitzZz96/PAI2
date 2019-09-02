import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAddress, getContact } from "../../actions/userActions";

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
    // this.props.getAddress(1);
    // this.props.getContact(1);
  }
  // componentWillReceiveProps(nextProps) {
  //   const { address } = nextProps.address;
  //   const { contact } = nextProps.address;
  //   this.setState({
  //     address,
  //     contact
  //   });
  // }

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
              <h1 className="display-4 text-center">Twoje dane kontaktowe</h1>
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
                <tbody>
                  <tr>
                    <th scope="row">{indexAddress++}</th>
                    <td>{address.streetAddress}</td>
                    <td>{address.homeNumber}</td>
                    <td>{address.localNumber}</td>
                    <td>{address.city}</td>
                    <td>{address.stateOrProvince}</td>
                    <td>{address.zipCode}</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Numer 1</th>
                    <th scope="col">Numer 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{indexContact++}</th>
                    <td>{contact.email}</td>
                    <td>{contact.number1}</td>
                    <td>{contact.number2 ? contact.number2 : "-"}</td>
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
  // getAddress: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired
  // getContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  address: state.address,
  contact: state.contact
});

export default connect(mapStateToProps)(Address);
