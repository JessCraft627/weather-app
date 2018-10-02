import React, { Component } from 'react';
import CityList from './CityList'

 const CityContainer = (props) => {
    // console.log(props)
    return (  <div id="city-container">
            {props.cityData.map((cities, key) => <div><CityList key={cities.key} id={cities.id} name={cities.name} temp={cities.main.temp} descr={cities.weather[0].description} main={cities.weather[0].main} icon={cities.weather[0].icon}/> </div>  )}
    </div>
  )
}


export default CityContainer
