var name = "John Doe";
var greet = 'Hello ' + name;
var greet2 = `Hello ${name}`;//new es6 standard, but will only work if the bowser supports the latest v8 engine
console.log(greet);
console.log(greet2);

var obj = {
    firstname: 'John Doe',
    greet: function(){
        console.log('Hello ' + this.firstname);
    }
}

obj.greet();
obj.greet.call({firstname: "Jane Doe"});//borrowing the function and changing "this" to the new passed value
obj.greet.apply({firstname: "Jack Doe"});//if you have param in your function in obj, apply can pass an arrayof parameters