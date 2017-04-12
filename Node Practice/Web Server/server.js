const express = require('express');
const hbs = require('hbs');
var app = express();

//Middleware
hbs.registerPartials(__dirname + '/views/partials');   
app.set('view engine', 'hbs');  //telling the express which handlebars we are gonna use.
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.get('/', (req, res) => {
    //res.send("Hello Express!!");
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMsg: 'Welcome to our site'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('*', (req, res) => {
    res.send("<h1>ERROR 404</h1>"); 1
});

app.listen(3000, () => {
    console.log("Server is ready at port 3000");
});