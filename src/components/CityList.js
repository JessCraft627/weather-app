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

  handleCityDisplay = () => {
    this.setState({
      displayCity: !this.state.displayCity
    },()=>console.log(this.state.displayCity))
  }

  render() {
    return(
      this.state.displayCity
      ?
      <div onClick={this.handleCityDisplay} className="city-list">
        <h2 className="name">{this.props.name}</h2>
        <span>
          <img className="weather-icon" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt={`${this.props.name}`}/>
        </span>
        <p className="temp"> {Math.round(this.props.temp)} F</p>
        <span className="desc"> {this.props.descr}</span>
        <City handleCityDisplay={this.handleCityDisplay} searchTerm={`?query=${this.props.name.toLowerCase()}`}/>
      </div>
      :
      <div onClick={this.handleCityDisplay} className="city-list">
        <h2 className="name">{this.props.name}</h2>
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

// <Link to={{ pathname: '/city', search: `?query=${this.props.name.toLowerCase()}`}}>
