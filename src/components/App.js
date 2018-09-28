import React, { Component } from 'react';
import Search from './Search'
import CityContainer from './CityContainer'
import Navbar from './Navbar'



class App extends Component {

  handleCityWeather = (city) => {
    let cityURL = city.split(' ').join('%20')
   fetch(`//api.openweathermap.org/data/2.5/weather?q=${cityURL}&units=Imperial&APPID=773d0a7cd6399fcc9e0901473a2796b0`)
   .then(r => r.json())
   .then(data => this.setState({cities:[data]}))
  }

      // this.setState((prevState, cities) => ({cities: prevState.cities + cities.[data]})

  constructor(props) {
  super(props);
  this.state = {
    cities: [],
    search: ''
  }
}

  handleChange = (e) => {
     this.setState({search: e.target.value});
   }

   handleSubmit = (e) => {
     e.preventDefault()
     let city = this.state.search
     console.log(city)
     this.handleCityWeather(city)
   }



  render() {

    return (
      <div>
        <Navbar />
        <Search handleChange={this.handleChange} search={this.state.search} handleSubmit={this.handleSubmit}/>
        <CityContainer cityData={this.state.cities}/>
      </div>
    );
  }
}

export default App;
