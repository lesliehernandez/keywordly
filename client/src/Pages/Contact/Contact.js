import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { ControlLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Navbar from "../../Components/Nav";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Navbar />

        <footer class="container-fluid text-center">
          <a href="#myPage" title="To Top">
            <span class="glyphicon glyphicon-chevron-up" />
          </a>
          <p>Copyright 2018</p>
        </footer>
      </div>
    );
  }
}

export default Contact;
