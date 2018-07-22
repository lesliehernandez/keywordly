import React, { Component } from 'react'
import AuthService from '../../Auth/AuthService'

class Form extends Component {

   Auth = new AuthService();

   state = {
       email: "",
       password: ""
   }

   /* Fired off every time the use enters something into the input fields */
   _handleChange = (e) => {
       this.setState(
           {
               [e.target.name]: e.target.value
           }
       )
   }

   handleFormSubmit = (e) => {
       e.preventDefault();
       
       /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
       this.Auth.login(this.state.email, this.state.password)
       .then((res) => {
           if(res === false){
               return alert("Sorry, that was sooo wrong.");
           }
           console.log('Logged in');
           window.location ='/dashboard';
       }).catch(err => {
           alert(err);
       });
       
   }

  render () {
    return (
        <div className="login_form">
            <form onSubmit={this.handleFormSubmit}>
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
              <br></br>
              <button type="submit">Login</button>
            </form>
        </div>
    );
  }
}

export default Form