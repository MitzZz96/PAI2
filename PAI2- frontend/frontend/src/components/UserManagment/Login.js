import React, { Component } from "react";
import classnames from "classnames";
import fire from "../../Config/Fire";
import { Link } from "react-router-dom";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    user: {}
  };

  componentDidMount() {
    const { user } = this.props;
    this.setState({
      user
    });
  }

  componentWillReceiveProps(nextProps) {
    const { user } = nextProps;
    this.setState({
      user
    });
  }

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(err => {
        console.log(err);
      });
  };

  signUp = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
    this.moveWin();
  };

  moveWin = () => {
    setTimeout(function() {
      window.location.href = "/register";
    }, 2000);
  };

  text = () => {
    console.log("twoja stara");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Logowanie</h1>
              <form onSubmit={this.login}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      //   "is-invalid": errors.username
                    })}
                    placeholder="Adres Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  {/* {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                 )}*/}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      //   "is-invalid": errors.password
                    })}
                    placeholder="Hasło"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  {/* {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                 )} */}
                </div>

                <button
                  type="submit"
                  className="btn btn-info mx-auto btn-lg btn-block"
                  onClick={this.login}
                >
                  Zaloguj
                </button>
                <button
                  type="submit"
                  className="btn btn-info mx-auto btn-lg btn-block"
                  onClick={this.signUp}
                >
                  Zarejestruj
                </button>
              </form>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Login;
