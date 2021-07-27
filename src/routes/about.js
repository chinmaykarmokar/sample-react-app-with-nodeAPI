import React, { Component } from "react";

class About extends Component {
    state = {
        token: JSON.parse(localStorage.getItem('login')).name
    }

    render () {

        return (
            <div>
                <h1>My name is Chinmay</h1>
                <h1>{this.state.token}</h1>
            </div>
        )
    }
}

export default About;