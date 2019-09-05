import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { changeOrderState, getUser } from "../../actions/userActions";
import { connect } from "react-redux";
class OrderItem extends Component {
  state = {
    status: "",
    statusPL: "",
    client_clicked: false,
    uid: this.props.cart.uid
  };

  // componentWillUnmount() {
  //   this.props.getUser(this.state.uid);
  // }

  handleChangeStatus = e => {
    if (e.target.value === "Wybierz...") {
      this.setState({
        status: "",
        statusPL: e.target.value
      });
    } else if (e.target.value === "Wysłano") {
      this.setState({
        status: "SENT",
        statusPL: e.target.value
      });
    } else if (e.target.value === "Zakończone") {
      this.setState({
        status: "COMPLETED",
        statusPL: e.target.value
      });
    } else if (e.target.value === "Zmaówienie anulowane") {
      this.setState({
        status: "CANCELLED",
        statusPL: e.target.value
      });
    }
  };

  handleClick = e => {
    e.preventDefault();

    this.props.changeOrderState(this.props.cart.idCart, this.state.status);
    this.reloadWin();
  };

  reloadWin = () => {
    setTimeout(function() {
      window.location.reload(true);
    }, 1000);
  };

  render() {
    const { cart } = this.props;
    const { user } = this.props;

    return (
      <React.Fragment>
        <tr>
          <th scope="row">{this.props.index}</th>
          <td>{user.firstName || "Feaching"}</td>
          <td>{user.lastName}</td>
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
          <td>{cart.shipDate === null ? "-" : cart.shipDate}</td>
          <td>{cart.summaryCost} zł</td>
          <td>
            <select
              id="inputState"
              // className="custom-select"
              name="status"
              value={this.state.statusPL}
              onChange={this.handleChangeStatus}
            >
              <option defaultValue>Wybierz...</option>
              <option>Wysłano</option>
              <option>Zakończone</option>
              <option>Zmaówienie anulowane</option>
            </select>
            <button onClick={this.handleClick}>Zmień</button>
          </td>
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
      </React.Fragment>
    );
  }
}

OrderItem.propTypes = {
  changeOrderState: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  address: state.address
});

export default connect(
  mapStateToProps,
  { changeOrderState, getUser }
)(OrderItem);
