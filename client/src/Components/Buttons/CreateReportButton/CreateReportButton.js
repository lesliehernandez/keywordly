import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom'




// this also works with react-router-native

const CreateReportButton = withRouter(({ history, ...props }) => (
  <Button
    variant="contained"
    onClick={() => { history.push(`/dashboard/buildreport/${props.projectId}`) }}
    style={{
        margin: '0', 
        float: 'right', 
        backgroundColor: '#46E4C4',
        height: '40px',
        padding: '10px',
        color: 'rgba(0, 0, 0, 0.87)', 
        fontSize: '0.875rem', 
        minWidth: '150px',
        minHeight: '45px',
        fontFamily: 'Roboto', 
        borderRadius: '4px', 
        textTransform: 'uppercase', 
        verticalAlign: 'middle',  
        backgroundColor: '#46E4C4'
    }}
  >
    Create Report
  </Button>
))

// class CreateReportButton extends Component {
//     createReportHandler = () => {
//         return(
//             <Redirect to={`/dashboard/buildreport/${this.props.projectId}`} />
//        )
//     }
//     render(){
//         return(
//             <Button 
//                 onCLick={this.createReportHandler}
//                 variant="contained" 
//                 style={{
//                     margin: '0', 
//                     float: 'right', 
//                     backgroundColor: '#46E4C4',
//                     height: '15px',
//                     padding: '0',
//                     color: 'rgba(0, 0, 0, 0.87)', 
//                     fontSize: '0.875rem', 
//                     minWidth: '150px',
//                     minHeight: '25px',
//                     fontFamily: 'Roboto', 
//                     borderRadius: '4px', 
//                     textTransform: 'uppercase', 
//                     verticalAlign: 'middle', 
//                     paddingTop: '7px', 
//                     backgroundColor: '#46E4C4'
//                 }}
//             >
//             Create Report
//             </Button>
//         )
//     }
// }

export default CreateReportButton;