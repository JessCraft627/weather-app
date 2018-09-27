import React, { Component } from 'react';
import CityList from './CityList'

class CityContainer extends Component {
  render() {
    return (
      <div >
        <h1>Our container App</h1>
        <CityList />
      </div>
    );
  }
}

export default CityContainer;

{/*   Responsibility
    1.  Is the container for our individual cities weather
    2. will pass down props to child "city"
    3. functional component
    */}
