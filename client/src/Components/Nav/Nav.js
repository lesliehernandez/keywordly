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
            <nav class="col-md-12 navbar">
            <div class="col-md-8 logolinks">
                        <a class="navbar-brand" href="#" style={{padding: '20px'}}><img src="https://image.ibb.co/nOfmyd/keywordlylogo.png" width="150px" height="18px"></img></a>
                        <div class="toplinks">
                        <a href="#about" >ABOUT</a>
                        <a href="#pricing" >PRICING</a>
                        <a href="#contact">CONTACT</a>
                        </div>
                        </div>
                        
                        <div class="col-md-4">
            <div class="btn-group float-right mt-2" role="group">
                <Login/>
                <Signup />
                        {this.Auth.loggedIn() ? <a onClick={this._handleLogout}>Logout</a> : null}
                        </div>
                        </div>
                       
            </nav>




        )
    }
}



export default Navbar;