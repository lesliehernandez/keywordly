import React, { Component } from 'react';
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
                Create Reports
            </Button>
        )
    }
}

export default CreateReportButton;