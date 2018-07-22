import React, { Component } from 'react';
import './Client.css'
import Tables from '../../Components/Tables/'
import BrandedChart from '../../Components/BrandedChart'
import OrChart from '../../Components/OrChart'
import TrafficCard from '../../Components/TrafficCard'
import SimpleCard from '../../Components/SimpleCard'
import { Grid } from '@material-ui/core'


class Client extends Component {
  render() {
    return (
        <Grid container className='client' >
          <Grid item md={12} style={{marginTop: '50px', marginBottom: '50px', justifyContent: 'space-evenly'}}>  
            <h1 className="App-title">Heres your client overview</h1>
          </Grid>
          <Grid item md={12} style={{marginBottom: '50px'}} >
            <Grid container style={{justifyContent: 'space-evenly'}}>
              <TrafficCard />
              <SimpleCard/>
              <div className="Tables" style={{width: '310px', height: '100px', display: 'inline-block'}}><Tables/></div>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Grid container style={{justifyContent: 'space-evenly'}}>
              <Grid item md={5} style={{position: 'relative'}}>
                <BrandedChart/>
              </Grid>
              <Grid item md={5} style={{position: 'relative'}}>
                <OrChart/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default Client;