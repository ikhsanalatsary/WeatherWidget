import React from 'react';

const WeatherInfo = (props) => {
  return (
    <h2>Weather in {props.city} at {props.temp}</h2>
  );
}

export default WeatherInfo;