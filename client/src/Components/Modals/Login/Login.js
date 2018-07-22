import React, { Component } from 'react'
import AuthService from '../../Auth/AuthService';
import { Dialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});
  
class Login extends Component {
    
  Auth = new AuthService()

  state = {
    dialogopen: false,
    email: "",
    password: ""
  };
    
  handleClickOpen = () => {
    this.setState({ dialogopen: true });
  };

  handleClickClose = () => {
    this.setState({ dialogopen: false });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    
    /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
    this.Auth.login(this.state.email, this.state.password)
    .then((res) => {
        if(res === false){
            return alert("Sorry, that was sooo wrong.");
        }
        console.log('Logged in');
        this.handleClickClose();
        window.location ='/dashboard';
    }).catch(err => {
        alert(err);
    });
    
  }

  _handleChange = (e) => {
    this.setState(
        {
            [e.target.name]: e.target.value
        }
    )
  }
  
  render () {
    return (
      <div>
        {this.Auth.loggedIn() ? null : <Button class="authenticationbuttons"onClick={this.handleClickOpen}>Login</Button>}
      
        <Dialog
          open={this.state.dialogopen}
          onClose={this.handleClickClose}
          aria-labelledby="form-dialog-title">

          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
          <div className="login_form">
            <form >
            <div clas="row">
            <div class="form-group">
              <label>Email</label><br></br>
              <input ref="email" name="email" type="email" onChange={this._handleChange}/>
              </div>
              </div>
              <div class="row">
              <div class="form-group">
              <label>Password</label><br></br>
              <input ref="password" name="password" type="password" onChange={this._handleChange}/>
              </div>
              </div>
            </form>
        </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleFormSubmit} color="primary">
              Login
            </Button>
            <Button onClick={this.handleClickClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Login