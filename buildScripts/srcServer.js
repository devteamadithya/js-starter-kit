//calling express.
//var express = require('express');
//es6 version imports and const
import express from 'express';
//path reference
//var path = require('path');
import path from 'path';
//reference to open website in browser
//var open = require('open');
import open from 'open';
//importing the webpack into express
import webpack from 'webpack';
import config from '../webpack.config.dev';

//store port number take any.
//var port = 5191;
const port = 5191;
//creating instance of express
//var app = express();
const app = express();
//webpack compiler config got the file.
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true,
  publicPath: config.output.publicPath
}));

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
// if you want to share your url with another to see your work local tunnel or now or surge is handy,browsersync.
//loacaltunnel is easy you can create custom url to share.
//to install type npm install localtunnel -g
//to run the server type lt --port #number it returns the url. just copy and paste in browser.
// custom url ==> lt --port #num adithya it will return custom url.

//npm script for automation. Instead of running express server we can use automation by
//adding start: the path in the scripts in packgae.json file and then if we type npm start
//it will run the express code.

//If you want to run the task parallel like open localhost and check security issues via nsp
//in package.json script enter "npm-run-all --parallel x y" before that
//assign what commands to run for x and what commands to run task y and give the command above
//to run parallel. just type npm start to run all the task in parallel
// if you want in slient mode type npm start -s


