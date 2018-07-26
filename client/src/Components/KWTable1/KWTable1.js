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
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}


function SimpleTable(props) {
  let totals = props.thisProject.reports[0].keywordSummary.totals
  let avg = props.thisProject.reports[0].keywordSummary.avg
  let top3 = props.thisProject.reports[0].keywordSummary.top3
  let top410 = props.thisProject.reports[0].keywordSummary.top410
  let top1120 = props.thisProject.reports[0].keywordSummary.top1120
  let top2150 = props.thisProject.reports[0].keywordSummary.top2150
  let top51100 = props.thisProject.reports[0].keywordSummary.top51100
  let unbranded = props.thisProject.reports[0].keywordSummary.unbranded
  let branded = props.thisProject.reports[0].keywordSummary.branded
  
  const data = [
    createData('Totals', totals[0], totals[1],totals[2], totals[3]),
    createData('Avg.', avg[0], avg[1], avg[2], avg[3]),
    createData('Top 3 Totals', top3[0], top3[1],top3[2], top3[3]),
    createData('4-10 Totals', top410[0], top410[2], top410[2], top410[3]),
    createData('11-20 Totals', top1120[0], top1120[1], top1120[2], top1120[3]),
    createData('21-50 Totals', top2150[0], top2150[1], top2150[2], top2150[3]),
    createData('51-100 Totals', top51100[0], top51100[1], top51100[2], top51100[3]),
    createData('Unbranded', unbranded[0], unbranded[1], unbranded[2], unbranded[3]),
    createData('Branded', branded[0], branded[1], branded[2], branded[3])
  
  ];
  const { classes } = props;

  return (
    <Paper className={classes.root}>
        <br></br><br></br><h1 style= {{fontSize: '15px', fontFamily: 'Montserrat', fontWeight: '500', paddingLeft: '20px', color: '#534FC3'}}>Keyword Overview</h1><br></br><br></br>
      <Table className={classes.table} style={{height: '30px'}}>
        <TableHead style={{height: '20px'}}>
          <TableRow style={{height:'20px'}}>
            <TableCell style= {{fontSize: '12px', fontWeight: '800'}}>Rank Count</TableCell>
            <TableCell numeric style= {{fontSize: '12px', fontWeight: '800'}}>Search Volume Sum</TableCell>
            <TableCell numeric style= {{fontSize: '12px', fontWeight: '800'}}>Avg. Competition</TableCell>
            <TableCell numeric style= {{fontSize: '12px', fontWeight: '800'}}>Unique URL Density</TableCell>
            <TableCell numeric style= {{fontSize: '12px', fontWeight: '800'}}>Traffic %</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{height: '30px'}}>
          {data.map(n => {
            return (
              <TableRow key={n.id} style={{height: '40px'}}>
                <TableCell component="th" scope="row" style= {{fontSize: '12px'}}>
                  {n.name}
                </TableCell>
                <TableCell numeric style= {{fontSize: '12px'}}>{n.calories}</TableCell>
                <TableCell numeric style= {{fontSize: '12px'}}>{n.fat}</TableCell>
                <TableCell numeric style= {{fontSize: '12px'}}>{n.carbs}</TableCell>
                <TableCell numeric style= {{fontSize: '12px'}}>{n.protein}</TableCell>
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