import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import City from './City'

class CityList extends Component  {



  render() {
    return (
    <div className="city-list">
        <h2  className="name"> <Link to={{
                    pathname: '/city',
                    search: `?query=${this.props.name.toLowerCase()}`
                  }}>{this.props.name}</Link></h2>
        <span > <img className="weather-icon" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} /> </span>
        <p className="temp"> {Math.round(this.props.temp)} F</p>
        <span className="desc"> {this.props.descr}</span>

    </div>

  )
 }

}

export default CityList
