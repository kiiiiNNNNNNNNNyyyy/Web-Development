function greet(callback){
    console.log("Hello");
    var data = {
        name: "John Doe"
    };
    callback(data);  
}

greet(function(callback){
    console.log('The call back was invoked');
    console.log(callback);
    console.log(callback.name);
});

var x = [];
x[1] = function(){
    return "Hello1";
}

x[2] = function(){
    return "Hello2";
}

x.forEach(function(element) {
    console.log(element());
}, this);