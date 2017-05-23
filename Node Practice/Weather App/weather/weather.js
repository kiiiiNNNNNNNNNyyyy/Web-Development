var request = require('request');
var api = '5ade4f8faf34b4e5e479486f1418a0f1';

var getWeather = (lat, lng, callback) => {
    request({
    url: `https://api.darksky.net/forecast/${api}/${lat},${lng}`,
    json: true
}, (error, response, body) => {
        if(error){
            callback('Unable to connect to the server');
        }else if(response.statusCode === 400){
            callback("Unable to fetch the weather for this location.");
        }else if(response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature
            });
        }
});

};

module.exports.getWeather = getWeather;