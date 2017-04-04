function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

//every object has a property that points to another object. Its caled the object's  prototype
//All javascript objects inherits the proerties from their prototype.
//objects created using an object literal inherit from a prototype called Object.prototype
Person.prototype.greet = function(){
    console.log('Hello, ' + this.firstname + " " + this.lastname);
}

var john = new Person('John', 'Doe');
console.log(john.firstname);
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();
console.log(john.__proto__);
console.log(jane.__proto__);

if(john.__proto__ === jane.__proto__){
    console.log("From same construtor");
}

//adding methods to the prototype
function Test(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.desc = function(){
        return this.firstname + " " + this.lastname + " is " + this.age + " years old."
    }
}

Test.prototype.print = function(){
    console.log("Hey.." + this.firstname + ' ' + this.lastname);
    console.log(this.desc());
}

var x = new Test('Arjun', 'Dass', 5);
x.print();
