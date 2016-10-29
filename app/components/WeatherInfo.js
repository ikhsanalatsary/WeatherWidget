import React from 'react';
import WeatherIcon from 'WeatherIcon';

const WeatherInfo = (props) => {
  return (
    <div>
      <h4 className="weather-widget">Weather in {props.city}</h4>
      <WeatherIcon icon={props.icon} />
      <h5 className="weather-widget">at {props.temp} °C, {props.desc}</h5>
    </div>
  );
}

export default WeatherInfo;
