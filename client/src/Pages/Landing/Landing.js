import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { ControlLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Navbar from "../../Components/Nav";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div class="Landing">
        <Navbar />
        <div class="jumbotron">
        <div class="row">
        <div class="icon col-sm-8">

          <h2><b>Say goodbye to spreadsheets</b></h2>
          <p>Keywordly is an easy-to-use keyword research tool for marketers. Uncover valuable insights in a fraction of the time.</p>
          <button class="btn btn-4 btn-4a icon-arrow-right">SIGN UP  <i class="fas fa-arrow-right"></i>

</button>
        </div>
        </div>
        </div>

        <div class="services container-fluid text-center">
          <h3>HOW KEYWORDLY WORKS</h3>
          <br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in. </p>
          <br></br>
            <br></br>
            <br></br>
          <div class="row">
          
            <div class="icon col-sm-3">
              <h4>Ut etiam sit amet nisl purus</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in.</p>
            </div>
            <div class="icon col-sm-3">
              <h4>Ut etiam sit amet nisl purus</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in.</p>
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="row">
            <div class="icon col-sm-3">
              <h4>Ut etiam sit amet nisl purus</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in.</p>
            </div>
            <div class="icon col-sm-3">
              <h4>Ut etiam sit amet nisl purus</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in.</p>
            </div>
          </div>
        </div>

 <div class="cta">
          <h3>Say goodbye to spreadsheets</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in.</p>
          <button class="btn btn-4 btn-4a icon-arrow-right">GET IN TOUCH  <i class="fas fa-arrow-right"></i>

</button>
        </div>

        <footer class=" ontainer-fluid text-center">
        <div class="footerlinks">
        <a href="#" class="footerlinks">About</a>    
        <a href="#" class="footerlinks">Pricing</a>
        <a href="#" class="footerlinks">Contact</a>
        </div>
 

    <a class="socialicons">
    <i class="fab fa-facebook"></i>
    </a>
    <a class="socialicons">
    <i class="fab fa-twitter-square"></i>


    </a>
    <a class="socialicons">
    <i class="fab fa-linkedin"></i>
    </a>
    <a class="socialicons">
    <i class="fab fa-instagram"></i>
</a>
<br></br>
<br></br>
<br></br>
          <p>Copyright 2018</p>
        </footer>
      </div>
    );
  }
}

export default Landing;
