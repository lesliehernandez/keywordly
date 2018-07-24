import React, { Component } from 'react';
import './Client.css'
import Tables from '../../Components/Tables/'
import BrandedChart from '../../Components/BrandedChart'
import OrChart from '../../Components/OrChart'
import TrafficCard from '../../Components/TrafficCard'
import { Grid } from '@material-ui/core'
import SerpChart from '../../Components/SerpChart'


class Client extends Component {
  render() {
    return (
        <Grid container className='client' item xs={12} >
          <Grid item xs={12} style={{marginTop: '50px', marginBottom: '20px'}}>  
            <h1 className="App-title">{this.props.thisProject ? (this.props.thisProject.clientInfo.domain) : 'My Dashboard' }</h1>
          </Grid>
          <Grid container style={{justifyContent: 'space-evenly'}}>
          <Grid item xs={4} style={{position: 'relative'}}>
              <TrafficCard thisProject={this.props.thisProject} />
              </Grid>
              <Grid item xs={4} style={{position: 'relative'}}>
              <BrandedChart/>
              </Grid>
              <Grid item xs={4} style={{position: 'relative'}}>
              <Tables thisProject={this.props.thisProject} />
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Grid container style={{justifyContent: 'space-evenly'}}>
              <Grid item xs={6} style={{position: 'relative'}}>
              <SerpChart thisProject={this.props.thisProject} />
              </Grid>
              <Grid item xs={6} style={{position: 'relative'}}>
                <OrChart/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default Client;