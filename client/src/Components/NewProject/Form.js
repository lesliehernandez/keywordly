import React, { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
    
    };
  }
  
  render () {
    return (
        <div>
            <h1 className="App-title">New Project</h1>
            <p className="App-intro">What should we call this?</p>
            <form>
                <label>Project Name</label>
                <input ref="name" type="text" />
                <p>Enter your Websites domain</p>
                <label>Website Domain</label>
                <input ref="domain" type="url" />
                <button type="submit">Create</button>
            </form>
        </div>
    );
  }
}

export default Form