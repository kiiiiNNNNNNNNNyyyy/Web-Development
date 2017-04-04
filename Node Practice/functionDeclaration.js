function f1(){
    console.log("Hello");
}
f1();

//taking function as an argument
function f2(f1){
    f1();
}
f2(f1);

//declaring function as a variable
var x = function f3(){
    console.log("Hello, I am function 2");
}
x();

//declaring function in argument

f2(function(){
    console.log("Hello. argument in function.");
});
