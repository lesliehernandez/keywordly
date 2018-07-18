import React, { Component } from 'react';

class Login extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

//   callApi = async () => {
//     const response = await fetch('/auth/login');
//     const body = await response.json();

//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   };

  render() {
    return (
        <div className="login">
            <h1 className="App-title">Welcome to Keywordly</h1>
            <p className="App-intro">Please Login to use the app</p>
            <form>
              <label>Email</label>
              <input type="email" />
              <label>Password</label>
              <input type="password" />
              <button type="submit">Login</button>
            </form>
        </div>
    );
  }
}

export default Login;