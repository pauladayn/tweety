const express = require("express");
const app = express();
const chalk = require("chalk");
const morgan = require("morgan");

/*var fs = require('fs')
var path = require('path') //The path module provides utilities for working with file and directory paths.
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
*/
/*
let loggeo = function (req, res, next) {
  console.log(chalk.green("logged"));
  next();
};

app.use(loggeo);
*/

app.get("/", function (req, res) {
  res.send("Hello World!");
});

var port = 3000;

app.use(morgan("tiny"));

//app.use(morgan('combined', { stream: accessLogStream })) 
app.listen(port, function () {
  console.log("Servidor corriendo en el puerto 3000");
});
