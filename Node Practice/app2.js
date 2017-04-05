var Emittter = require('./emitter');
var emtr = new Emittter();

emtr.on('greet', function(){
    console.log("Somewhere, Someone said hello!!");
});

emtr.on('greet', function(){
    console.log('A greeting occured');
});

console.log('Hello!!');
emtr.emit('greet');