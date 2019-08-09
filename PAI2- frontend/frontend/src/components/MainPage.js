import React, { Component } from "react";
import mieso from "../images/MainPage/mieso.jpg";
import nabial from "../images/MainPage/nabial.jpg";
import pieczywo from "../images/MainPage/pieczywo.jpg";
import slodycze from "../images/MainPage/slodycze.jpg";
import owoce from "../images/MainPage/owoce.jpg";
import napoje from "../images/MainPage/napoje.jpg";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="row">
            <div className="col-md-12 m-auto">
              <div className="title">
                <h1>Świeże produkty dla Ciebie!</h1>
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="card main-page">
                <Link to={`miesa`}>
                  <img src={mieso} className="card-img-top" alt="wedlina" />
                  <div className="card-body">
                    <h5 className="card-title">Świeże mięso</h5>
                    <p className="card-text" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-4 m-auto">
              <div className="card main-page">
                <Link to={`nabiał`}>
                  <img src={nabial} className="card-img-top" alt="nabial" />
                  <div className="card-body">
                    <h5 className="card-title">Nabiał</h5>
                    <p className="card-text" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-4 m-auto">
              <div className="card main-page">
                <Link to={`pieczywo`}>
                  <img src={pieczywo} className="card-img-top" alt="pieczywo" />
                  <div className="card-body">
                    <h5 className="card-title">Chrupiące pieczywo</h5>
                    <p className="card-text" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="card main-page">
                <Link to={`owoce`}>
                  <img src={owoce} className="card-img-top" alt="owoce" />
                  <div className="card-body">
                    <h5 className="card-title">Soczyste owoce</h5>
                    <p className="card-text" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-4 m-auto">
              <div className="card main-page">
                <Link to={`slodycze`}>
                  <img src={slodycze} className="card-img-top" alt="slodycze" />
                  <div className="card-body">
                    <h5 className="card-title">Slodziutkie słodycze</h5>
                    <p className="card-text" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-4 m-auto">
              <div className="card main-page">
                <Link to={`napoje`}>
                  <img src={napoje} className="card-img-top" alt="napoje" />
                  <div className="card-body">
                    <h5 className="card-title">Napoje</h5>
                    <p className="card-text" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
