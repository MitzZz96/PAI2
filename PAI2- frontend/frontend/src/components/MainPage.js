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
        <main className="main">
          <section className="section_main">
            <header className="title">
              <h1>Świeże produkty dla Ciebie!</h1>
              <hr />
            </header>

            <div className="row">
              <div className="col-sm-6 col-md-4">
                <figure className="figure_main">
                  <div className="card main-page">
                    <Link to={`miesa`}>
                      <img src={mieso} alt="wedlina" />
                      <div className="card-body">
                        <h5 className="card-title">Świeże mięso</h5>
                        <p className="card-text" />
                      </div>
                    </Link>
                  </div>
                </figure>
              </div>

              <div className="col-sm-6 col-md-4">
                <figure className="figure_main">
                  <div className="card main-page">
                    <Link to={`nabiał`}>
                      <img src={nabial} alt="nabial" />
                      <div className="card-body">
                        <h5 className="card-title">Nabiał</h5>
                        <p className="card-text" />
                      </div>
                    </Link>
                  </div>
                </figure>
              </div>

              <div className="col-sm-6 col-md-4">
                <figure className="figure_main">
                  <div className="card main-page">
                    <Link to={`pieczywo`}>
                      <img src={pieczywo} alt="pieczywo" />
                      <div className="card-body">
                        <h5 className="card-title">Chrupiące pieczywo</h5>
                        <p className="card-text" />
                      </div>
                    </Link>
                  </div>
                </figure>
              </div>

              <div className="col-sm-6 col-md-4">
                <figure className="figure_main">
                  <div className="card main-page">
                    <Link to={`owoce`}>
                      <img src={owoce} alt="owoce" />
                      <div className="card-body">
                        <h5 className="card-title">Soczyste owoce</h5>
                        <p className="card-text" />
                      </div>
                    </Link>
                  </div>
                </figure>
              </div>

              <div className="col-sm-6 col-md-4">
                <figure className="figure_main">
                  <div className="card main-page">
                    <Link to={`slodycze`}>
                      <img src={slodycze} alt="slodycze" />
                      <div className="card-body">
                        <h5 className="card-title">Slodziutkie słodycze</h5>
                        <p className="card-text" />
                      </div>
                    </Link>
                  </div>
                </figure>
              </div>

              <div className="col-sm-6 col-md-4">
                <figure className="figure_main">
                  <div className="card main-page">
                    <Link to={`napoje`}>
                      <img src={napoje} alt="napoje" />
                      <div className="card-body">
                        <h5 className="card-title">Napoje</h5>
                        <p className="card-text" />
                      </div>
                    </Link>
                  </div>
                </figure>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default MainPage;
