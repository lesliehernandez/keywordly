import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import { Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'




const styles = theme => ({
  
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class ContentOverview extends React.Component {
  downloadReortHandler = (e) => {
    e.preventDefault()
    console.log(this.props);  
  }
  
  render() {
    const { classes } = this.props
    console.log(this.props);
    
    return (
      <Grid container className='viewreport' item xs={12} style= {{width: '84vw', height: '100vh', justifyContent: 'center'}} >
      <Button variant="contained" onClick={this.downloadReortHandler} className={classes.button} style={{backgroundColor: '#46E4C4', float: 'right', width: '160px', height: '40px', marginRight: '10px'}}>
        Download Report
      </Button>
      </Grid>
    );
  }
}

ContentOverview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentOverview);
