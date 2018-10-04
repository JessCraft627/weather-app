import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const BASE_URL = 'http://localhost:3000/api/v1/users'

class Login extends Component {
  state = {
    input: '',
    displayError: false
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
      this.setState({ displayError: false })
    } else {
      this.setState({ displayError: true })
    }
  }

  render() {
    return (
      <div className="background-photo">
        <h1 className="create-profile">Create Your Profile</h1>
        { this.state.displayError ? <h4>The name field can't be blank</h4> : null }
          <form className="login-form">
            <input
              className="login-input"
              onChange={this.handleInputChange}
              value={this.state.input}
              placeholder="Name">
            </input>
            <Link
              className="submit-button"
              onClick={this.handleProfileCreation}
              to={this.state.input !== '' ? "/weather" : "/"}
              exact
            >Submit</Link>
          </form>
      </div>
    );
  }
}

export default Login;
