import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
            <nav className="col-md-12 navbar">
                <div className="col-md-8 logolinks">
                    <a className="navbar-brand" href="/landing" style={{padding: '20px'}}><img alt="" src="https://image.ibb.co/nOfmyd/keywordlylogo.png" width="150px" height="18px"></img></a>
                    <div className="toplinks">
                        <a href="#about" >ABOUT</a>
                        <a href="#pricing" >PRICING</a>
                        <a href="#contact">CONTACT</a>
                    </div>
                </div>
                        
                <div className="col-md-4">
                    <div className="btn-group float-right mt-2" role="group">
                        <Login/>
                        <Signup />
                        {this.Auth.loggedIn() ? <Link to="/dashboard">Dashboard</Link> : null}
                        {this.Auth.loggedIn() ? <a onClick={this._handleLogout}>Logout</a> : null}
                    </div>
                </div>       
            </nav>




        )
    }
}



export default Navbar;