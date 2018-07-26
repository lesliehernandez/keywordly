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


function SimpleTable(props) {

  let totals = props.thisProject.reports[0].brandedSummary.branded
  let top3 = props.thisProject.reports[0].brandedSummary.top3
  let top410 = props.thisProject.reports[0].brandedSummary.top410
  let top1120 = props.thisProject.reports[0].brandedSummary.top1120
  let top2150 = props.thisProject.reports[0].brandedSummary.top2150
  let top51100 = props.thisProject.reports[0].brandedSummary.top51100
  

  const data = [
    createData('Totals', totals[0], totals[1], (isNaN(totals[2])? 0 :totals[2]), totals[3]),
    createData('Top 3 Totals', top3[0], top3[1], (isNaN(top3[2])? 0 :top3[2]), top3[3]),
    createData('4-10 Totals', top410[0], top410[2], (isNaN(top410[2])? 0 :top410[2]), top410[3]),
    createData('11-20 Totals', top1120[0], top1120[1], (isNaN(top1120[2])? 0 :top1120[2]), top1120[3]),
    createData('21-50 Totals', top2150[0], top2150[1], (isNaN(top2150[2])? 0 :top2150[2]), top2150[3]),
    createData('51-100 Totals', top51100[0], top51100[1], (isNaN(top51100[2])? 0 :top51100[2]), top51100[3]),
  ];

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