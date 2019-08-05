import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProduct from './components/Product/AddProduct';
import MainPage from './components/MainPage';
import Header from './components/Layout/Header';
import { Provider } from "react-redux";
import store from './store';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <Header />
        <Route exact path="/mainPage" component={MainPage} />
        <Route exact path="/addProduct" component={AddProduct} />
      </div>
      </Router>
      </Provider>
      
    );
  }
  
}

export default App;
