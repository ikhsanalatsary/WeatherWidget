import React from 'react';
import WeatherInfo from 'WeatherInfo';
import { openWeatherMap } from 'weatherMap';
import LazyLoading from 'LazyLoading';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    openWeatherMap()
      .then(data => {
        this.setState({
          city: data.name,
          desc: data.weather[0].main,
          icon: data.weather[0].icon,
          temp: data.main.temp,
          isLoading: false,
        });
      }, (error) => console.error(error));
  }

  render() {
    var { city, desc, isLoading, icon, temp } = this.state;
    const WeatherLoading = () => {
      return isLoading ? <LazyLoading /> : <WeatherInfo city={city} icon={icon} desc={desc} temp={temp} />
    }

    return (
      <div className="weather-container">
        {WeatherLoading()}
      </div>
    );
  }
}

export default Weather;
