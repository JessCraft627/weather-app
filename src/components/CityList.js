import React, { Component } from 'react';
import City from './City'

const CityList = (props) => {
   // console.log(props)
  return (
    <div className="city-list">
        <h3 className="name"> City: {props.name}</h3>
        <h3 className="temp"> Temp: {props.temp}</h3>
        <h3 className="desc"> Description: {props.descr}</h3>
        <h3 className="icon"> Icon: <img src={`http://openweathermap.org/img/w/${props.icon}.png`} /> </h3>
    </div>
  )
}

export default CityList
