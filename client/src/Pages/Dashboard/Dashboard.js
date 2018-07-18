import React, { Component } from 'react';
import './Dashboard.css'

class Dashboard extends Component {
  render() {
    return (
        <div className="Dashboard">
            <h1 className="App-title">Welcome to Your Dashboard</h1>
            <p className="App-intro">Wondering how to get started??</p>
            <img src="https://media.giphy.com/media/AuQm5kCePSfiE/giphy.gif" alt="Giphy" />
        </div>
    );
  }
}

export default Dashboard;