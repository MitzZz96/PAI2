import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./components/Product/AddProduct";
import MainPage from "./components/MainPage";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Category from "./components/Category/Category";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/UserManagment/Register";
import Login from "./components/UserManagment/Login";
import Acc from "./components/UserManagment/Acc";
import fire from "./Config/Fire";
import Basket from "./components/Basket/Basket";
import Address from "./components/UserManagment/Address";
import Clients from "./components/UserManagment/Clients";
import Orders from "./components/UserManagment/Orders";
import UserMap from "./components/UserManagment/UserMap";
import OrdersClient from "./components/UserManagment/OrdersClient";
import OrderDetails from "./components/UserManagment/OrderDetails";
import Addresses from "./components/UserManagment/Addresses";

class App extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem("user");
      }
    });
  }

  render() {
    let links = [
      { name: "Mięsa", link: "miesa", type: "miesa" },
      { name: "Nabiał", link: "nabial", type: "nabial" },
      { name: "Pieczywo", link: "pieczywo", type: "pieczywo" },
      { name: "Owoce", link: "owoce", type: "owoce" },
      { name: "Słodycze", link: "slodycze", type: "slodycze" },
      { name: "Napoje", link: "napoje", type: "napoje" }
    ];
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header links={links} />
            <Route exact path="/" component={MainPage} />

            <Route
              exact
              path="/acc"
              render={props => <Acc user={this.state} {...props} />}
            />
            <Route
              exact
              path="/register"
              render={props => <Register user={this.state} {...props} />}
            />
            <Route exact path="/login" component={Login} />
            <Switch>
              <Route exact path="/addProduct" component={AddProduct} />
              <Route
                exact
                path="/basket"
                render={props => <Basket user={this.state} {...props} />}
              />
              <Route exact path="/address" component={Address} />
              <Route exact path="/addresses" component={Addresses} />
              <Route exact path="/checkout" />
              <Route exact path="/clients" component={Clients} />
              <Route
                exact
                path="/orders"
                render={props => <Orders user={this.state} {...props} />}
              />
              <Route
                exact
                path="/ordersClient"
                render={props => <OrdersClient user={this.state} {...props} />}
              />
              <Route
                exact
                path="/orderDetails/:id"
                render={props => <OrderDetails user={this.state} {...props} />}
              />
              <Route exact path="/map/:id" component={UserMap} />
              <Route
                exact
                path="/category"
                render={props => <Category links={links} {...props} />}
              />
              <Route
                exact
                path="/category/:category_name"
                render={props => (
                  <Category links={links} user={this.state} {...props} />
                )}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
