import React, { Component } from 'react';
import Tables from '../Tables'
import TrafficCard from '../../Components/TrafficCard'
import SerpChart from '../SerpChart'
import { Grid } from '@material-ui/core'

class DomainOverview extends Component {
  render() {
    const { thisProject } = this.props
    
    
    return (
      
        <Grid container className='client'>
          <Grid item md={4} style={{marginBottom: '50px'}} >
            <TrafficCard thisProject={thisProject} />
          </Grid>
          <Grid item md={4} style={{marginBottom: '50px'}} >
            <SerpChart width='450px' thisProject={thisProject} />
          </Grid>
          <Grid item md={4} style={{marginBottom: '50px'}} >
            <Tables thisProject={thisProject}/>
          </Grid>
        </Grid>
    );
  }
}

export default DomainOverview;

