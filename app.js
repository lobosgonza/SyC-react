//jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");
const https = require ("https");


const app = express();


app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}))


// app.get

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
});




app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});