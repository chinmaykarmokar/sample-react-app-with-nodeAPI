import React, { Component } from "react";
import Login from "./routes/login";
import About from "./routes/about";
import Post from "./routes/post";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import axios from 'axios';

class App extends Component {
  state = {
    products: {},
    demo: [
      {
        name: 'Chinmay'
      }
    ]
  }

  componentDidMount() {
    axios.get(`https://test-nodejs-api-with-free-db.herokuapp.com/`)
      .then(res => {
        const products = res.data;
        console.log(products);
        this.setState({
          products: products
        });
        console.log(this.state.products.response[0].name);
      })
  }

  logout = () => {
    localStorage.clear();
  }

  render() {
    return (
      <Router>
        <div>
          <Link to="/">Login</Link>
          <Link to="/addProducts">Add Products</Link>
          <Link to="/about">About</Link>
          <Link to="/" onClick={this.logout}>Logout</Link>

          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/addProducts" component={Post}/>
            <Route path="/about" component={About}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;