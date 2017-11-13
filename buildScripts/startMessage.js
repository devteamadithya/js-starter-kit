//var chalk = require('chalk');
//Es6 version importing bcz we are using babel.
//babel support es6 version which has many features to use in js.
//inorder to run nms in package.json we have to add babel- before node.
import chalk from 'chalk';

console.log(chalk.blue('Your application is starting in dev mode')); //eslint-disable-line no-console

//Chalk is used to give the message before/after running the application.
//in package.json in the scripts prestart means before start application run the file.
//poststart means after application loads give the message. start means run the file.
//npm start it will dispay the message in the console.



