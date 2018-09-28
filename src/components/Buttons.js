import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

function Button(props) {
  return (
    <NavLink
    to="/weather"> <div className="backbutton"> </div> </NavLink>
  )
}


export default Button;
