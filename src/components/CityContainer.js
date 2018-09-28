import React, { Component } from 'react';
import CityList from './CityList'

 const CityContainer = (props) => {

   console.log(props)
    return (<div id="city-container">
            {props.cityData.map(cities =>  <CityList key={cities.id} name={cities.name} temp={cities.main.temp} descr={cities.weather[0].description} icon={cities.weather[0].icon}/> )}
    </div>
  )
}
export default CityContainer

{/*   Responsibility
    1.  Is the container for our individual cities weather
    2. will pass down props to child "city"
    3. functional component
    */}

    // var arr = [];
    // for (var key in myObject) {
    //   arr.push(myObject[key]);
    // }
