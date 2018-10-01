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


  constructor(props) {
    super(props);
    this.state = {
       toDashboard: false,
       individualCity: []

    }
  }

 // handleClick = (e) => {
 //   this.setState(() => ({
 //       toDashboard: true
 //     }))
 // }


 handleCitiesWeather = (e) => {
  fetch(`//api.openweathermap.org/data/2.5/forecast?q=wichita&units=Imperial&APPID=773d0a7cd6399fcc9e0901473a2796b0`)
  .then(r => r.json())
  .then(data => this.setState({individualCity: [data]}))
}

  render() {
    // if (this.state.toDashboard === true) {
    //   return <Redirect to='/city' />
    // }

    return (
    <div className="city-list" >
        <h2 onClick={this.handleCitiesWeather} className="name"> {this.props.name}</h2>
        <span > <img className="weather-icon" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} /> </span>
        <p className="temp"> {this.props.temp} F</p>
        <span className="desc"> {this.props.descr}</span>
        <City datas={this.state.individualCity} />
    </div>

  )
 }
}

export default CityList
