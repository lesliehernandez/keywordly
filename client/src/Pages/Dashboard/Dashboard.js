import React, { Component } from 'react';
import NewProject from '../../Components/Modals/NewProject'
import './Dashboard.css'
import Sidebar from '../../Components/Sidebar'


class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Sidebar />
        <NewProject />
      </div>  
    );
  }
}

export default Dashboard;