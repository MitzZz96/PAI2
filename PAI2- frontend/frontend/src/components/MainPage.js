import React, { Component } from "react";

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
                <a href="#">
                  <img
                    src="png/wedlina.png"
                    className="card-img-top"
                    alt="wedlina"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Świeże mięso</h5>
                    <p className="card-text" />
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 m-auto">
              <div className="card main-page">
                <a href="#">
                  <img
                    src="png/Nabial.png"
                    className="card-img-top"
                    alt="nabial"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text" />
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 m-auto">
              <div className="card main-page">
                <a href="#">
                  <img
                    src="png/pieczywo.png"
                    className="card-img-top"
                    alt="pieczywo"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="card main-page">
                <a href="#">
                  <img
                    src="png/owoce.png"
                    className="card-img-top"
                    alt="owoce"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Świeże mięso</h5>
                    <p className="card-text" />
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 m-auto">
              <div className="card main-page">
                <a href="#">
                  <img
                    src="png/słodycze.png"
                    className="card-img-top"
                    alt="slodycze"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text" />
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 m-auto">
              <div className="card main-page">
                <a href="#">
                  <img
                    src="png/napoje.png"
                    className="card-img-top"
                    alt="napoje"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
