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
              <DomainOverview thisProject={thisProject} />
              <Dialog
                open={this.state.brandedDialogOpen}
                onClose={this.handleBrandedClickClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Enter Branded Keyword</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  Enter a keyword that represents your brand name
                  </DialogContentText>
                  <TextField
                    onChange={this.handleBrandedChange}
                    autoFocus
                    margin="normal"
                    id="branded"
                    name="branded"
                    label="branded"
                    type="text"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleBrandedClickClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.handleBrandedFormSubmit} color="primary">
                    Save
                  </Button>
                </DialogActions>
              </Dialog>
                <Button onClick={this.handleBrandedClickOpen}>
                Update Brand
                </Button>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab value='two' label="Save and Continue" />
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





