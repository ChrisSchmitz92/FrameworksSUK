const request = require("request");

/*Anwendungslogik*/

let apiKey = "99cf7877476de8ea9e1305f2153597ba";
let city = "Gummersbach";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url, function(err, response, body) {
  if (err) {
    console.log("error:", error);
  } else {
    let weather = JSON.parse(body);
    // let lat = weather.lat;
    // let long = weather.long;
    let message = `Es sind ${weather.main.temp}° in ${city}.`;
    console.log(message);

    exports.message = message;
  }
});
