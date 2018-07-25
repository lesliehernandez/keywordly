import React, { Component } from 'react';
import Tables from '../Tables'
import TrafficCard from '../../Components/TrafficCard'
import SerpChart from '../SerpChart'
import { Grid } from '@material-ui/core'

class DomainOverview extends Component {
  render() {
    const { thisProject } = this.props
    
    
    return (
      
      <Grid container className='reportbuilder' item xs={12} style= {{width: '84vw'}} >
     <Grid item xs={12}>  
     </Grid>
     <Grid container style={{justifyContent: 'space-evenly', marginBottom: '20px'}}>
          <Grid item xs={4}  >
            <TrafficCard width='400px' height= '300px' thisProject={thisProject} />
          </Grid>
          <Grid item xs={4} >
            <SerpChart width='400px' height= '300px' thisProject={thisProject} />
          </Grid>
          <Grid item xs={4} >
            <Tables width='400px' height= '300px' thisProject={thisProject}/>
          </Grid>
        </Grid>
        </Grid>


    );
  }
}

export default DomainOverview;

