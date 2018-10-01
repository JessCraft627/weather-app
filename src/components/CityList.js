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
       individualCity: [],
       city: ''

    }
  }

 // handleClick = (e) => {
 //   this.setState(() => ({
 //       toDashboard: true
 //     }))
 // }


 handleCitiesWeather = (indCity) => {
  fetch(`//api.openweathermap.org/data/2.5/forecast?q=${indCity}&units=Imperial&APPID=773d0a7cd6399fcc9e0901473a2796b0`)
  .then(r => r.json())
  .then(data => this.setState({individualCity: [data]}))
}

handleCityValue = (e) => {
  e.preventDefault()
  console.log(e.target.innerText)
  let indCity = e.target.innerText
  this.handleCitiesWeather(indCity)
  this.setState({city:' '});
}

  render() {
    // if (this.state.toDashboard === true) {
    //   return <Redirect to='/city' />
    // }

    return (
    <div className="city-list" onClick={this.handleCityValue} >
        <h2  className="name"> {this.props.name}</h2>
        <span > <img className="weather-icon" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} /> </span>
        <p className="temp"> {Math.round(this.props.temp)} F</p>
        <span className="desc"> {this.props.descr}</span>
        <City datas={this.state.individualCity} />
    </div>

  )
 }
}

export default CityList
