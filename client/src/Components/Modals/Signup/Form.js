import React, { Component } from 'react'
import AuthService from '../../Auth/AuthService';

class Form extends Component {

  Auth = new AuthService();

  state = {
    name: '',
    email: '',
    password: ''
  }

  _handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }

  handleFormSubmit = (e) => {
      /* For the sake of simplicity, we will put our axios call to the /signup route here. This will send the server our username and password. Then we should get back some data telling us the result. */
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      const options = {
        method: 'POST',
        headers,
        body:JSON.stringify(newUser)
      }

      fetch('/auth/signup', options)
      .then((data) => {
        console.log(data);
        this.props.history.replace('/');
      })
  }
 
  render () {
    return (
        <div className="signup_form">
            <form onSubmit={this.handleFormSubmit} >
              <label>Name</label>
              <input ref="name" name="name" placeholder="John Smith" type="text" onChange={this._handleChange} />
              <label>Email</label>
              <input ref="email" name="email" placeholder="johnsmith@example.com" type="email" onChange={this._handleChange} />
              <label>Password</label>
              <input ref="password" name="password" placeholder="Password" type="password" onChange={this._handleChange} />
              <label>Confirm Password</label>
              <input ref="passwordMatch" name="passwordMatch" placeholder="Password Confirm" type="password" />
              <button type="submit">Signup</button>
            </form>
        </div>
    );
  }
}

export default Form