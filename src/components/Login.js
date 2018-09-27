  import React, { Component } from 'react';
  import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
  import App from './App';

    {/*   Responsibility
        1.  Is a class component that acts as a login form to send data[name] to the backend
        2. Is the first page you see after opening our app
        3. After submitting takes you to home page/route
        4. Is its own route
        */}

        const link = {
          width: '50px',
          padding: '12px',
          margin: '0 6px 6px',
          background: 'black',
          textDecoration: 'none',
          color: 'white',
        }

    class Login extends Component {

      render() {
        return (
          <div className="App">
            <h1>Login Page</h1>
              <h1>Form goes here</h1>
            <NavLink
              to="/weather"
              exact
              style={link}
              activeStyle={{
                background: 'darkblue'
              }}
            >Submit</NavLink>

          </div>
        );
      }
    }

    export default Login;
