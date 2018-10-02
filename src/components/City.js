import React from 'react';
import logo from '../css/a.gif'
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
    },2000)
  }

  setSearchTermState = () => {
    this.setState({
      searchTerm: this.props.searchTerm.split('=')[1]
    })
  }

  render() {
    return (
      this.state.cityDetails.length > 0
      ?
      <div className="five-day-container">
        <Buttons />
        <div className="day">
          <h4>{this.state.cityDetails[7].dt_txt.slice(5, 10).replace("-", "/")}</h4>
          <p>Max: {this.state.cityDetails[7].main.temp_max} Min: {this.state.cityDetails[3].main.temp_min}</p>
          <span > <img className="ind-weather-icon" src={`http://openweathermap.org/img/w/${this.state.cityDetails[3].weather[0].icon}.png`} /> </span>
          <p> {this.state.cityDetails[3].weather[0].description}</p>
        </div>

        <div className="day">
          <h4>Day: {this.state.cityDetails[14].dt_txt}</h4>
          <p>{this.state.cityDetails[14].main.temp_max}</p>
          <p>Min Temp: {this.state.cityDetails[3].main.temp_min}</p>
        </div>

        <div className="day">
          <h4>Day: {this.state.cityDetails[22].dt_txt}</h4>
          <p>{this.state.cityDetails[22].main.temp_max}</p>
          <p>Min Temp: {this.state.cityDetails[3].main.temp_min}</p>
        </div>

        <div className="day">
          <h4>Day: {this.state.cityDetails[30].dt_txt}</h4>
          <p>{this.state.cityDetails[30].main.temp_max}</p>
          <p>Min Temp: {this.state.cityDetails[3].main.temp_min}</p>
        </div>

        <div className="day">
          <h4>Day: {this.state.cityDetails[38].dt_txt}</h4>
          <p>{this.state.cityDetails[38].main.temp_max}</p>
          <p>Min Temp: {this.state.cityDetails[3].main.temp_min}</p>
        </div>
      </div>
      :
      <img className="loader" src={logo} alt="loading..." />
    )
  }

}

export default City;
