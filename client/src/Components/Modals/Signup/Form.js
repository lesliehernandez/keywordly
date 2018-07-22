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
              <div class="row">
              <div class="form-group">
              <label>First Name</label><br></br>
              <input ref="name" name="name" placeholder="Jane" type="text" onChange={this._handleChange} />
              </div>
              <div class="form-group">
              <label>Last Name</label><br></br>
              <input ref="lastname" name="lastname" placeholder="Doe" type="text" onChange={this._handleChange} />
              </div>
              </div>
              <div class="row">
              <div class="form-group">
              <label>Email</label><br></br>
              <input ref="email" name="email" placeholder="johnsmith@example.com" type="email" onChange={this._handleChange} />
              </div>
              </div>
              <div class="row">
              <div class="form-group">
              <label>Password</label><br></br>
              <input ref="password" name="password" placeholder="Password" type="password" onChange={this._handleChange} />
              </div>
              </div>
              <div class="row">
              <div class="form-group">
              <label>Confirm Password</label><br></br>
              <input ref="passwordMatch" name="passwordMatch" placeholder="Password Confirm" type="password" />
              </div>
              </div>
             </form>
        </div>
    );
  }
}

export default Form