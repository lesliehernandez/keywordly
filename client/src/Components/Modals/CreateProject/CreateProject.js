import React, { Component } from 'react'
import { TextField, Dialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle, Button } from '@material-ui/core';
import AuthService from '../../Auth/AuthService'

const styles = theme => ({
  
})

class NewProject extends Component {

  Auth = new AuthService();

  state = {
    dialogopen: false,
    name: '',
    domain: ''
  };
    
  handleClickOpen = () => {
    this.setState({ dialogopen: true });
  };

  handleClickClose = () => {
    this.setState({ dialogopen: false });
  };

  handleChange = (e) => {
    this.setState(
      {
          [e.target.name]: e.target.value
      }
    )
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    let newProject = {
      user: null,
      info: {
        name:this.state.name,
        domain:this.state.domain,
      }
    }
    console.log('Creating project', newProject);
    let confirmUser = this.Auth.getConfirm();
    newProject.user = confirmUser
    console.log(newProject.user);
    

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    const options = {
      method: 'POST',
      headers,
      body:JSON.stringify(newProject)
    }

    fetch('/project/new', options)
    .then((data) => {
      console.log(data);
    })

    this.state.name = ''
    this.state.domain = ''

    this.handleClickClose()

    
  }
  
  render () {
    return (
      <div>
        <Button variant="contained" style={{margin: '7px'}} onClick={this.handleClickOpen}>
        Create new Project
        </Button>

        <Dialog
          open={this.state.dialogopen}
          onClose={this.handleClickClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create new Project</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="normal"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="normal"
              id="domain"
              name="domain"
              label="Url"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleFormSubmit} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default NewProject