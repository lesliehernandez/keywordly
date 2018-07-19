import React, { Component } from 'react';
import NewProject from '../../Components/Modals/NewProject'
import './Dashboard.css'


class Dashboard extends Component {
  render() {
    return (
        <div className="Dashboard">
            <div>
              <NewProject />
            </div>
            <h1 className="App-title">Welcome to Your Dashboard</h1>
            <p className="App-intro">Wondering how to get started??</p>
            <img src="https://media.giphy.com/media/AuQm5kCePSfiE/giphy.gif" alt="Giphy" />
        </div>
    );
  }
}

export default Dashboard;