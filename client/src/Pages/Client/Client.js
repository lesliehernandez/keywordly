import React, { Component } from 'react';
import './Client.css'
import Tables from '../../Components/Tables/Table'

class Client extends Component {
  render() {
    return (
        <div className="client">
            <h1 className="App-title">Heres your client overview</h1>
            <p className="App-intro"><Tables /></p>
        </div>
    );
  }
}

export default Client;