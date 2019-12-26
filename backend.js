var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer')
var app = express();
var mongoose = require("mongoose");
var PORT = process.env.PORT || 27017;

const mongoDB = 'mongodb+srv://';

mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useNewUrlParser: true });

var clientSchema = new mongoose.Schema({
  name : String,
  email : String,
  telephone: String,
  currentPos: String,
  comment: String
 });

var Client = mongoose.model("Client", clientSchema);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//allow express to access our html (contact.html) file
app.get('/', function(req, res) {
        res.sendFile(__dirname + "/contact.html");
    });

//route the GET request to the specified path, "/user". 
//This sends the user information to the path  
app.post('/', function(req, res){
  response = {
    name : req.body.name,
    email : req.body.email,
    telephone: req.body.telephone,
    currentPos: req.body.currentPos,
    comment: req.body.comment
  };
        
  //this line is optional and will print the response on the command prompt
  //It's useful so that we know what information is being transferred 
  //using the server
  console.log(response);
        
  //convert the response in JSON format
  var myData = new Client(response);
    myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

//This piece of code creates the server  
//and listens to the request at port 
//we are also generating a message once the 
//server is created
var server = app.listen(PORT, function(){
        var host = server.address().address;
        var port = server.address().port;
        console.log("Photo form listening at http://%s:%s", host, port);
    });