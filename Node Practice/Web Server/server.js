const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;
var app = express();

//Middleware
hbs.registerPartials(__dirname + '/views/partials');   
app.set('view engine', 'hbs');  //telling the express which handlebars we are gonna use.
app.use((req, res, next) => {   //if you won't call next(), the paeg will keep loading, waiting for route. Express middleware
     var now = new Date().toString();
     var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err){
            console.log('Unable to append!!');
        }
    });
     next();
});

app.use((req, res, next) => {
    res.render('maintainance.hbs');
});

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

app.listen(port, () => {
    console.log("Server is ready at port: " + port);
});