import React, { Component } from 'react';
import Buttons from './Buttons'


const City = (props) => {
    console.log(props)
    return (
      <div>
         {props.datas.map(data  => {data.list[0].main.temp_max})}
      </div>
    )
  }



export default City;
