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
      currentUser: ''
    }
  }

  componentDidMount(){
    fetch("//api.openweathermap.org/data/2.5/weather?q=wichita&units=Imperial&APPID=773d0a7cd6399fcc9e0901473a2796b0")
    .then(r => r.json())
    .then(data => this.setState({cities:[data]}, () => {console.log(this.state.cities)}))

    fetch(USER_API_URL)
    .then(r=>r.json())
    .then(users=>this.setState({ currentUser: users[users.length-1] }))
  }

  handleChange = (e) => {
    this.setState({search: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("works")
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
        <CityContainer cityData={this.state.cities}/>
      </div>
    );
  }
}

export default App;


/*   Responsibility
    1.  Is the container for our overall Weather App
    2. Will hold the state of the search results to pass down to weather container
    3. Has 3 children - Navbar, search,  weather container.
    4. sign in?
    5. will fetch data for search
    */
