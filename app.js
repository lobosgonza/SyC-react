'use strict';

const express = require("express");

const bodyParser = require("body-parser");



const app = express();


app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}))


// app.get

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server started on port ${PORT}");
});

module.exports = app;