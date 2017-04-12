const express = require('express');
const hbs = require('hbs');
var app = express();

//Middleware
app.set('view engine', 'hbs');  //telling the express which handlebars we are gonna use.
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //res.send("Hello Express!!");
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMsg: 'Welcome to our site',
        currentYear: new Date().getFullYear() 
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('*', (req, res) => {
    res.send("<h1>ERROR 404</h1>"); 1
});

app.listen(3000, () => {
    console.log("Server is ready at port 3000");
});