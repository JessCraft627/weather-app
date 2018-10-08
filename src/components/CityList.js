import React, { Component } from 'react';
import City from './City'

import cloud from '../css/icons/Cloud.png'
import sun from '../css/icons/Sun.png'
import rain from '../css/icons/Cloud-Rain.png'
import atmos from '../css/icons/Cloud-Fog.png'
import thunder from '../css/icons/Cloud-Lightning.png'
import drizzle from '../css/icons/Cloud-Drizzle.png'
import snow from '../css/icons/Cloud-Snow-Moon.png'

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
    })
  }

  getIcon = () => {
    if(this.props.main === "Clear"){
      return sun
    } else if (this.props.main === "Rain") {
      return rain
    } else if (this.props.main === "Thunderstorm") {
      return thunder
    } else if (this.props.main === "Drizzle") {
      return drizzle
    } else if (this.props.main === "Clouds") {
      return cloud
    } else if (this.props.main === "Atmosphere") {
      return atmos
    } else if (this.props.main === "Snow") {
      return snow
    } else {
      return sun
    }
  }


  render() {
    return(
      this.state.displayCity

      ?

      <div onClick={this.handleCityDisplay} className="city-lists">
        <h2 className="name">{this.props.name}</h2>
        <span>
          <img className="weather-icon" src={this.getIcon()} alt={`${this.props.name}`}/>
        </span>
        <p className="temp"> {Math.round(this.props.temp)} °F</p>
        <span className="desc"> {this.props.descr}</span>
        <City handleCityDisplay={this.handleCityDisplay} searchTerm={`?query=${this.props.name.toLowerCase()}`}/>
      </div>

      :

      <div onClick={this.handleCityDisplay} className="city-list">
        <h2 className="name">{this.props.name}</h2>
        <span>
          <img className="weather-icon" src={this.getIcon()} alt={`${this.props.name}`}/>
        </span>
        <p className="temp"> {Math.round(this.props.temp)} °F</p>
        <span className="desc"> {this.props.descr}</span>
      </div>

    )
  }
}

export default CityList
