const request = require('request');

var geocode = (address, callback) => {
	
	var encodedAddress = encodeURIComponent(address);
	
	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (err, response, body) => {
		if(err){	
			callback("Unable to connect to the google services");
		}else if(body.status === 'ZERO_RESULTS'){
			callback('Unable to find address.');
		}else if(body.status === 'OK'){
			callback(undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng 
			});
		}
	});
	
};

module.exports = {
	geocodeFunction: geocode
}