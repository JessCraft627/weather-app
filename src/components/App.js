import React, { Component } from 'react';
import Search from './Search'
import CityContainer from './CityContainer'
import Navbar from './Navbar'
const BASE_URL = 'http://localhost:3000/api/v1'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      search: '',
      currentUser: '',
      loading: false
    }
  }

  handleCityWeather = (city) => {
   fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&units=Imperial&APPID=773d0a7cd6399fcc9e0901473a2796b0`)
   .then(r => r.json())
   .then(data => this.setState({cities:[...this.state.cities, data]},()=>console.log(this.state.cities)))
 }

  //   fetch(USER_API_URL)
  //   .then(r=>r.json())
  //   .then(users=>this.setState({ currentUser: users[users.length-1] }))
  // }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let city = this.state.searchTerm;
    this.handleCityWeather(city);
    this.persistCitiesToBackend(city);
  }

  persistCitiesToBackend = () => {
    fetch(`${BASE_URL}/cities`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: 'Miami',
        user_id: 25
      })
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm} handleSubmit={this.handleSubmit} persistCitiesToBackend={this.persistCitiesToBackend}/>
        <CityContainer cityData={this.state.cities}/>
      </div>
    );
  }
}

export default App;
