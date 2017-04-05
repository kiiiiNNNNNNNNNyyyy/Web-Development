//object properties and methods
var obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

//function and arrays
var arr = [];
arr.push(function(){
    console.log('Hello World');
});
arr.push(function(){
    console.log('Hello World 2');
});
arr.push(function(){
    console.log('Hello World 3');
});

arr.forEach(function(item){
    item();
});