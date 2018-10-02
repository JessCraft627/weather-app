import React from 'react'
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

class Button extends React.Component {

  render() {
      console.log(this.props)
  return (
    <div>
      <div className="backbutton">
          </div>
    </div>
  )
  }
}


export default withRouter(Button);
