var express = require("express");
var http = require("http");
var app = express();
//var jade = require('jade');

// Set the view directory to /views
app.set("views", __dirname + "/views");

// Let's use the Jade templating language
app.set("view engine", "jade");

app.get("/", function(request, response) {
  response.render("index", { message: "I love anime" });
});


http.createServer(app).listen(8001);