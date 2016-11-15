const BASE_URL = 'http://freegeoip.net/json/' || 'http://ipinfo.io';

import axios from 'axios';

export function getLocation () {
  return axios
    .get(BASE_URL)
    .then(res => {
      return res.data
    }, (err) => {
      throw new Error(err);
    });
}
