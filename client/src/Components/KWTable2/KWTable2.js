import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '84vw',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    height: '500px'
  },
  table: {
    minWidth: 700,
    height: 500
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Total Count', 159, 6.0, 24, 4.0),
  createData('Total 3 Totals', 237, 9.0, 37, 4.3),
  createData('4-10 Totals', 262, 16.0, 24, 6.0),
  createData('11-20 Totals', 305, 3.7, 67, 4.3),
  createData('21-50 Totals', 356, 16.0, 49, 3.9),
  createData('51-100 Totals', 356, 16.0, 49, 3.9)
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <br></br><br></br><h1 style= {{fontSize: '20px', fontFamily: 'Montserrat', fontWeight: '500', paddingLeft: '20px', color: '#534FC3'}}>Keyword Brackets</h1><br></br><br></br>
      <Table className={classes.table}>

        <TableHead>
          <TableRow>
            <TableCell style= {{fontSize: '12px', fontWeight: '800'}}>Keyword Count</TableCell>
            <TableCell numeric style= {{fontSize: '12px', fontWeight: '800'}}>Branded</TableCell>
            <TableCell numeric style= {{fontSize: '12px', fontWeight: '800'}}>Branded Search Volume</TableCell>
            <TableCell numeric style= {{fontSize: '12px', fontWeight: '800'}}>Branded Traffic %</TableCell>
            <TableCell numeric style= {{fontSize: '12px', fontWeight: '800'}}>Branded Unique URL Density</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.calories}</TableCell>
                <TableCell numeric>{n.fat}</TableCell>
                <TableCell numeric>{n.carbs}</TableCell>
                <TableCell numeric>{n.protein}</TableCell>
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