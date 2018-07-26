import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import './Chart.css'



const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class OrChart extends Component {
  
  render() {

    const bar = {
      labels: ['1-3', '4-10', '11-20', '21-50', '51-100'],
      datasets: [
        {
          label: 'Organic Keywords',
          backgroundColor: '#46E4C4',
          borderColor: '#46E4C4',
          borderWidth: 1,
          hoverBackgroundColor: '#46E4C4',
          hoverBorderColor: '#46E4C4',
          data: [
          24,
          34,
          76,
          12,
          42,
          ],
        },
      ],
    };

    console.log(this.props);
    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2">
          
          <Card style={{ position:'absolute', height:'300px', width:'695px' }}>
            <CardHeader style={{ backgroundColor: 'white', border: 'none', fontSize: '14px',  fontFamily: 'Montserrat', fontWeight: '500'}}>
              Organic Position Distribution
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
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

export default OrChart;