import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Acc extends Component {
  render() {
    return (
      <div className="container">
        <div className="card acc mx-auto">
          <div className="card-header">
            <h3>Witaj nieznajomy!</h3>
          </div>
          <ul className="list-group list-group-flush mx-auto">
            <li className="list-group-item">
              <Link to={`/register`}>
                <button className="btn btn-danger">Rejestracja</button>
              </Link>
            </li>
            <li className="list-group-item">
              <Link to={`/login`}>
                <button className="btn btn-danger">Logowanie</button>
              </Link>
            </li>
            <li className="list-group-item">
              <Link to={``}>
                <button className="btn btn-danger">Dashboard</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Acc;
