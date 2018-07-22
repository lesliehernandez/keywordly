import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { ControlLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Navbar from "../../Components/Nav";
import "./Landing.css";
import Signup from "../../Components/Modals/Signup";

class Landing extends Component {
  render() {
    return (
      <div class="Landing">
        <Navbar />
        <div class="jumbotron">
          <div class="row">
            <div class="icon col-sm-8">
              <h1>
                Say goodbye to spreadsheets
              </h1>
              <p class="herotext">
               <b> Keywordly is an easy-to-use keyword research tool for marketers.
                Uncover valuable insights in a fraction of the time.</b>
              </p>
              <Signup />

            </div>
          </div>
        </div>

        <div class="services container-fluid text-center">
          <div id="about">
            <h2>How Keywordly Works</h2>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="row">
              <div class="icon col-sm-3">
                <h4>Traffic Overview</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus viverra adipiscing at in.
                </p>
              </div>
              <div class="icon col-sm-3">
                <h4>Keyword Resarch</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus viverra adipiscing at in.
                </p>
              </div>
            </div>
            <br />
            <br />
            <div class="row">
              <div class="icon col-sm-3">
                <h4>Competitor Data</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus viverra adipiscing at in.
                </p>
              </div>
              <div class="icon col-sm-3">
                <h4>Content Audit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus viverra adipiscing at in.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="pricing">
          <div id="pricing">
          <div class="container-fluid">
  <div class="text-center">
    <h2>Pricing</h2>
    <br></br>
    <p class="pricingtext">Choose a payment plan that works for you</p>
  </div>
  <br></br>
  <br></br>
  <div class="pricingrow row">
    <div class="col-sm-4">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h3>Basic</h3>
        </div>
        <div class="panel-body">
          <p><strong>20</strong> Lorem</p>
          <p><strong>15</strong> Ipsum</p>
          <p><strong>5</strong> Dolor</p>
          <p><strong>2</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div class="panel-footer">
          <h3>$19</h3>
          <h4>per month</h4>
          <button class="btn btn-lg">Sign Up</button>
        </div>
      </div> 
    </div> 
    <div class="col-sm-4">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h3>Pro</h3>
        </div>
        <div class="panel-body">
          <p><strong>50</strong> Lorem</p>
          <p><strong>25</strong> Ipsum</p>
          <p><strong>10</strong> Dolor</p>
          <p><strong>5</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div class="panel-footer">
          <h3>$29</h3>
          <h4>per month</h4>
          <button class="btn btn-lg">Sign Up</button>
        </div>
      </div> 
    </div> 
   <div class="col-sm-4">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h3>Premium</h3>
        </div>
        <div class="panel-body">
          <p><strong>100</strong> Lorem</p>
          <p><strong>50</strong> Ipsum</p>
          <p><strong>25</strong> Dolor</p>
          <p><strong>10</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div class="panel-footer">
          <h3>$49</h3>
          <h4>per month</h4>
          <button class="btn btn-lg">Sign Up</button>
        </div>
      </div> 
    </div> 
  </div>
</div>
</div>
</div>
        <div class="cta">
          <div id="contact">
          <form class="contactform">
          <h2 class="contactheading" align="center">Contact Us</h2>
          <br></br>
          <br></br>
          <br></br>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" class="label">First Name</label><br></br>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Jane"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4" class="label">Last Name</label><br></br>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Doe"></input>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress" class="label">Email</label><br></br>
    <input type="text" class="form-control" id="inputEmail" placeholder="janedoe@email.com"></input>
  </div>
  <button type="submit" class="contact-btn">Submit</button>
</form>
          </div>
          </div>


        <footer class="container-fluid text-center">
          <div class="footerlinks">
            <a href="#about" class="footerlinks">
              About
            </a>
            <a href="#pricing" class="footerlinks">
              Pricing
            </a>
            <a href="#contact" class="footerlinks">
              Contact
            </a>
          </div>

          <a href="#">
            <i class="socialicons fab fa-facebook" />
          </a>
          <a href="#">
            <i class="socialicons fab fa-twitter-square" />
          </a>
          <a href="#">
            <i class="socialicons fab fa-linkedin" />
          </a>
          <a href="#">
            <i class="socialicons fab fa-instagram" />
          </a>
          <br />
          <br />
          <br />
          <p>Copyright 2018</p>
        </footer>
        </div>
    );
  }
}

export default Landing;
