import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../UserManagment/Login";
import img1 from "../../images/icons/book-interface.png";
import img2 from "../../images/icons/shopping-cart-interface.png";
import img3 from "../../images/icons/log-off.png";
import fire from "../../Config/Fire";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../../actions/userActions";

class Account extends Component {
  state = {
    user: {},
    uid: "",
    userLogged: {}
  };

  componentDidMount() {
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        uid: userLog.uid,
        userLogged: this.props.address.userLogged
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.state.uid !== prevProps.address.userLogged.uid) {
      this.props.getUser(this.state.uid);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { user } = nextProps.user;
    const { userLogged } = nextProps.address;
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState({
        uid: userLog.uid,
        user,
        userLogged
      });
    }
  }

  render() {
    const logout = () => {
      fire.auth().signOut();
      window.location.href = "/";
    };

    return (
      <div className="container user">
        <h1>Witaj {this.state.userLogged.firstName}</h1>
        {this.state.userLogged.client ? (
          <EmployeeAcc logFunc={logout} user={this.state.user} />
        ) : (
          <UserAcc logFunc={logout} user={this.state.user} />
        )}
      </div>
    );
  }
}

const UserAcc = props => {
  const logout = () => {
    fire.auth().signOut();
    window.location.href = "/";
  };
  return (
    <div className="row">
      <div className="col-9 mx-auto col-lg-4 my-3">
        <div className="card order">
          <div className="card-body order">
            <img src={img1} alt="Zamowienia" />
            {`Twoje zamówienia`}
          </div>
        </div>
      </div>
      <div className="col-9 mx-auto col-lg-4 my-3">
        <div className="card order">
          <Link to={`/address`}>
            <div className="card-body order">
              <img src={img2} alt="Adresy" />
              {`Twoje dane kontaktowe`}
            </div>
          </Link>
        </div>
      </div>
      <div className="col-9 mx-auto col-lg-4 my-3">
        <div className="card order">
          <div className="card-body order" onClick={logout}>
            <img src={img3} alt="Log off" />
            {`Wyloguj`}
          </div>
        </div>
      </div>
    </div>
  );
};

const EmployeeAcc = props => {
  const logout = () => {
    fire.auth().signOut();
    window.location.href = "/";
  };
  return (
    <div className="row">
      <div className="col-9 mx-auto col-lg-4 my-3">
        <div className="card order">
          <div className="card-body order">
            <img src={img1} alt="Zamowienia" />
            {`Zamówienia`}
          </div>
        </div>
      </div>
      <div className="col-9 mx-auto col-lg-4 my-3">
        <div className="card order">
          <Link to={`/address`}>
            <div className="card-body order">
              <img src={img2} alt="Klienci" />
              {`Aktywni klienci`}
            </div>
          </Link>
        </div>
      </div>
      <div className="col-9 mx-auto col-lg-4 my-3">
        <div className="card order">
          <div className="card-body order" onClick={logout}>
            <img src={img3} alt="Log off" />
            {`Wyloguj`}
          </div>
        </div>
      </div>
    </div>
  );
};

Account.propTypes = {
  getUser: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  address: state.address
});

export default connect(
  mapStateToProps,
  { getUser }
)(Account);
