import React, { Component } from "react";

class ProductDetails extends Component {
  componentDidMount() {
    // axios.get(`/api/product/${idCategory}`).then(res => {
    //   console.log(res);
    //   this.setState({ api: res.data });
    // });
    const { category_name, product_name } = this.props.match.params;
  }
  render() {
    return (
      <React.Fragment>
        <div class="container py-5">
          <div class="row">
            <div class="col-10 mx-auto text-center text-slanted text-blue my-5">
              <h1>Title</h1>
            </div>
          </div>

          <div class="row">
            <div class="col-10 mx-auto col-md-4 my-3">
              <img
                src="./src/images/test-max.jpg"
                class="img-fluid"
                alt="product"
              />
            </div>

            <div class="col-10 mx-auto col-md-4 my-3">
              <h2>Ceresit Grunt głęboko penetrujący CT17 2 l</h2>
              <h4 class="text-title text-uppercase text-muted mt-3 mb-2">
                <span class="text-uppercase">cersanit</span>
              </h4>
              <p class="font-weight-bold mt-3 mb-0">Informacje o produkcie</p>
              <p class="text-muted lead">
                <ul>
                  <li>Grunt głęboko penetrujący</li>
                  <li>
                    Wzmacnia powierzchniowo podłoże i zmniejsza jego
                    nasiąkliwość
                  </li>
                  <li>Paroprzepuszczalny</li>
                </ul>
              </p>
            </div>
            <div class="col-10 mx-auto col-md-3 my-3">
              <div class="card bg-light" style="width: 18rem;">
                <div>
                  <label class="amount_label">
                    Ilość:{" "}
                    <input
                      type="text"
                      min="1"
                      max="9999"
                      step="1"
                      value="1"
                      style="width: 50px"
                    />
                  </label>
                </div>
                <div class="price">
                  <h4 class="text-blue">
                    <strong>
                      Cena: <span>10zł</span>
                    </strong>
                  </h4>
                </div>
                <div class="vat text-muted">
                  <p>Cena zawiera VAT 23%, nie zawiera kosztów przesyłki.</p>
                </div>
                <a href="#" class="btn btn-outline-secondary">
                  Dodaj do koszyka
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
