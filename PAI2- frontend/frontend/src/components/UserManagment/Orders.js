import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  getAddress,
  getContact,
  getAllUsers,
  getUserCart,
  getAllCarts,
  getUser
} from "../../actions/userActions";
import fire from "../../Config/Fire";

export class Orders extends Component {
  state = {
    address: {},
    contact: {},
    users: [],
    client_clicked: false,
    carts: [],
    filtred_clients: [],
    uid: ""
  };

  componentDidMount() {
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        uid: userLog.uid
      });
    }
    this.props.getAddress(1);
    this.props.getContact(1);
    this.props.getAllUsers();
    this.props.getAllCarts();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== 3) {
  //     let tab = [];
  //     for (let i = 0; i < this.state.filtred_clients.length; i++) {
  //       console.log(this.state.filtred_clients[i].uid);
  //       this.props.getUserCart(this.state.filtred_clients[i].uid);
  //       tab.push(this.props.address.cart);
  //       console.log(tab);
  //     }
  //   }
  // }

  componentDidUpdate(prevProps) {
    if (this.state.uid !== prevProps.address.userLogged.uid) {
      this.props.getUser(this.state.uid);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { address } = nextProps.address;
    const { contact } = nextProps.address;
    const { users } = nextProps.address;
    const { carts } = nextProps.address;
    let orderSent = this.state.carts.filter(cart => {
      return cart.orderState === "SENT";
    });
    this.setState({
      address,
      contact,
      users,
      carts,
      filtred_clients: orderSent
    });

    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        uid: userLog.uid
      });
    }
  }

  render() {
    const { address } = this.state;
    const { contact } = this.state;

    const orderSent = this.state.carts.filter(cart => {
      return cart.orderState === "SENT";
    });
    const users = this.state.users.filter(client => {
      return client.client === true;
    });
    // for (let i = 0; i < users.length; i++) {
    //   console.log("licznik pętli: " + i); //0, 1...
    //   for (let i = 0; i < this.state.filtred_clients.length; i++) {
    //     if (this.state.filtred_clients[i] === users[i].uid)
    //       users[i].push("SENT");
    //     console.log(this.state.filtred_clients[i].uid);
    //   }

    //   console.log("element: " + users[i].firstName); //tab[0], tab[1]...
    // }
    // console.log(users);
    // for (let i = 0; i < this.state.filtred_clients.length; i++) {
    //   console.log(this.state.filtred_clients[i].uid);
    // }

    let arr1 = this.state.filtred_clients;

    const finalarray = [];
    arr1.forEach(e1 =>
      users.forEach(e2 => {
        if (e1.uid === e2.uid) {
          finalarray.push(e2);
        }
      })
    );

    let index = 1;
    let idUsers = finalarray.map((index, a, b) => {
      let status = this.state.filtred_clients.map(status => {
        return status.orderState;
      });
      let uid = this.state.filtred_clients.map(status => {
        return status.uid;
      });

      return (
        <tr>
          <th scope="row" key={index++} />
          <td>{finalarray[a].firstName}</td>
          <td>{finalarray[a].lastName}</td>
          <td>{status}</td>
          <td>
            <button
              onClick={() => {
                var x = document.getElementById(`${finalarray[a].idUser}`);
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
          <td>
            <Link to={`/map/${uid}`}>
              <button>Mapa</button>
            </Link>
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
              <h1 className="display-4 text-center">Aktywne zamówienia</h1>
              <hr />

              {idUsers.length === 0 ? (
                <h1 style={{ textAlign: "center", color: "red" }}>
                  Brak aktywnych zamówień
                </h1>
              ) : (
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Imię</th>
                      <th scope="col">Nazwisko</th>
                      <th scope="col">Status</th>
                      <th scope="col">Dane kontaktowe</th>
                      <th scope="col">Mapa dojazdu</th>
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

const OrderItem = props => {
  const { cart } = props;
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>{cart.shipDate === null ? "-" : cart.shipDate}</td>
      <td>{cart.deliveryDate === null ? "-" : cart.deliveryDate}</td>
      <td>
        {cart.orderState === "SENT"
          ? "Wysłano"
          : cart.orderState === "EMPTY"
          ? "Koszyk jest pusty"
          : cart.orderState === "PENDING"
          ? "Oczekujące zamówienie"
          : cart.orderState === "AWAITING_PAYMENT"
          ? "Oczekująca zapłata"
          : cart.orderState === "PAID"
          ? "Zapłacone"
          : cart.orderState === "COMPLETED"
          ? "Zakończone"
          : cart.orderState === "CANCELLED"
          ? "Zmaówienie anulowane"
          : null}
      </td>
      <td>{cart.summaryCost} zł</td>
      <td>
        <Link to={`/orderDetails/${cart.idCart}`}>
          <button>Szczegóły</button>
        </Link>
      </td>

      <td>
        <Link to={`/map/${cart.uid}`}>
          <button>Mapa</button>
        </Link>
      </td>
    </tr>
  );
};

Orders.propTypes = {
  getAddress: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  getUserCart: PropTypes.func.isRequired,
  getAllCarts: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  address: state.address,
  contact: state.contact
});

export default connect(
  mapStateToProps,
  { getAddress, getContact, getAllUsers, getUserCart, getAllCarts, getUser }
)(Orders);
