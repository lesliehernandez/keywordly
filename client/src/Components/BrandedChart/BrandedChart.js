import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import './Chart.css'


const pie = {
  labels: [
    'Branded',
    'Unbranded',
  ],
  datasets: [
    {
      data: [300, 50],
      backgroundColor: [
        '#46E4C4',
        '#5370FB',
      ],
      hoverBackgroundColor: [
        '#46E4C4',
        '#5370FB',
      ],
    }],
};


class BrandedChart extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2">

          <Card style={{width: '450px', height:'250px' }}>
          <CardHeader style= {{backgroundColor: 'white', border:'none', paddingBottom: '0', marginBottom: '0', fontSize: '14px', fontFamily: 'Montserrat', fontWeight: '500'}}>
              Branded vs. Unbranded
            </ CardHeader>
            <CardBody style={{marginTop: '0', paddingTop: '0'}}>
              <div className="chart-wrapper">
                <Pie data={pie}/>
              </div>
            </CardBody >
          </Card>
         
        </CardColumns>
      </div>
    );
  }
}

export default BrandedChart;