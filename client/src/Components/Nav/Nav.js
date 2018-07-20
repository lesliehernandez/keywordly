import React, { Component } from 'react';
import Login from '../Modals/Login';
import Signup from '../Modals/Signup';
import AuthService from '../Auth/AuthService'


class UserNavbar extends Component {

    Auth = new AuthService();

    _handleLogout = () => {
        //include the logout() method from our AuthService helper class here.
        this.Auth.logout();
        window.location = '/landing';
    }

    render() {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Keywordly</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><Login /></li>
                        <li><Signup /></li>
                        {this.Auth.loggedIn() ? <a onClick={this._handleLogout}>Logout</a> : null}
                    </ul>
                </div>
            </nav>




        )
    }
}



export default UserNavbar;