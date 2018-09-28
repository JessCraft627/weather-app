import React from 'react'
import { NavLink } from 'react-router-dom';

function Button(props) {
  return (
    <NavLink
    to="/weather"> <div className="backbutton"> </div> </NavLink>
  )
}


export default Button;
