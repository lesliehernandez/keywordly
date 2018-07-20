import React, { Component } from 'react';
import NewProject from '../../Components/Modals/NewProject'
import './Dashboard.css'
import AuthService from '../../Components/Auth/AuthService'
import Sidebar from './components/Sidebar'
import UserBar from './components/UserBar'



class Dashboard extends Component {
  Auth = new AuthService()
  
  render() {
    return (
      <div className="Dashboard">
        <UserBar />
        <Sidebar />
        <NewProject />
      </div>  
    );
  }
}

export default Dashboard;



