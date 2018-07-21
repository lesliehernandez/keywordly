import React, { Component } from 'react'
import AuthService from '../../Auth/AuthService';
import Form from './Form'
import { Dialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle, Button } from '@material-ui/core';

const styles = theme => ({
  
})
  
class Signup extends Component {
    
  Auth = new AuthService()

  state = {
    dialogopen: false
  };
    
  handleClickOpen = () => {
    this.setState({ dialogopen: true });
  };

  handleClickClose = () => {
    this.setState({ dialogopen: false });
  };
  
  render () {
    return (
      <div>
        {this.Auth.loggedIn() ? null : <Button variant='contained' style={{margin: '7px'}} onClick={this.handleClickOpen} >Signup</Button>}
      
        <Dialog
          open={this.state.dialogopen}
          onClose={this.handleClickClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Sign by entering your info below
            </DialogContentText>
            <Form />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClickClose} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Signup