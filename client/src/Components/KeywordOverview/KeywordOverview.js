import React, { Component } from 'react';
import KWTable1 from '../KWTable1';
import KWTable2 from '../KWTable2';
import { Button } from '@material-ui/core';

class KeywordOverview extends Component {
  render() {
    const { thisProject } = this.props
    
    
    return (
    <div>  
        <KWTable1 width='400px' height= '300px' thisProject={thisProject} /><br></br><br></br>
        <Button onClick={this.handleBrandedFormSubmit}  color="primary" style={{ backgroundColor: '#46E4C4', borderRadius: '4px',  padding: '8px 16px', fontWeight: '500',  color: 'rgba(0, 0, 0, 0.87)', float: 'right', width: '160px', height: '40px'}}>
              Add Bracket</Button><br></br><br></br>
        <KWTable2 width='400px' height= '300px' thisProject={thisProject} /><br></br><br></br>
        <Button onClick={this.handleBrandedClickOpen} style={{backgroundColor: '#46E4C4', float: 'right', width: '160px', height: '40px'}}>
              Generate Report
            </Button>
        <Button onClick={this.handleBrandedClickOpen} style={{backgroundColor: '#46E4C4', float: 'right', width: '160px', height: '40px'}}>
              Add Competitors
            </Button>
    </div>      


    );
  }
}

export default KeywordOverview;

