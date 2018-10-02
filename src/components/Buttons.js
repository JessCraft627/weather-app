import React from 'react'
import { withRouter } from 'react-router';

class Button extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <div onClick={this.props.history.goBack} className="backbutton">
        </div>
      </div>
    )
  }
}

export default withRouter(Button);
