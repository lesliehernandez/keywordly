import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './Cards.css'
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    paddingTop: '23px',
    width: '450px',
    height: '250px',
    display: 'inline-block',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function trafficCard(props) {
  const { classes } = props; 

  return (
    <div>
      <Card className={classes.card} display="inline-block" align="center">
        <CardContent>
          <Grid container spacing={24}> 
            <Grid item xs={6}>
            <h4>Index</h4>
            <h1>{props.thisProject ? (props.thisProject.clientData[props.thisProject.clientInfo.domain].traffic.keywords) : '287' }</h1>
          </Grid>
          <Grid item xs={6}>
          <h4>Traffic</h4>
          <h1>{props.thisProject ? (props.thisProject.clientData[props.thisProject.clientInfo.domain].traffic.total) : '287' }</h1>
          </Grid>
          </Grid>
          </CardContent>
          <CardContent>
          <Grid container spacing={24}> 
          <Grid item xs={6}>
          <h4>Keywords</h4>
          <h1>{props.thisProject ? (props.thisProject.clientData[props.thisProject.clientInfo.domain].traffic.keywords) : '287' }</h1>
          </Grid>
          <Grid item xs={6}>
          <h4>Traffic Cost</h4>
          <h1>${props.thisProject ? (props.thisProject.clientData[props.thisProject.clientInfo.domain].traffic.costs) : '287' }</h1>
          </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>

  );
}

trafficCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(trafficCard);