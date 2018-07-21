import React, { Component } from 'react';
import { Button } from '@material-ui/core';


function ViewReports(props){
    return(
        <div className="Reports">
            <h1 className="App-title">{props.thisProject.name}</h1>
            <Button variant="contained" style={{margin: '7px'}}>
                Create Reports
            </Button>
            <p className="App-intro">...</p>
        </div>
    )
}

export default ViewReports;