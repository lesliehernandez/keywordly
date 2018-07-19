import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Form from './Form'

class NewProject extends Component {
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
        <button onClick={this.handleOpenModal}>New Project</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          <button onClick={this.handleCloseModal}>Cancel</button>
          <Form />
        </ReactModal>
      </div>
    );
  }
}

const props = {};

export default NewProject