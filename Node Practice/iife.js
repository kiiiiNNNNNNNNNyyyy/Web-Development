//IIFE - Immediately invoked function expression
//putting it in braces mean that it is an expression now, JS engine will now treat as a function
//() at the end of the function means we are immeduatedly invoking the function
var firstname = 'Jane';

(function(lastname){
    var firstname  = 'John';
    console.log(firstname);
    console.log(lastname);
}('Doe'));

console.log(firstname); 