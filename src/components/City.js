import React, { Component } from 'react';
import Buttons from './Buttons'
const BASE_URL1 = '//api.openweathermap.org/data/2.5/forecast?q='
const BASE_URL2 = '&units=Imperial&APPID=773d0a7cd6399fcc9e0901473a2796b0'

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
        cityDetails: data
      }))
    },1000)
  }

  setSearchTermState = () => {
    this.setState({
      searchTerm: this.props.location.search.split('=')[1]
    })
  }

  mapTempDetails = () => {
    if(this.state.cityDetails.length > 0) {
      this.state.cityDetails.list.map(t=>t.main.temp_max)
    }
  }

  render() {
    console.log(this.mapTempDetails())
    return (
      <div>
        <h2>City Page</h2>
      </div>
    )
  }

}


export default City;


// {props.datas.map(data  => {data.list[0].main.temp_max})}
