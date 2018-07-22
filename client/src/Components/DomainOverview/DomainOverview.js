import React, { Component } from 'react';
import Tables from '../Tables'
import { Grid } from '@material-ui/core'


class DomainOverview extends Component {
  render() {
    return (
        <Grid container className='client' >
          <Grid item md={12} style={{marginBottom: '50px'}} >
            <Grid container style={{justifyContent: 'space-evenly'}}>
            <div className="Tables" style={{width: '310px', height: '100px', display: 'inline-block'}}><Tables/></div>
            <div className="Tables" style={{width: '310px', height: '100px', display: 'inline-block'}}><Tables/></div>
            <div className="Tables" style={{width: '310px', height: '100px', display: 'inline-block'}}><Tables/></div>
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default DomainOverview;

