const BASE_URL = '//gd.geobytes.com/GetCityDetails?callback=?';

export function getLocation () {
  return $
    .getJSON('//gd.geobytes.com/GetCityDetails?callback=?')
    .then((data) => {
      return data;
    });
}
