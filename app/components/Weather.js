import React from 'react';
import WeatherInfo from 'WeatherInfo';
import { getLocation } from 'location';
import { getWeather } from 'weatherMap';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    getLocation()
      .then((data)=> {
        var location = data.geobytescity;
        if(location) {
          getWeather(location)
            .then((data) =>{
              this.setState({
                city: data.name,
                desc: data.weather[0].main,
                icon: data.weather[0].icon,
                temp: data.main.temp,
              });
            },
            (error) => {
              console.error(error);
            });
        } else {
          console.log('belum ada');
        }
      });
    var { city, desc, icon, temp } = this.state;

    return (
      <WeatherInfo city={city} temp={temp} />
    );
  }
}

export default Weather;