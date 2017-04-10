const request = require('request');

var geoCode = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (err, response, body) => {
            if(err){	
                reject("Unable to connect to the google services");
            }else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find address.');
            }else if(body.status === 'OK'){
                resolve( {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng 
                });
            }
        });
        
    });
};

geoCode('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessge) => {
    console.log(errorMessge);
});