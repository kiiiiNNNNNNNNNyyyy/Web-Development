//stream are used to sabe memory by dividing the data into chunks
var fs = require('fs');
var zlib = require('zlib'); //for unzipping compressed gzip files

var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 16 * 1024});
var writable = fs.createWriteStream(__dirname + 'copy.txt');

readable.on('data', function(chunk){
    console.log(chunk);
    writable.write(chunk);
});

//Pipe

var readable = fs.createReadStream(__dirname + '/greet.txt');
var writable = fs.createWriteStream(__dirname + 'copy2.txt');
readable.pipe(writable);