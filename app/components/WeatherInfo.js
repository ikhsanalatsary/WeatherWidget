import React from 'react';
import WeatherIcon from 'WeatherIcon';

const WeatherInfo = (props) => {
  return (
    <div>
      <h2>Weather in {props.city} at {props.temp} °C</h2>
      <WeatherIcon icon={props.icon} />
      <h3>{props.desc}</h3>
    </div>
  );
}

export default WeatherInfo;
