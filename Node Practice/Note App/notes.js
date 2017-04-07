console.log("Starting notes.js")
const fs = require('fs');

//fecthing the notes form the JSON file
var fetchNotes  = () => {
    //try-catch in case the file doesnt  exist expecially for the fist time
    try{
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }catch(e){
        return [];
    }
};

//saving the notes to the JSON files
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//Adding the notes to the JSON files
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
    };
    
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;    //return number
    });

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        console.log("Note Created.");
        console.log();  
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }else{
        console.log("A note with this title already exists.");
    }

};

//Getting all the notes from the JSON files
var getAllNotes = () => {
   var notes = fetchNotes();
   notes.forEach(function(element) {
       console.log(`Reading note: ${element.title}`);
       console.log(`Note: ${element.body}`)
       console.log();
   }, this);
}

//Reading the Notes from the JSON Files
var readNote = (title) => {

    console.log("Reading note", title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);   //short hand
    var x = filteredNotes[0];

    if(filteredNotes.length === 0){
        console.log("Note with this title do not exists!!");
    }else{
        console.log(`Title: ${filteredNotes[0].title}`);
        console.log(`Note: ${filteredNotes[0].body}`);
    }
}

var removeNote = (title) => {   
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => {
        note.title !== title    //add only if it maatches the title
    });
    if(JSON.stringify(filteredNotes) === JSON.stringify(notes)){
        console.log("Note with this title, do not exists!!");
    }else{
        console.log(`Deleting note ${title}`);
    }
    console.log(typeof(filteredNotes));
    saveNotes(filteredNotes);
}

module.exports = {
    addNotes: addNote,
    getNotes: getAllNotes,
    readNote,               //to demonstrate, that there is no need to change the name sometimes
    removeNote
};