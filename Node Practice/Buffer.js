//callbacls are functions passed to other functions which can be invoked at a later time
//character set is the characters converted into ASCII code eg a = 97
//character encoding is converting that ASCII code into binary using UTF-8

var buf = new Buffer('Hello', 'utf-8'); //converts hello into binary data
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());

//ES6 arrays
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);
