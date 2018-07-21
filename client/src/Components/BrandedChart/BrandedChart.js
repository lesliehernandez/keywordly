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
        '#FF6384',
        '#36A2EB',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
      ],
    }],
};


class BrandedChart extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2">

          <Card style={{ position:'absolute', height:'400px' }}>
            <CardHeader>
              Branded vs. Unbranded
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Pie data={pie} />
              </div>
            </CardBody>
          </Card>
         
        </CardColumns>
      </div>
    );
  }
}

export default BrandedChart;