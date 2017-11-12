//calling express.
var express = require('express');
//path reference
var path = require('path');
//reference to open website in browser
var open = require('open');

//store port number take any.
var port = 5191;
//creating instance of express
var app = express();

//tell express which route to run server
app.get('/',function(req,res){
//giving specific path/file and dirname is spl inbuilt,directory name to run
 res.sendFile(path.join(__dirname,'../src/index.html'));
});
//tell express to listen port and launch
app.listen(port,function(err){
  //if error comes white hiting the port show error otherwise show me index.html
  if(err){
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});

//to run the express in terminal type ==> node buildScripts/srcServer.js


