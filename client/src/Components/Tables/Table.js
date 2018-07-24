import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CardHeader } from 'reactstrap';

const styles = theme => ({
  root: {
    width: '450px',
    height: '250px',
  },
});





function SimpleTable(props) { 
  const { classes } = props;
  
  return (
    <Paper className={classes.root}>
      <CardHeader style= {{backgroundColor: 'white', border: 'none', fontSize: '14px', fontFamily: 'Montserrat', fontWeight: '500'}}>
              Backlink Overview
            </CardHeader>
      <Table className={classes.table}>
        <TableBody>
            <TableRow style={{height:'43px'}}>
              <TableCell component="th" scope="row" style={{fontSize: '12px'}}>Total Backlinks</TableCell>
              <TableCell numeric style={{fontSize: '12px'}}>{props.thisProject ? (props.thisProject.clientData[props.thisProject.clientInfo.domain].backlinks.total) : '287' }</TableCell>
            </TableRow>
            <TableRow style={{height:'43px'}}>
              <TableCell component="th" scope="row" style={{fontSize: '12px'}}>Referring Domains</TableCell>
              <TableCell numeric style={{fontSize: '12px'}}>{props.thisProject ? (props.thisProject.clientData[props.thisProject.clientInfo.domain].backlinks.domains) : '287' }</TableCell>
            </TableRow>
            <TableRow style={{height:'43px'}}>
              <TableCell component="th" scope="row" style={{fontSize: '12px'}}>Referring IPs</TableCell>
              <TableCell numeric style={{fontSize: '12px'}}>{props.thisProject ? (props.thisProject.clientData[props.thisProject.clientInfo.domain].backlinks.ip) : '287' }</TableCell>
            </TableRow>
            <TableRow style={{height:'43px'}}>
              <TableCell component="th" scope="row" style={{fontSize: '12px'}}>Authority Score</TableCell>
              <TableCell numeric style={{fontSize: '12px'}}>{props.thisProject ? (props.thisProject.clientData[props.thisProject.clientInfo.domain].backlinks.authorityScore) : '287' }</TableCell>
            </TableRow>
            <TableRow style={{height:'43px'}}>
              <TableCell component="th" scope="row" style={{fontSize: '12px'}}>Overall Toxic Score</TableCell>
              <TableCell numeric style={{fontSize: '12px'}}>{props.thisProject ? (props.thisProject.clientData[props.thisProject.clientInfo.domain].backlinks.toxicScore) : 'Need 2 Get' }</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);