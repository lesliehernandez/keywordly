import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import { Jumbotron} from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { FormGroup} from 'react-bootstrap';
import { Col} from 'react-bootstrap';
import { ControlLabel} from 'react-bootstrap';
import { FormControl} from 'react-bootstrap';



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
</Jumbotron>
<h2>Sign up and start your free trial</h2>
<Form >
  <FormGroup controlId="formInlineName">
    <ControlLabel>First Name</ControlLabel>{' '}
    <FormControl type="text" placeholder="Jane" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineName">
    <ControlLabel>Last Name</ControlLabel>{' '}
    <FormControl type="text" placeholder="Doe" />
  </FormGroup>{' '}
<FormGroup controlId="formInlineEmail">
    <ControlLabel>Email</ControlLabel>{' '}
    <FormControl type="email" placeholder="Email" />
  </FormGroup>{' '}
  <Button type="submit">Sign Up</Button>
</Form>


        </div>

        
          
    );
  }
}

export default Landing;