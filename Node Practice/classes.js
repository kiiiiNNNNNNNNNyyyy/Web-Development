//They are basically a new way of build objects
//They are called Syntactic Sugar: A feature that changes how you type something, but nothing actually changes under the hood
'use strict';

class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        console.log('Hello, '  + this.firstname + ' ' + this.lastname);
    }
}

var john = new Person('John', 'Doe');
console.log(john.__proto__);