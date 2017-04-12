const axios = require('axios');  
const yargs = require('yargs');    
const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to Fetch weather for',
        string: true
    }
}).help().alias('help', 'h').argv;
var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
var api = '5ade4f8faf34b4e5e479486f1418a0f1';
axios.get(geocodeUrl).then((response) => { 
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error("Unable to find the address.");
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/${api}/${lat},${lng}`;

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var appTemp = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}, and it feels like ${appTemp}.`);
}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to the server');
    }else{
        console.log(e.message); 
    }
});


