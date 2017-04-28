const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log("Unable to connect to the database.");   //to stop the function as soon as a error occurs.
    console.log('Connected to Mongdb Server'); 

    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err) return console.log("Something went wrong." + err);

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: "Arjun",
        age: 24,
        location: "85 Sherman Ave, Jersey City "
    }, (err, result) => {
        if(err) return console.log("Something went wrong." + err);

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();  
});