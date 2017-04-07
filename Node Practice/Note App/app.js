console.log('Starting App...');
const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const lodash = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
var command  = process.argv[2];
console.log('Command: ' + command);
console.log(process.argv);
console.log('Yargs ', argv);


if(command === 'add'){
    var note = notes.addNotes(argv.title, argv.body);
}else if(command === 'list'){
    notes.getNotes();
}else if(command === 'read'){
    notes.readNote(argv.title);
}else if(command === 'delete'){
    notes.removeNote(argv.title);
}else{
    console.log('Command not recognized!!');
}
/*
CODE TESTING
var res = no0tes.addNote();
console.log(res);
console.log(notes.add(2, 3));   
var user = os.userInfo();   
console.log(user);
console.log(lodash.isString(true));
console.log(lodash.isString("Arjun"));

var filteredArrat = lodash.uniq(['Arjun', 'Arjun', 'Malav', 'Malav', 1, 2, 1]); 
console.log(filteredArrat);

//fs.appendFile('greetings.txt', 'Hello ' + user.username + ` !! You are ${notes.age}.` );*/