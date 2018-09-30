import React, { Component } from 'react';
import Search from './Search'
import CityContainer from './CityContainer'
import Navbar from './Navbar'
const USER_API_URL = 'http://localhost:3000/api/v1/users'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      search: '',
      currentUser: '',
      loading:false
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
    this.setState({search: e.target.value});
  }


  handleSubmit = (e) => {
    e.preventDefault()
    let city = this.state.search
    this.handleCityWeather(city)

    console.log("works")
      this.setState({search:' '});
  }

  // getCurrentUser = () => {
  //
  // }
  //
  // persistCitiesToBackend = (e) => {
  //   fetch(USER_API_URL, {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: this.state.input
  //     })
  //   })
  // }

  render() {
    return (
      <div>
        <Navbar />
        <Search handleChange={this.handleChange} search={this.state.search} handleSubmit={this.handleSubmit} persistCitiesToBackend={this.persistCitiesToBackend}/>
        <CityContainer loading={this.state.loading} cityData={this.state.cities}/>
      </div>
    );
  }
}

export default App;
