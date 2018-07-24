import React, { Component } from 'react'
import AuthService from '../../Auth/AuthService';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core';

  
class Signup extends Component {
    
  Auth = new AuthService()

  state = {
    dialogopen: false,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
    
  handleClickOpen = () => {
    this.setState({ dialogopen: true });
  };

  handleClickClose = () => {
    this.setState({ dialogopen: false });
  };

  _handleChange = (e) => {
    this.setState(
        {
            [e.target.name]: e.target.value
        }
    )
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    /* For the sake of simplicity, we will put our axios call to the /signup route here. This will send the server our username and password. Then we should get back some data telling us the result. */
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
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
    .then(res => res.json())
    .then(user => {
      console.log(user);
      this.handleClickClose()
    })
  }
  
  render () {
    return (
      <div>
        {this.Auth.loggedIn() ? null : <Button class="authenticationbuttons" onClick={this.handleClickOpen} >Signup</Button>}
      
        <Dialog
          open={this.state.dialogopen}
          onClose={this.handleClickClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={{ width: '400px', height: '20px'}}>Sign Up</DialogTitle>
          <DialogContent>
          <div className="signup_form" style={{ width: '400px', height: '220px', padding: '20px'}}>
            <form >
              <div class="row">
              <div class="form-group">
              <label style={{ fontSize: '12px'}}>First Name</label><br></br>
              <input ref="name" name="firstName" placeholder="Jane" type="text" onChange={this._handleChange} style={{ width: '165px', height: '25px', marginRight: '20px', fontSize: '12px'}}/>
              </div>
              <div class="form-group">
              <label style={{ fontSize: '12px'}}>Last Name</label><br></br>
              <input ref="lastname" name="lastName" placeholder="Doe" type="text" onChange={this._handleChange} style={{ width: '165px', height: '25px', fontSize: '12px'}}/>
              </div>
              </div>
              <div class="row">
              <div class="form-group">
              <label style={{ fontSize: '12px'}}>Email</label><br></br>
              <input ref="email" name="email" placeholder="johnsmith@example.com" type="email" onChange={this._handleChange} style={{ width: '350px', height: '25px', fontSize: '12px'}}/>
              </div>
              </div>
              <div class="row">
              <div class="form-group">
              <label style={{ fontSize: '12px'}}>Password</label><br></br>
              <input ref="password" name="password" placeholder="Password" type="password" onChange={this._handleChange} style={{ width: '350px', height: '25px', fontSize: '12px'}}/>
              </div>
              </div>
              <div class="row">
              <div class="form-group">
              <label style={{ fontSize: '12px'}}>Confirm Password</label><br></br>
              <input ref="passwordMatch" name="passwordMatch" placeholder="Password Confirm" type="password" style={{ width: '350px', height: '25px', fontSize: '12px'}}/>
              </div>
              </div>
             </form>
        </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickClose} color="primary" style={{ fontSize: '12px'}}>
              Cancel
            </Button>
            <Button onClick={this.handleFormSubmit} color="primary" style={{ fontSize: '12px'}}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Signup