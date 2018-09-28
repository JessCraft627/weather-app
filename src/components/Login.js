import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
const BASE_URL = 'http://localhost:3000/api/v1/users'
  {/*   Responsibility
      1. Is a class component that acts as a login form to send data[name] to the backend
      2. Is the first page you see after opening our app
      3. After submitting takes you to home page/route
      4. Is its own route
      */}

const link = {
  width: '50px',
  padding: '12px',
  margin: '0 200px 0',
  background: 'black',
  textDecoration: 'none',
  color: 'white'
}

class Login extends Component {
  state = {
    input: ''
  }

  handleInputChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  handleProfileCreation = event => {
    if (this.state.input !== '') {
      fetch(BASE_URL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          name: this.state.input
        })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Create Your Profile</h1>
          <form>
            <input
              onChange={this.handleInputChange}
              value={this.state.input}
              placeholder="Your name goes here">
            </input>
          </form>
        <Link
          onClick={this.handleProfileCreation}
          to="/weather"
          exact
          style={link}
        >Submit</Link>
      </div>
    );
  }
}

export default Login;
