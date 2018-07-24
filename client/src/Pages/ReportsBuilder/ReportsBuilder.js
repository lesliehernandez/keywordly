import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, TextField, Tab, Tabs, AppBar, Button } from '@material-ui/core';
import DomainOverview from '../../Components/DomainOverview'
import ContentOverview from '../../Components/ContentOverview'
import KeywordOverview from '../../Components/KeywordOverview'


function TabContainer({ children, dir }) {
    return (
      <div component="div" style={{ padding: 8 * 3, height: '100%' }}>
        {children}
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

      state = {
        value: 'one',
        brandedDialogOpen: false,
        branded: '',
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

        console.log(this.state);
        
        this.handleBrandedClickClose()
      }
      
      

      componentDidMount(){
        const overview = fetch(`/project/data/${this.props.thisProject.clientInfo.domain}/${this.props.thisProject._id}`)
          .then(res => res.json())
          .then(results => {
              console.log(results);          
          })
      }
        
        

      render() {
        const { classes, thisProject } = this.props;
        const { value } = this.state;
    
        return (
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Tabs
                value={this.state.value}
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



            {value === 'one' && <TabContainer dir={'ltr'}>
              <DomainOverview thisProject={thisProject} style={{height: this.props.height}}/>
              
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
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered>
                <Button onClick={this.handleBrandedClickOpen} style={{margin: '7px', backgroundColor: '#46E4C4'}}>
                Enter Branded Keywords
                </Button>
                <Tab value='two' label="Save and Continue" style={{margin: '7px', backgroundColor: '#46E4C4', borderRadius: '4px',  padding: '8px 16px', minWidth: '64px', minHeight: '36px', fontWeight: '500',  color: 'rgba(0, 0, 0, 0.87)'}}/>
                </Tabs>
            </TabContainer>}



            {value === 'two' && <TabContainer dir={'ltr'}><KeywordOverview /></TabContainer>}
            {value === 'three' && <TabContainer dir={'ltr'}><ContentOverview /></TabContainer>}
          </div>
        );
      }
}

ReportsBuilder.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true})(ReportsBuilder);





