import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.loginUser = this.loginUser.bind(this);
  }
  
  loginUser = (e) => {
    e.preventDefault()
    const user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    this.setState({
      email: user.email,
      password: user.password 
    })

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(user)
    }

    fetch('/auth/login', options)
    .then(res => {
      console.log(res);
      // on response
        // if errors send errors
          // set errors in state
          // render errors on page
        // if !errors 
        if(res.status === 200){
          // clear state
          this.setState = {
            email: '',
            password: ''
          }
          //render the dashboard
          window.location = '/dashboard'
        }
    })
    

    this.refs.email.value = null
    this.refs.password.value = null
  }

  render() {
    return (
        <div className="login">
            <h1 className="App-title">Welcome to Keywordly</h1>
            <p className="App-intro">Please Login to use the app</p>
            <form onSubmit={this.loginUser}>
              <label>Email</label>
              <input ref="email" type="email" />
              <label>Password</label>
              <input ref="password" type="password" />
              <button type="submit">Login</button>
            </form>
        </div>
    );
  }
}

export default Login;