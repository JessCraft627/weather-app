import React from 'react'
import { NavLink } from 'react-router-dom';

function Button(props) {
  return (
    <div>
      <NavLink
    to="/city"> <div className="backbutton"> </div> </NavLink>
    </div>
  )
}


export default Button;
