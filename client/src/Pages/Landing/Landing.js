import React, { Component } from "react";
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
          <div class="col-md-12">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="col-md-6">
              <h1>
                Say goodbye to spreadsheets
              </h1>
              <p class="herotext">
               <b> Keywordly is an easy-to-use keyword research tool for marketers.
                Uncover valuable insights in a fraction of the time.</b>
              </p>
              <Signup />
              </div>
              <div class="col-md-6">
              <div class="tablet"><img alt="" src="images/dashboard.png" display="inline-block" width="700" height="450"></img>
              </div>

            </div>
          </div>
        </div>
        </div>


        <div class="services container-fluid text-center">
          <div id="about">
          <div class="col-md-12">
            <h2>How Keywordly Works</h2>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="col-md-3">
            <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>Website Traffic</h4>
                <p>
                Grow your market share and website traffic with Keywordly's digital market intelligence platform. 
                </p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
          

                <h4>Keyword Resarch</h4>
                <p>
                Stop guessing at what people are searching for and use the Keywordly's Keyword Research tool to get keyword ideas and suggestions for your content.
                </p>
                </div>
                <div class="col-md-3">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>Competitor Data</h4>
                <p>
                Find out where your main rivals invest most of the marketing efforts
and adopt their experience in your own marketing strategy
                </p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h4>Content Audit</h4>
                <p>
                Inventory, audit, and analyze your website content and identify gaps in your strategy with Keywordly's content audit tool.
                </p>
                </div>
                <div class="col-md-6">
                <img src="https://preview.ibb.co/cWB63o/reportbuilder.png" alt="reportbuilder" width="500px" height="350px"></img>
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
          <p><strong>1</strong> Domain</p>
          <p><strong>100</strong>Keywords</p>
          <p><strong>3</strong> Competitors</p>
          <p><strong>1</strong> User</p>
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
          <p><strong>5</strong> Domains</p>
          <p><strong>500</strong> Keywords</p>
          <p><strong>5</strong> Competitors</p>
          <p><strong>3</strong> Users</p>
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
          <p><strong>10+</strong> Domains</p>
          <p><strong>Unlimited</strong> Keywords</p>
          <p><strong>10</strong> Competitors</p>
          <p><strong>10</strong> Users</p>
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

<div item xs={12}>
        <footer class="container-fluid text-center">
        
          <div class="footerlinks" item xs={6}>
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

          <div item xs={6}>
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
         </div>
          <br />
          <br />
          <br />

        </footer>
        </div>
        </div>
    );
  }
}

export default Landing;
