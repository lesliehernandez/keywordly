import React, { Component } from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core';


class NewProject extends Component {

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
      user: this.props.user,
      info: {
        name:this.state.name,
        domain:this.state.domain,
      }
    }    

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
    this.handleClickClose()
  }
  
  render () {
    
    return (
      <div>
        <Button variant="contained" onClick={this.handleClickOpen} style={{margin: '7px', backgroundColor: '#46E4C4'}}>
        Create new Project
        </Button>

        <Dialog
          open={this.state.dialogopen}
          onClose={this.handleClickClose}
          aria-labelledby="form-dialog-title"
        >
           <DialogTitle id="form-dialog-title" style={{ width: '400px', height: '50px'}} >Create New Project</DialogTitle><br></br><br></br>
          <DialogContent>

          <form>
            <div className="row">
            <div className="form-group">
              <label style={{ fontSize: '12px'}}>Project Name</label><br></br>
              <input ref="name" name="name" type="name" onChange={this.handleChange} style={{ width: '350px', height: '25px', fontSize: '12px'}}/>
              </div>
              </div>
              <div className="row" style={{ marginLeft: '0'}}>
              <div className="form-group">
              <label style={{ fontSize: '12px'}}>Project Domain</label><br></br>
              <input ref="domain" name="domain" type="domain" onChange={this.handleChange} style={{ width: '350px', height: '25px', fontSize: '12px'}}/>
              </div>
              </div>
            </form>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickClose} color="primary" style={{ fontSize: '12px'}}>
              Cancel
            </Button>
            <Button onClick={this.handleFormSubmit} color="primary" style={{ fontSize: '12px'}}>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default NewProject