import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import './Chart.css'


const bar = {
  labels: ['1-3', '4-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80','81-90','91-100'],
  datasets: [
    {
      label: 'Organic Keywords',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55,72,42,91,60,18],
    },
  ],
};


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



const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class Charts extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2">
         


                   <Card style={{height:'292px'}}>
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

          
          <Card>
            <CardHeader>
              Organic Position Distribution
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Bar data={bar} options={options} />
              </div>
            </CardBody>
          </Card>
          
         
        </CardColumns>
      </div>
    );
  }
}

export default Charts;