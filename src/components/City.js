import React from 'react';

import cloud from '../css/icons/Cloud.png'
import sun from '../css/icons/Sun.png'
import rain from '../css/icons/Cloud-Rain.png'
import atmos from '../css/icons/Cloud-Fog.png'
import thunder from '../css/icons/Cloud-Lightning.png'
import drizzle from '../css/icons/Cloud-Drizzle.png'
import snow from '../css/icons/Cloud-Snow-Moon.png'

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


  getIcon = (a) => {
    if(this.state.cityDetails[a].weather[0].main === "Clear"){
      return sun
    } else if (this.state.cityDetails[a].weather[0].main === "Rain") {
      return rain
    } else if (this.state.cityDetails[6].weather[0].main === "Thunderstorm") {
      return thunder
    } else if (this.state.cityDetails[6].weather[0].main === "Drizzle") {
      return drizzle
    } else if (this.state.cityDetails[6].weather[0].main === "Clouds") {
      return cloud
    } else if (this.state.cityDetails[6].weather[0].main === "Atmosphere") {
      return atmos
    } else if (this.state.cityDetails[6].weather[0].main === "Snow") {
      return snow
    } else {
      return sun
    }
  }

  render() {
    return (
      this.state.cityDetails.length > 0

      ?

      <div className="five-day-container">
        <div className="day">
          <h4 className="idate">{this.state.cityDetails[6].dt_txt.slice(5, 10).replace("-", "/")}</h4>
          <p className="itemp">{this.state.cityDetails[6].main.temp_max} <span className="hyphen">/</span> {this.state.cityDetails[3].main.temp_min}</p>
          <span>
            <img className="ind-weather-icon" src={this.getIcon(6)} alt={`${this.state.cityDetails[6].weather[0].main} weather icon`}/>
          </span>
          <p className="idescription">{this.state.cityDetails[3].weather[0].description}</p>
        </div>

        <div className="day">
          <h4 className="idate">{this.state.cityDetails[14].dt_txt.slice(5, 10).replace("-", "/")}</h4>
          <p className="itemp">{this.state.cityDetails[14].main.temp_max} <span className="hyphen">/</span> {this.state.cityDetails[11].main.temp_min}</p>
          <span>
            <img className="ind-weather-icon" src={this.getIcon(14)} alt={`${this.state.cityDetails[14].weather[0].main} weather icon`}/>
          </span>
          <p className="idescription">{this.state.cityDetails[14].weather[0].description}</p>
        </div>

        <div className="day">
          <h4 className="idate">{this.state.cityDetails[22].dt_txt.slice(5, 10).replace("-", "/")}</h4>
          <p className="itemp">{this.state.cityDetails[22].main.temp_max} <span className="hyphen">/</span> {this.state.cityDetails[19].main.temp_min}</p>
          <span>
            <img className="ind-weather-icon" src={this.getIcon(22)} alt={`${this.state.cityDetails[22].weather[0].main} weather icon`}/>
          </span>
          <p className="idescription">{this.state.cityDetails[22].weather[0].description}</p>
        </div>

        <div className="day">
          <h4 className="idate">{this.state.cityDetails[30].dt_txt.slice(5, 10).replace("-", "/")}</h4>
          <p className="itemp">{this.state.cityDetails[30].main.temp_max} <span className="hyphen">/</span> {this.state.cityDetails[27].main.temp_min}</p>
          <span>
            <img className="ind-weather-icon" src={this.getIcon(30)} alt={`${this.state.cityDetails[30].weather[0].main} weather icon`}/>
          </span>
          <p className="idescription">{this.state.cityDetails[30].weather[0].description}</p>
        </div>

        <div className="days">
          <h4 className="idate">{this.state.cityDetails[37].dt_txt.slice(5, 10).replace("-", "/")}</h4>
          <p className="itemp">{this.state.cityDetails[37].main.temp_max} <span className="hyphen">/</span> {this.state.cityDetails[34].main.temp_min}</p>
          <span>
            <img className="ind-weather-icon" src={this.getIcon(37)} alt={`${this.state.cityDetails[37].weather[0].main} weather icon`}/>
          </span>
          <p className="idescription">{this.state.cityDetails[37].weather[0].description}</p>
        </div>
      </div>

      :

      <div className="loader-div">
      </div>

      )
    }

  } // end of City class

  export default City;
