import React, { Component } from 'react';
import Login from '../Modals/Login';
import Signup from '../Modals/Signup';
import AuthService from '../Auth/AuthService'
import './Navbar.css'


class Navbar extends Component {

    Auth = new AuthService();

    _handleLogout = () => {
        //include the logout() method from our AuthService helper class here.
        this.Auth.logout();
        window.location = '/landing';
    }

    render() {
        return (
            <nav class="navbar">
                        <a class="navbar-brand" href="#"><img src="http://via.placeholder.com/100x50" alt=""></img></a>
                        <a href="#about" class="toplinks">ABOUT</a>
                        <a href="#pricing" class="toplinks">PRICING</a>
                        <a href="#contact" class="toplinks">CONTACT</a>
                        <Login/>
                        <Signup />
                        {this.Auth.loggedIn() ? <a onClick={this._handleLogout}>Logout</a> : null}
            </nav>




        )
    }
}



export default Navbar;