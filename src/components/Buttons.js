import React from 'react'

class Button extends React.Component {

  render() {
    return (
      <div>
        <div onClick={this.props.handleCityDisplay} className="backbutton">
        </div>
      </div>
    )
  }
}

export default Button;
