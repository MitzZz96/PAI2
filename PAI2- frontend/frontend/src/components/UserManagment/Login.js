import React, { Component } from "react";
import classnames from "classnames";
import fire from "../../Config/Fire";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    user: {},
    err: false
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
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
        window.alert(`${err}`);
      });
  };

  signUp = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.moveWin)
      .catch(err => {
        console.log(err);
        window.alert(`${err}`);
      });
  };

  moveWin = () => {
    setTimeout(function() {
      window.location.href = "/register";
    }, 1000);
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
            <div className="col-md-6 m-auto">
              <div className="border-log mx-auto">
                <h3 className="display-4 text-center">Logowanie</h3>
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

                    <br />
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

                  <div className="button_log">
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
