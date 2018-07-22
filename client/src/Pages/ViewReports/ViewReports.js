import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import CreateReportButton from '../../Components/Buttons/CreateReportButton'


class ViewReports extends Component {


    render(){
        return(
            <div className="Reports">
                <h1 className="App-title">{this.props.thisProject.name}</h1>
                <CreateReportButton projectId={this.props.thisProject._id} projectDomain={this.props.thisProject.client.info.domain} />
                <p className="App-intro">...</p>
            </div>
        )
    }
}

export default ViewReports;