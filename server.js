var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
require('./models/db');

const Contact = require ('./models/Contact')
const parser  = require('body-parser');
const path = require("path");

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/contacts',async function(req,res){

    const items = await Contact.list(); // query to database for params

    res.render("contact",{
      items,

    });


});


app.listen(3000);
