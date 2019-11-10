var express = require('express');
var exphbs  = require('express-handlebars');
var config = require('./config');
Contact = require ('./models/Contact');
const requestIp = require('request-ip');
const parser  = require('body-parser');
var app = express();
const path = require("path");
const sassMiddleware = require("node-sass-middleware");

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(
  sassMiddleware({
    /* Options */
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public/css/"),
    debug: true,
    outputStyle: "compressed",
    prefix: "/css"
  })
);
app.get('/', function (req, res) {
    res.render('home');
});

app.use(express.static("public"));
app.listen(3000);
