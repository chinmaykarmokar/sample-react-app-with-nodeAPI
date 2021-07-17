import React, { Component } from "react";
import Post from './routes/post';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get(`https://test-nodejs-api-with-free-db.herokuapp.com/`)
      .then(res => {
        const products = res.data.response;
        console.log(products);
        this.setState({
          products: products
        });
      })
  }

  render() {
    return (
      <h2>{this.state.products.map(person => <li>{person.name}</li>)}</h2>
    )
  }
}

export default App;