import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import { Jumbotron} from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { FormGroup} from 'react-bootstrap';
import { Col} from 'react-bootstrap';
import { ControlLabel} from 'react-bootstrap';
import { FormControl} from 'react-bootstrap';
import { Checkbox} from 'react-bootstrap';
import { Navbar} from 'react-bootstrap';

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
  <h2>Lorem ipsum dolor sit amet consectetur adipsicing elit sed do</h2>
  <img src="http://via.placeholder.com/800x600" class="img-fluid" alt="Responsive image"></img>
</Jumbotron>;

<Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      First Name
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Last Name
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit">Sign Up</Button>
    </Col>
  </FormGroup>
</Form>;
        </div>

        
          
    );
  }
}

export default Landing;