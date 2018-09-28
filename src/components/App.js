import React, { Component } from 'react';
import Search from './Search'
import CityContainer from './CityContainer'
import Navbar from './Navbar'

class App extends Component {
  state = {
    isLoggedIn: false
  }

  render() {
    return (
      <div>
        <h4>A fantastic weather app</h4>
        <Navbar />
        <Search />
        <CityContainer />

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
