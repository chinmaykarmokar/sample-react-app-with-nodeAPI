import React, { Component } from "react";
import Home from './home';
import axios from 'axios';

class Login extends Component {
    state = {
        name: '',
        price: '',
        login: false
    }

    handleChange = (event) => {
        this.setState({
          name: document.getElementById('name').value,
          price: document.getElementById('price').value
        })
    }

    login = (event) => {
        event.preventDefault();

        const productDetails = {
            name: this.state.name,
            price: this.state.price
        }

        axios.post("http://localhost:3000/login", productDetails)
        .then (res => {
            console.log(res.data);

            localStorage.setItem('login', JSON.stringify({
                login: true,
                name: res.data.name,
                token: res.data.token
            }))

            this.setState({
                login: true
            })
        })
    }

    render () {
        return (
            <div>
                {
                    ! JSON.parse(localStorage.getItem('login')) ? 
                    <form>
                        <input type="text" name="name" id="name" onChange={this.handleChange} />
                        <input type="number" name="price" id="price" onChange={this.handleChange} />
                        <button onClick={this.login} type="submit">Add</button>
                    </form>
                    :
                    <Home />
                }
            </div>
        )
    }
}

export default Login;