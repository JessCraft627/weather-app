import React, { Component } from 'react';
import Buttons from './Buttons'

class City extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  componentDidMount = () => {
    this.getSecondPart();
    fetch('//api.openweathermap.org/data/2.5/forecast?q=' + this.state.searchTerm + '&units=Imperial&APPID=773d0a7cd6399fcc9e0901473a2796b0')
    .then(r => r.json())
    .then(data => console.log(data))
  }

  getSecondPart = () => {
    this.setState({
      searchTerm: this.cityNameLogic()
    })
  }

  cityNameLogic = () => {
    const cityArray = this.props.location.search.split('=')[1]
    console.log(cityArray)
    return cityArray
  }

  render() {
    console.log(this.state.searchTerm)
    console.log('//api.openweathermap.org/data/2.5/forecast?q=' + this.state.searchTerm + '&units=Imperial&APPID=773d0a7cd6399fcc9e0901473a2796b0')
    return (
      <div>
        <h2>City Page</h2>
      </div>
    )
  }

}


export default City;


// {props.datas.map(data  => {data.list[0].main.temp_max})}
