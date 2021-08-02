import React, { Component } from "react";
import Login from "./login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class LogOut extends Component {
    state = {
        login: true,
    }

    logout = () => {
        localStorage.clear()
    }

    render () {
        return (
            <Login />
        )
    }
}

export default About;