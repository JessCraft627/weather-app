import React, { Component } from 'react';
import { Link } from "react-router-dom";
import City from './City'

class CityList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayCity: false
    }
  }

  render() {
    return(
      this.state.displayCity
      ?
      <City />
      :
      <div className="city-list">
        <h2 className="name">
          <Link to={{ pathname: '/city', search: `?query=${this.props.name.toLowerCase()}`}}>{this.props.name}</Link>
        </h2>
        <span>
          <img className="weather-icon" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt={`${this.props.name}`}/>
        </span>
        <p className="temp"> {Math.round(this.props.temp)} F</p>
        <span className="desc"> {this.props.descr}</span>
      </div>
    )
  }
}

export default CityList
