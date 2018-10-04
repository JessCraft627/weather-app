import React from 'react';
import CityList from './CityList'

const CityContainer = (props) => {
  return (
    <div id="city-container">
      {props.cityData.map((cities, key) =>
        <div key={key}>
          <CityList
            key={cities.key}
            id={cities.id}
            name={cities.name}
            main={cities.weather[0].main}
            temp={cities.main.temp}
            descr={cities.weather[0].description}
            icon={cities.weather[0].icon}/>
        </div>
      )}
    </div>
  )
}

export default CityContainer

