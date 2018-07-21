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
              <h2>
                <b>Say goodbye to spreadsheets</b>
              </h2>
              <p>
                Keywordly is an easy-to-use keyword research tool for marketers.
                Uncover valuable insights in a fraction of the time.
              </p>
              <button class="btn btn-lg">Sign Up</button>
            </div>
          </div>
        </div>

        <div class="services container-fluid text-center">
          <div id="about">
            <h2>How Keywordly Works</h2>
            <br />
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              viverra adipiscing at in.{" "}
            </h4>
            <br />
            <br />
            <br />
            <div class="row">
              <div class="icon col-sm-3">
                <h4>Ut etiam sit amet nisl purus</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus viverra adipiscing at in.
                </p>
              </div>
              <div class="icon col-sm-3">
                <h4>Ut etiam sit amet nisl purus</h4>
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
                <h4>Ut etiam sit amet nisl purus</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus viverra adipiscing at in.
                </p>
              </div>
              <div class="icon col-sm-3">
                <h4>Ut etiam sit amet nisl purus</h4>
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
    <h4>Choose a payment plan that works for you</h4>
  </div>
  <br></br>
  <br></br>
  <div class="row">
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
          <h2 align="center">Contact Us</h2>
          <br></br>
          <br></br>
          <br></br>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Email</label>
    <input type="text" class="form-control" id="inputEmail" placeholder="janedoe@email.com"></input>
  </div>
  <button type="submit" class="btn">Sign in</button>
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

          <a class="socialicons">
            <i class="fab fa-facebook" />
          </a>
          <a class="socialicons">
            <i class="fab fa-twitter-square" />
          </a>
          <a class="socialicons">
            <i class="fab fa-linkedin" />
          </a>
          <a class="socialicons">
            <i class="fab fa-instagram" />
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
