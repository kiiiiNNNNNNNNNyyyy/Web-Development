const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log("Unable to connect to the database");
    console.log("Connected to the MongoDb Database!!");

    db.collection('Todos').find({_id: new ObjectID('59041f1531c3b373e67078dd')}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch!!", err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count ${count}`);
        console.log(JSON.stringify(count, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch!!", err);
    });

    db.collection('Users').find({name: "Arjun"}).toArray().then((data) => {
        console.log(`Data : ${data}`);
        console.log(JSON.stringify(data, undefined, 2));
        console.log(data[1].age);
    }, (err) => {
        console.log("Error!!! " + err);
    });
    //db.close();
}); 