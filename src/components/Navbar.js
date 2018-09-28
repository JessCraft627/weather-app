import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render(){
    return(
      <div className="nav">
        <div className="cf"> </div>
        <NavLink
          to="/"> <button className="signout-button"> Sign out </button></NavLink>
      </div>
    )
  }

}

export default Navbar;


 // Responsibility
 //    1.  A presentational components
 //    2. holds the home icon and signout button
 //    3. when u click the buttons it takes you "/" or "/login"
