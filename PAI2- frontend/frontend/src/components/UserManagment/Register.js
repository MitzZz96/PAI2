import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

export class Register extends Component {
  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      //    "is-invalid": errors.fullName
                    })}
                    placeholder="Full Name"
                    name="fullName"
                    value={``}
                    onChange={this.onChange}
                  />
                  {/*{errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}*/}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      //     "is-invalid": errors.username
                    })}
                    placeholder="Email Address (Username)"
                    name="username"
                    value={``}
                    onChange={this.onChange}
                  />
                  {/*{errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}*/}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      //  "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={``}
                    onChange={this.onChange}
                  />
                  {/* {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                 )}*/}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      //   "is-invalid": errors.confirmPassword
                    })}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={``}
                    onChange={this.onChange}
                  />
                  {/*{errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}*/}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Register;
