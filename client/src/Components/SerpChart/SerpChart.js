import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { TableHeader } from 'material-ui';

const styles = theme => ({
  root: {
    width: '695px',
    height: '300px',
  },
});

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <CardHeader style= {{backgroundColor: 'white', border: 'none', fontSize: '14px', fontFamily: 'Montserrat', fontWeight: '500'}}>
              SERP Features
            </CardHeader>
      <Table className={classes.table}>
        <TableBody>
              <TableRow style={{height:'65px'}}>
                <TableCell component="th" scope="row" style={{fontSize: '12px'}}>Sitelinks</TableCell>
                <TableCell numeric style={{fontSize: '12px'}}>{props.thisProject ? (props.thisProject.clientData[props.thisProject.clientInfo.domain].serp.siteLinks) : '287' }</TableCell>
              </TableRow>
              <TableRow style={{height:'65px'}}>
                <TableCell component="th" scope="row" style={{fontSize: '12px'}}>Knowledge Panel</TableCell>
                <TableCell numeric style={{fontSize: '12px'}}>{props.thisProject ? (props.thisProject.clientData[props.thisProject.clientInfo.domain].serp.knowledgePanel) : '287' }</TableCell>
              </TableRow>
              <TableRow style={{height:'65px'}}>
                <TableCell component="th" scope="row" style={{fontSize: '12px'}}>Local Pack</TableCell>
                <TableCell numeric style={{fontSize: '12px'}}>{props.thisProject ? (props.thisProject.clientData[props.thisProject.clientInfo.domain].serp.localPack) : '287' }</TableCell>
              </TableRow>
              <TableRow style={{height:'65px'}}>
                <TableCell component="th" scope="row" style={{fontSize: '12px'}}>Images</TableCell>
                <TableCell numeric style={{fontSize: '12px'}}>{props.thisProject ? (props.thisProject.clientData[props.thisProject.clientInfo.domain].serp.images) : '287' }</TableCell>
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