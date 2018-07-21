import React, { Component } from 'react';
import './Client.css'
import Tables from '../../Components/Tables/Table'
import Charts from '../../Components/Charts/Chart'
import Cards from '../../Components/Cards/Card'

class Client extends Component {
  render() {
    return (
        <div className="client">
            <h1 className="App-title">Heres your client overview</h1>
            <div className="Cards"><Cards/></div>
            <div className="Tables" style={{width: '310px', height: '100px', display: 'inline-block'}}><Tables/></div>
            <div className="Charts" style={{height: '292px'}}><Charts/></div>
        </div>
    );
  }
}

export default Client;