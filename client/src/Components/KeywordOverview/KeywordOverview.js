import React, { Component } from 'react';
import Tables from '../Tables'
import TrafficCard from '../../Components/TrafficCard'
import SerpChart from '../SerpChart'
import { Grid } from '@material-ui/core'
import KWTable1 from '../KWTable1';
import KWTable2 from '../KWTable2';

class KeywordOverview extends Component {
  render() {
    const { thisProject } = this.props
    
    
    return (
      
      <Grid container className='reportbuilder' item xs={12} style= {{width: '84vw'}} >

     <Grid container style={{justifyContent: 'space-evenly', marginBottom: '20px'}}>
          <Grid item xs={12}  >
            <KWTable1 width='400px' height= '300px' thisProject={thisProject} />
          </Grid>
          </Grid>
          
          <Grid container style={{justifyContent: 'space-evenly', marginBottom: '20px'}}>
          <Grid item xs={12}  >
            <KWTable1 width='400px' height= '300px' thisProject={thisProject} />
          </Grid>
          </Grid>
          </Grid>


    );
  }
}

export default KeywordOverview;

