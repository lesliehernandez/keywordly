import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Form from './Form'
import AuthService from '../../Auth/AuthService';

class Login extends Component {
  Auth = new AuthService()
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        {this.Auth.loggedIn() ? null : <button onClick={this.handleOpenModal}>Login</button>}
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          <button onClick={this.handleCloseModal}>Cancel</button>
          <div className="login">
            <h1 className="App-title">Welcome to Keywordly</h1>
            <p className="App-intro">Please Login to use the app</p>
            <Form />
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Login