import React, { Component } from 'react';
import Login from '../Modals/Login';
import Signup from '../Modals/Signup';
import AuthService from '../Auth/AuthService'


class Nav extends Component {   
    
    Auth = new AuthService();

    _handleLogout = () => {
        //include the logout() method from our AuthService helper class here.
        this.Auth.logout();
        window.location = '/landing';
    }
    
    render() {
        return (
            <nav className="navbar">
                <a className="navbar-brand" href="/">Keywordly</a>
                <div className="right-side">
                    <Login />
                    <Signup />
                    {this.Auth.loggedIn() ? <a onClick={this._handleLogout}>Logout</a> : null}
                </div>
            </nav>
        )
    }
}



export default Nav;