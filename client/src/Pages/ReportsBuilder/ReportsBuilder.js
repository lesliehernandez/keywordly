import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import DomainOverview from '../../Components/DomainOverview'
import ContentOverview from '../../Components/ContentOverview'
import KeywordOverview from '../../Components/KeywordOverview'


function TabContainer({ children, dir }) {
    return (
      <div component="div" style={{ padding: 8 * 3, height: '100vh' }}>
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
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };
    
      handleChangeIndex = index => {
        this.setState({ value: index });
      };
    
      render() {
        const { classes } = this.props;
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
                <Tab value="one" label="Domain Overview" />
                <Tab value="two" label="Keyword Overview" />
                <Tab value="three" label="Content Overview" />
              </Tabs>
            </AppBar>
            {value === 'one' && <TabContainer><DomainOverview /></TabContainer>}
            {value === 'two' && <TabContainer><KeywordOverview /></TabContainer>}
            {value === 'three' && <TabContainer><ContentOverview /></TabContainer>}
          </div>
        );
      }
}

ReportsBuilder.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true})(ReportsBuilder);





