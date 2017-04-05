//fs loads the content of the file into the buffer
//this is a synchronous approach for reading a file
var fs = require('fs');
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8'); //by default its utf-8
console.log(greet);

//asynchronous approach, take callback as a parameter
//There functions are called error first callback, err = null if no error
var greet2 = fs.readFile(__dirname + '/greet.txt', function(err, data){
    console.log(data.toString());   //instead of using toString, i can solve this by addid utf8 as a parameter in the readFile function
});

console.log("Done!");

//order of output
//HW - Done - HW
//first the function run and waited for the completion of the sync function and ran it completely
//then moved to the second async function, ran it in background and moved to console.log statement
//didn't wait for itself to end and moved to the next part of code
//completed itself and then printed it.