import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Tab, Tabs, AppBar, Button } from '@material-ui/core';
import DomainOverview from '../../Components/DomainOverview'
import ContentOverview from '../../Components/ContentOverview'
import KeywordOverview from '../../Components/KeywordOverview'


function TabContainer(props) {
  return (
    <div component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </div>
  );
}
  
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};
  
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: '100%'
  },
});

class ReportsBuilder extends Component {

    state= {
      value: 'one',
      brandedDialogOpen: false,
      branded: '',
    }
    //this.getProject


  getProject = () => {
    fetch(`/project/user/`)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            projects: result
          })
        }
      );
  };
    
  handleChange = (event, value) => {
    this.setState({ value });
  };
    
  handleBrandedClickOpen = () => {
    this.setState({ brandedDialogOpen: true });
  };

  handleBrandedClickClose = () => {
    this.setState({ brandedDialogOpen: false });
  };

  handleBrandedChange = (e) => {
    this.setState(
      {
          [e.target.name]: e.target.value
      }
    )
  }

  handleBrandedFormSubmit = (e) => {
    e.preventDefault()
    console.log('You hit the Branded Submit Handler');
    console.log(this.state.branded);
    let query = {
      word: this.state.branded,
      include: true
    }
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(query)
    }
    fetch(`/project/branded/${this.props.location.state.thisProject._id}`, options)
    .then(res => res.json())
    .then(result => {
      this.setState({
        thisProject: result
      })
    })
    this.handleBrandedClickClose()
  }
      
    
  render() {
    console.log(this.state);
    console.log(this.props);
    
    const { classes } = this.props;
    const thisProject  = this.props.location.state.thisProject;
    const { value } = this.state;

    return (
      <div id="reportbuilder">
        <br></br><br></br><h1>Report Builder</h1><br></br><br></br>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab value='one' label="Domain Overview" />
            <Tab value='two' label="Keyword Overview" />
            <Tab value='three' label="Content Overview" />
          </Tabs>
        </AppBar>


        {value === 'one' ? <TabContainer thisProject={thisProject} dir={'ltr'}>
          <DomainOverview thisProject={thisProject} style={{height: this.props.height, width: this.props.width}}/>
          
          
          <Dialog
            open={this.state.brandedDialogOpen}
            onClose={this.handleBrandedClickClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title" style={{ width: '400px', height: '50px'}} >Enter Branded Keywords</DialogTitle>
            <DialogContent>
              <div className="login_form" style={{ width: '400px', height: '150px', paddingBottom: '10px'}}>
                <DialogContentText style={{fontSize:'12px'}}>
                  Enter your branded keywords separated by a comma.
                </DialogContentText>
                <br></br><br></br>
                <form>
                  <div clas="row">
                    <div class="form-group">
                      <label style={{ fontSize: '12px'}}>Branded Keywords</label><br></br>
                      <input ref="branded" name="branded" type="branded" onChange={this.handleBrandedChange} style={{ width: '350px', height: '25px', fontSize: '12px'}}/>
                    </div>
                  </div>
                </form>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleBrandedClickClose} color="primary" style={{ fontSize: '12px'}}>
                Cancel
              </Button>
              <Button onClick={this.handleBrandedFormSubmit}  color="primary" style={{ fontSize: '12px'}}>
                Submit
              </Button>
            </DialogActions>
          </Dialog>
          
          <Tabs
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            style= {{float: 'right', marginRight: '30px'}}>
            
            <Button onClick={this.handleBrandedClickOpen} style={{margin: '7px', backgroundColor: '#46E4C4', float: 'right'}}>
              Enter Branded Keywords
            </Button>
            <Tab 
              value='two'
              label="Save and Continue" 
              style={{margin: '7px', backgroundColor: '#46E4C4', borderRadius: '4px',  padding: '8px 16px', minWidth: '64px', minHeight: '36px', fontWeight: '500',  color: 'rgba(0, 0, 0, 0.87)', float: 'right'}}/>
          </Tabs>
        </TabContainer>: undefined}



        {value === 'two' ? <TabContainer dir={'ltr'}><KeywordOverview msg="helo" thisProject={thisProject} /></TabContainer>: undefined}
        {value === 'three' ? <TabContainer dir={'ltr'}><ContentOverview thisProject={thisProject} reportId="something" /></TabContainer>: undefined}
      </div>
      </div>

    );
  }
}

ReportsBuilder.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true})(ReportsBuilder);





