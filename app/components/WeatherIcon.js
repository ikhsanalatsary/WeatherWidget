import React from 'react';

import '../assets/style-icon.css';

const WeatherIcon = ({ icon }) => {
  let iconComponent;
  switch (icon) {
    case '01d':
      iconComponent = (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
      break;
    case '02d':
      iconComponent = (
        <div className="icon sun-cloudy">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
      break;
    case '03d':
      iconComponent = (
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      );
      break;
    case '04d':
      iconComponent = (
        <div className="icon broken-cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      );
      break;
    case '09d':
      iconComponent = (
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      );
      break;
    case '10d':
      iconComponent = (
        <div className="icon sun-shower">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
          <div className="rain"></div>
        </div>
      );
      break;
    case '11d':
      iconComponent = (
        <div className="icon thunder-storm">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
      );
      break;
    case '13d':
      iconComponent = (
        <div className="icon flurries">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>
      );
      break;
    case '50d':
      iconComponent = (
        <i className="icon wi wi-fog"></i>
      );
      break;
    case '01n':
      iconComponent = (
        <div className="icon moony">
          <div className="moon">
            <div className="stars"></div>
          </div>
        </div>
      );
      break;
    case '02n':
      iconComponent = (
        <div className="icon moon-cloudy">
          <div className="cloud"></div>
          <div className="moon">
            <div className="stars"></div>
          </div>
        </div>
      );
      break;
    case '03n':
      iconComponent = (
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      );
      break;
    case '04n':
      iconComponent = (
        <div className="icon broken-cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      );
      break;
    case '09n':
      iconComponent = (
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      );
      break;
    case '10n':
      iconComponent = (
        <div className="icon moon-shower">
          <div className="cloud"></div>
          <div className="moon">
            <div className="stars"></div>
          </div>
          <div className="rain"></div>
        </div>
      );
      break;
    case '11n':
      iconComponent = (
        <div className="icon thunder-storm">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
      );
      break;
    case '13n':
      iconComponent = (
        <div className="icon flurries">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>
      );
      break;
    case '50n':
      iconComponent = (
        <i className="icon wi wi-fog"></i>
      );
      break;
    default:
      throw new Error('iconComponent is not valid');
  }

  return (
    <div>
      {iconComponent}
    </div>
  );
}

export default WeatherIcon;
