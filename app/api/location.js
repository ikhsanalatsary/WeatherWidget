const BASE_URL = '//gd.geobytes.com/GetCityDetails?callback=?';

export function getLocation () {
  return $
    .getJSON(BASE_URL)
    .then((data) => {
      return data;
    });
}
