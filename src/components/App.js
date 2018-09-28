import React, { Component } from 'react';
import Search from './Search'
import CityContainer from './CityContainer'
import Navbar from './Navbar'


class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    cities: [],
    search: ''
  }
}

  componentDidMount(){
    fetch("//api.openweathermap.org/data/2.5/weather?q=wichita&units=Imperial&APPID=773d0a7cd6399fcc9e0901473a2796b0")
    .then(r => r.json())
    .then(data => this.setState({cities:[data]}, () => {console.log(this.state.cities)}))
  }

  handleChange = (e) => {
     this.setState({search: e.target.value});
   }

   handleSubmit = (e) => {
     e.preventDefault()
     console.log("works")
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


/*   Responsibility
    1.  Is the container for our overall Weather App
    2. Will hold the state of the search results to pass down to weather container
    3. Has 3 children - Navbar, search,  weather container.
    4. sign in?
    5. will fetch data for search
    */
