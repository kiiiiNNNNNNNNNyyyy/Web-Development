var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function(){
        console.log("Hello " + this.firstname + ' : '    + this.lastname);
    }
};
person.greet();
//another way of accessing the data
console.log(person['firstname'])