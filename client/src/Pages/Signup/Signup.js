import React, { Component } from 'react';

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordMatch: ''
    }
    this.signupUser = this.signupUser.bind(this);
  }

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));

  }

  signupUser = (e) => {
    e.preventDefault()
    const newUser = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      passwordMatch: this.refs.passwordMatch.value
    }
    this.setState({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      passwordMatch: newUser.passwordMatch
    })

    console.log(this.state.name);

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(newUser)
    }

    fetch('/auth/signup', options);
    // on response 
      // if errors send errors
      // set errors in state
      // render errors on page

    

    this.refs.name.value = null
    this.refs.email.value = null
    this.refs.password.value = null
    this.refs.passwordMatch.value = null
  }

  render() {
    return (
        <div className="signup">
            <h1 className="App-title">Welcome to Keywordly</h1>
            <p className="App-intro">Please Signup to use the app</p>
            <form onSubmit={this.signupUser} >
              <label>Name</label>
              <input ref="name" placeholder="John Smith" type="text" />
              <label>Email</label>
              <input ref="email" placeholder="johnsmith@example.com" type="email" />
              <label>Password</label>
              <input ref="password" placeholder="Password" type="password" />
              <label>Confirm Password</label>
              <input ref="passwordMatch" placeholder="Password Confirm" type="password" />
              <button type="submit">Signup</button>
            </form>
        </div>
    );
  }
}

export default Signup;