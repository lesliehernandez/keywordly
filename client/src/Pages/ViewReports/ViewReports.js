import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateReportButton from '../../Components/Buttons/CreateReportButton';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
});
  

class ViewReports extends Component {


    render(){
        const { classes } = this.props;
        return(
            <div className="Reports">
                <h1 className="App-title">{this.props.thisProject.name}</h1>
                <CreateReportButton projectId={this.props.thisProject._id} projectName={this.props.thisProject.name}/><br></br><br></br><br></br>
                <div>
                <Paper className={classes.root}>
                    <Table className={classes.table} style={{textAlign: 'none', width: '90vw', marginTop: '15px'}}>
                        <TableHead style={{fontSize: '12px', textAlign: 'none'}}>
                        <TableRow style={{textAlign: 'none'}}>
                            <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>Date</TableCell>
                            <TableCell style={{fontSize: '12px', textAlign: 'none'}}>Report Type</TableCell>
                            <TableCell style={{fontSize: '12px', textAlign: 'none'}}>Report Name</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
            <TableRow style={{height:'42px', textAlign: 'none'}}>
              <TableCell component="th" scope="row" style={{fontSize: '12px', textAlign: 'left'}}>01-01-18</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>Keyword Research</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>PRPL-01-01-18</TableCell>
            </TableRow>
            <TableRow style={{height:'42px', textAlign: 'none'}}>
              <TableCell component="th" scope="row" style={{fontSize: '12px', textAlign: 'left'}}>02-01-18</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>Keyword Research</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>PRPL-02-01-18</TableCell>
            </TableRow>
            <TableRow style={{height:'42px', textAlign: 'none'}}>
              <TableCell component="th" scope="row" style={{fontSize: '12px', textAlign: 'left'}}>03-01-18</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>Keyword Research</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>PRPL-03-01-18</TableCell>
            </TableRow>
            <TableRow style={{height:'42px'}}>
              <TableCell component="th" scope="row" style={{fontSize: '12px', textAlign: 'left'}}>04-01-18</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>Keyword Research</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>PRPL-04-01-18</TableCell>
            </TableRow>
            <TableRow style={{height:'42px'}}>
              <TableCell component="th" scope="row" style={{fontSize: '12px', textAlign: 'left'}}>05-01-18</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>Keyword Research</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>PRPL-05-01-18</TableCell>
            </TableRow>
            <TableRow style={{height:'42px'}}>
              <TableCell component="th" scope="row" style={{fontSize: '12px', textAlign: 'left'}}>06-01-18</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>Keyword Research</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>PRPL-06-01-18</TableCell>
            </TableRow>
            <TableRow style={{height:'42px'}}>
              <TableCell component="th" scope="row" style={{fontSize: '12px', textAlign: 'left'}}>07-01-18</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>Keyword Research</TableCell>
              <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>PRPL-07-01-18</TableCell>
            </TableRow>
            
        </TableBody>
                    </Table>
                </Paper>
                </div>
            </div>
        )
    }
}

ViewReports.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(ViewReports);
