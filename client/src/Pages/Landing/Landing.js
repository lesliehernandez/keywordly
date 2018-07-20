import React, { Component } from 'react';
import './Landing.css'
import { Button } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
          <Jumbotron>
            <h1>Say Goodbye to Spreadsheets</h1>
            <p>
              Generate the perfect keyword ideas and eliminate the need for tedious spreadsheets.
            </p>
            <img src="http://via.placeholder.com/550x450" class="img-fluid" alt="Responsive image"></img>
            <p>
              <Button bsStyle="primary">Get Started</Button>
              <Button bsStyle="primary">Learn More</Button>
            </p>
          </Jumbotron>;
        </div>



    );
  }
}

export default Landing;