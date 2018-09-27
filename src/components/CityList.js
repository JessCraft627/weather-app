import React, { Component } from 'react';
import City from './City'
class CityList extends Component {
  render() {
    return (
      <div>
        <h1>Our list of cities</h1>
        <City />
      </div>
    );
  }
}

export default CityList;

{/*   Responsibility
    1.  functional component
    2. will display the cities info like:
    3.
    */}
