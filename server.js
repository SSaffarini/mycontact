var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
require('./models/db');

const Contact = require ('./models/Contact')
const parser  = require('body-parser');
const path = require("path");

var app = express();

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


app.get('/contacts',async function(req,res){
const params={};
if(req.query.FirstName){
  params.FirstName ={
    $regex:req.query.FirstName, // set params = $regex': 'queury'  to find any name in mangos  with this letters
    $options:"i", // capital or small letters optimaization
  }
};

if(req.query.MiddleName){
  // params.gender = req.query.gender
  params.MiddleName ={
    $regex:req.query.MiddleName,
    $options:"i",
}
};
console.log(params.MiddleName);
console.log(params.FirstName);
console.log(req.query);
console.log(params);
// const items = await User.list(params); // query to database for params
const items = Object.keys(params).length ? await Contact.list(params) : []
res.render("contact",{
  items,
  query:req.query

});

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());


// contact delete section

app.get('/contact/delete/:id',async function(req,res){

    const user = await Contact.model.findOne({
      _id:req.params.id

    });
 console.log(user);
 await user.remove();
 res.redirect(302,"/contacts");

});



});








app.use(express.static("public"));
app.listen(3000);
