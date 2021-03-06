var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=896627903aca1e280d2165ad7fcbf809&units=metric';
//const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=896627903aca1e280d2165ad7fcbf809&units=imperial';


module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function(res) {
      //debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return {
          location: res.data.name,
          temp: res.data.main.temp
        }
      }
    }, function(res) {
      //console.log(res);
      //throw new Error(res.data.message);
      throw new Error(res);
    });
  }
}
