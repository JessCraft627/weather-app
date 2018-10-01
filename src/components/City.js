import React, { Component } from 'react';
import Buttons from './Buttons'
const BASE_URL1 = '//api.openweathermap.org/data/2.5/forecast?q='
const BASE_URL2 = '&APPID=773d0a7cd6399fcc9e0901473a2796b0&units=imperial'

class City extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      cityDetails: []
    }
  }

  componentDidMount = () => {
    this.setSearchTermState();
    this.delayFetch();
  }

  delayFetch = () => {
    setTimeout(() => {
      fetch(BASE_URL1 + this.state.searchTerm + BASE_URL2)
      .then(r => r.json())
      .then(data => this.setState({
        cityDetails: data.list
      }))
    },100)
  }

  setSearchTermState = () => {
    this.setState({
      searchTerm: this.props.location.search.split('=')[1]
    })
  }

  render() {
    console.log(this.state.cityDetails)
    return (
      this.state.cityDetails.length > 0
      ?
      <div>
        <h4>Day: {this.state.cityDetails[6].dt_txt}</h4>
        <p>Max Temp: {this.state.cityDetails[6].main.temp_max}</p>
        <p>Min Temp: {this.state.cityDetails[6].main.temp_min}</p>

        <h4>Day: {this.state.cityDetails[14].dt_txt}</h4>
        <p>{this.state.cityDetails[14].main.temp_max}</p>

        <h4>Day: {this.state.cityDetails[22].dt_txt}</h4>
        <p>{this.state.cityDetails[22].main.temp_max}</p>

        <h4>Day: {this.state.cityDetails[30].dt_txt}</h4>
        <p>{this.state.cityDetails[30].main.temp_max}</p>

        <h4>Day: {this.state.cityDetails[38].dt_txt}</h4>
        <p>{this.state.cityDetails[38].main.temp_max}</p>
      </div>
      :
      <h1>{'Loading...'}</h1>
    )
  }

}

export default City;
