import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Form from './Form'

class Signup extends Component {
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
        <button onClick={this.handleOpenModal}>Signup</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          <button onClick={this.handleCloseModal}>Cancel</button>
          <div className="signup">
            <h1 className="App-title">Welcome to Keywordly</h1>
            <p className="App-intro">Please Signup to use the app</p>
            <Form />
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Signup