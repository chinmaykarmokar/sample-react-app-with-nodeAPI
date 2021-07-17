import React, { Component } from "react";
import axios from 'axios';

class Post extends Component {
    state = {
        name: '',
        price: ''
    }

    handleChange = (event) => {
        this.setState({
          name: document.getElementById('name').value,
          price: document.getElementById('price').value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const productDetails = {
            name: this.state.name,
            price: this.state.price
        }

        axios.post(`https://test-nodejs-api-with-free-db.herokuapp.com/`, productDetails)
        .then (res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render () {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" name="name" id="name" onChange={this.handleChange} />
                    <input type="number" name="price" id="price" onChange={this.handleChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default Post;