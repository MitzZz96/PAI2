import React, { Component } from "react";

export class Basket extends Component {
  render() {
    return (
      <div className="my-card">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Twój koszyk</h1>
              <hr />

              <div className="container">
                <div className="card card-body mb-2">
                  <div className="row table-secondary">
                    <div className="col-7">
                      <h3 className="mx-auto">Produkt</h3>
                    </div>

                    <div className="col-3">
                      <h3 className="mx-auto">Cena detaliczna</h3>
                    </div>

                    <div className="col-2">
                      <h3 className="mx-auto">Ilość</h3>
                    </div>
                  </div>

                  <div className="row text-center">
                    <div className="col-2">
                      <div className="image-container p-2" />
                    </div>
                    <div className="col-md-4 col-8">
                      <p className="align-self-center text-center">
                        Ceresit Grunt głęboko penetrujący CT17 2 l
                      </p>
                    </div>
                  </div>

                  <div className="row table-secondary">
                    <div className="col-7">
                      <h5 className="mx-auto">Usuń produkt</h5>
                    </div>

                    <div className="col-3">
                      <h5 className="mx-auto">25,99zł</h5>
                    </div>

                    <div className="col-2 col-sm">
                      <input
                        type="text"
                        min="1"
                        max="9999"
                        step="1"
                        value="1"
                      />
                    </div>

                    <div className="col-1">
                      <h5 className="mx-auto">Suma</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Basket;
