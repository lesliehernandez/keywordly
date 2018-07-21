import React, { Component } from 'react'
import { TextField, Dialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle, Button } from '@material-ui/core';

const styles = theme => ({
  
})

class NewProject extends Component {

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
              autoFocus
              margin="normal"
              id="name"
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="normal"
              id="domain"
              label="Url"
              type="text"
              fullWidth
            />
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

export default NewProject