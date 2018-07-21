import React, { Component } from 'react';
import './Projects.css'
import Tables from '../../Components/Tables/Table'

class Projects extends Component {
  render() {
    return (
        <div className="Projects">
            <h1 className="App-title">Here are your projects</h1>

        <div className="Tables" style={{width: '90vw', height: '100vh', display: 'inline-block'}}><Tables/></div>

        </div>
    );
  }
}

export default Projects;