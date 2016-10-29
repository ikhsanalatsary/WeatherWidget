const BASE_URL = 'http://gd.geobytes.com/GetCityDetails?callback=?';

export function getLocation () {
  return $
    .getJSON(BASE_URL)
    .then((data) => {
      return data;
    });
}
