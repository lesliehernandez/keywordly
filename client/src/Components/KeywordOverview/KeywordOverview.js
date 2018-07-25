import React, { Component } from 'react';
import KWTable1 from '../KWTable1';
import KWTable2 from '../KWTable2';

class KeywordOverview extends Component {
  render() {
    const { thisProject } = this.props
    
    
    return (
    <div>  
        <KWTable1 width='400px' height= '300px' thisProject={thisProject} />
        <KWTable2 width='400px' height= '300px' thisProject={thisProject} />
    </div>      


    );
  }
}

export default KeywordOverview;

