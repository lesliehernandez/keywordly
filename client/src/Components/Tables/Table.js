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
    width: '450px',
    height: '250px',
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Total Backlinks', 3200),
  createData('Referring Domains', 326),
  createData('Referring IPs', 262),
  createData('Authority Score', 305),
  createData('Overall Toxic Score', 'High'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <CardHeader style= {{backgroundColor: 'white', border: 'none', fontSize: '14px', fontFamily: 'Montserrat', fontWeight: '500'}}>
              Backlink Overview
            </CardHeader>
      <Table className={classes.table}>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id} style={{height:'42px'}}>
                <TableCell component="th" scope="row" style={{fontSize: '12px'}}>{n.name}</TableCell>
                <TableCell numeric style={{fontSize: '12px'}}>{n.calories}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);