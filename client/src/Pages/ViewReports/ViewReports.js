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
import { Button } from '../../../node_modules/@material-ui/core';


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
      console.log(this.props);
      
        const { classes } = this.props;
        return(
            <div className="Reports" style={{paddingTop: '50px'}}>
              <h1 className="App-title" style={{position: 'fixed'}}>{this.props.location.state.thisProject.name}</h1>
              <CreateReportButton 
                projectId={this.props.location.state.thisProject._id} 
                projectDomain={this.props.location.state.thisProject.clientInfo.domain}
                projectName={this.props.location.state.thisProject.name}/>
              <br></br><br></br><br></br>
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
                      {this.props.location.state.thisProject.reports.map(report => (
                        <TableRow key={report.name} style={{height:'42px', textAlign: 'none'}}>
                          <TableCell component="th" scope="row" style={{fontSize: '12px', textAlign: 'left'}}>{report.name}</TableCell>
                          <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}>Keyword Research</TableCell>
                          <TableCell numeric style={{fontSize: '12px', textAlign: 'left'}}><Button variant='contained'>Download</Button></TableCell>
                        </TableRow>  
                      ))}
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
