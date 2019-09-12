import React, { Component } from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/icons/book-interface.png";
import img2 from "../../images/icons/shopping-cart-interface.png";
import img3 from "../../images/icons/log-off.png";
import zdjecie1 from "../../images/Account/zdjecie1.png";
import fire from "../../Config/Fire";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../../actions/userActions";

class Account extends Component {
  state = {
    user: {},
    uid: "",
    userLogged: {},
    userFire: fire.auth().currentUser
  };

  componentDidMount() {
    console.log("hi");
    var userLog = fire.auth().currentUser;
    this.setState(
      {
        uid: localStorage.getItem("user")
        // userLogged: userLog
      },
      console.log("done", this.state.userLogged),
      this.props.getUser(this.state.uid),
      console.log("doneMountGet")
    );

    // if (userLog) {
    //   this.setState(
    //     {
    //       // uid: userLog.uid,
    //       userLogged: this.props.address.userLogged,
    //       userFire: userLog
    //     },
    //     console.log("doneUserLog")
    //   );
    // }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user.user !== null) {
      if (this.state.uid !== prevProps.address.userLogged.uid) {
        this.props.getUser(this.state.uid);
        console.log("donegetuser", prevProps.address.userLogged);

        console.log("poszlo");
        // this.moveWin();
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { user } = nextProps.user;
    const { userLogged } = nextProps.address;
    var userLog = fire.auth().currentUser;
    if (userLog) {
      this.setState(
        {
          uid: userLog.uid,
          user,
          userLogged
        },
        console.log("doneupdate", userLogged),
        this.moveWin()
      );
    }
    // if (localStorage.getItem("user") !== nextProps.address.userLogged.uid) {
    //   console.log(localStorage.getItem("user"));
    //   this.moveWin();
    // }
  }

  moveWin = () => {
    if (this.state.uid !== this.props.address.userLogged.uid) {
      setTimeout(function() {
        window.location.href = "/register";
      }, 1000);
      console.log("yas");
    } else {
      return console.log("nope");
    }
  };

  render() {
    const logout = () => {
      fire.auth().signOut();
      window.location.href = "/";
    };

    return (
      <div className="container-user">
        <center>
          <h1>Witamy na Twoim koncie {this.state.userLogged.firstName}</h1>
        </center>
        <hr />
        {this.state.userLogged.client ? (
          <UserAcc logFunc={logout} user={this.state.user} />
        ) : (
          <EmployeeAcc logFunc={logout} user={this.state.user} />
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
    <div className="container">
      <div className="col-9 mx-auto">
        <div className="container-account">
          <img src={zdjecie1} alt="account" />
        </div>

        <div className="row">
          <div className="col-6 col-md-4 mt-5 mb-5">
            <div className="card order">
              <Link to={`/ordersClient`}>
                <div className="card-body order">
                  <img src={img1} alt="Zamowienia" />
                  <br />
                  <div className="card-title">{`Zamówienia`}</div>
                  <p className="description">
                    Sprawdź produkty znajdujujące się w Twoim zamówieniu.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-4 mt-5 mb-5">
            <div className="card order">
              <Link to={`/address`}>
                <div className="card-body order">
                  <img src={img2} alt="Adresy" />
                  <br />
                  <div className="card-title">{`Dane kontaktowe`}</div>
                  <p className="description">
                    Przejrzyj jakie posiadasz dane kontaktowe.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-4 mt-5 mb-5 ">
            <div className="card order">
              <div className="card-body order" onClick={logout}>
                <img src={img3} alt="Log off" />
                <br />
                <div className="card-title">{`Wyloguj`}</div>
                <p className="description">
                  Wylogowując się chronisz dostęp do swojego konta.
                </p>
              </div>
            </div>
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
    <div className="container">
      <div className="col-9 mx-auto">
        <div className="container-account">
          <img src={zdjecie1} alt="account" />
        </div>

        <div className="row">
          <div className="col-6 col-md-4 mt-5 mb-5">
            <div className="card order">
              <Link to={`/orders`}>
                <div className="card-body order">
                  <img src={img1} alt="Zamowienia" />
                  <br />
                  <div className="card-title">{`Zamówienia`}</div>
                  <p className="description">
                    Sprawdź aktualne zamówienia w sklepie.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-4 mt-5 mb-5">
            <div className="card order">
              <Link to={`/addresses`}>
                <div className="card-body order">
                  <img src={img2} alt="Adresy" />
                  <br />
                  <div className="card-title">{`Dane kontaktowe`}</div>
                  <p className="description">
                    Przejrzyj dane kontaktowe naszych klientów.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-4 mt-5 mb-5 ">
            <div className="card order">
              <div className="card-body order" onClick={logout}>
                <img src={img3} alt="Log off" />
                <br />
                <div className="card-title">{`Wyloguj`}</div>
                <p className="description">
                  Wylogowując się chronisz dostęp do swojego konta.
                </p>
              </div>
            </div>
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
