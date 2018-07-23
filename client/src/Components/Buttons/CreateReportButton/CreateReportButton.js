import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom'
import { Button } from '@material-ui/core';



class CreateReportButton extends Component {


    reportBuilderHandler = () => {
        console.log('Building Report');
        console.log(this.props);
        fetch(`/project/data/${this.props.projectDomain}/${this.props.projectId}`)
        .then(res => res.json())
        .then(results => {
            console.log(results);          
        })
        
        
    }


    render(){
        return(
            <Button variant="contained" onClick={this.reportBuilderHandler} style={{margin: '7px'}}>
                <Link to={`/reports/reportsBuilder/${this.props.projectId}`}>
                Create Reports
                </Link>
            </Button>
        )
    }
}

export default CreateReportButton;