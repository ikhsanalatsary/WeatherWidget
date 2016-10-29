import React from 'react';
import WeatherInfo from 'WeatherInfo';
import { getLocation } from 'location';
import { getWeather } from 'weatherMap';
import LazyLoading from 'LazyLoading';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    getLocation()
      .then((data)=> {
        var location = data.geobytescity;
        if(location) {
          this.serverReq = getWeather(location)
            .then((data) => {
              this.setState({
                city: data.name,
                desc: data.weather[0].main,
                icon: data.weather[0].icon,
                temp: data.main.temp,
                isLoading: false,
              });
            }, (error) => console.error(error));
        }
      },
      (error) => console.error('belum ada', error));
  }

  componentWillUnmount() {
    this.serverReq.abort();
  }

  render() {
    var { city, desc, isLoading, icon, temp } = this.state;
    const WeatherLoading = () => {
      if (isLoading) {
        return <LazyLoading />
      } else if (city && temp) {
        return <WeatherInfo city={city} icon={icon} desc={desc} temp={temp} />
      }
    }

    return (
      <div className="weather-container">
        {WeatherLoading()}
      </div>
    );
  }
}

export default Weather;
