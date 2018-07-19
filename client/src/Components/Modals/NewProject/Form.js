import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      domain: ''
    }
    this.createProject = this.createProject.bind(this)
  }

  createProject = (e) => {
    e.preventDefault()
    const client = {
      name: this.refs.name.value,
      domain: this.refs.domain.value
    }
    this.setState({
      name: client.name,
      domain: client.domain
    })
    this.refs.name.value = null
    this.refs.domain.value = null

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    const options = {
      method: 'POST', 
      headers,
      body: JSON.stringify(client)
    }

    fetch('project/new', options)
    .then(res => {
      console.log(res);
      
      if(res.status === 200){
        this.setState({
          name: '',
          domain: ''
        })
      }
    })
  }


  
  render () {
    return (
        <div>
            <h1 className="App-title">New Project</h1>
            <p className="App-intro">What should we call this?</p>
            <form onSubmit={this.createProject}>
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