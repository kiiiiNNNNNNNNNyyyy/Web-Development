const request = require('request');
const geocode = require('./geocode/geocode'); 
const yargs = require('yargs'); 
const weather = require('./weather/weather');
const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to Fetch weather for',
        string: true
    }
}).help().alias('help', 'h').argv;

geocode.geocodeFunction(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (error, weatherResults) => {
            if(error){
                console.log(error);
            }else{
                console.log(`It's currently ${weatherResults.temperature}. It's feels like ${weatherResults.apparentTemp}.`);
            }
        });
    }
});


