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



app.post("/", function(req,res){
  const nombre = req.body.name;
  const mail = req.body.email;
  const texto = req.body.textBox;
  const numero = req.body.number;

  var data = {
    members: [{
      email_address: mail,
      status: "subscribed",
      merge_fields:{
          NAME: nombre,
          NUMBER: numero,
          TEXTO: texto,
          }
      }]
  };

  const jsonData = JSON.stringify(data);

  const options = {
    method: "POST",
  };

  // const request = https.request( options, function (response){

    if ( res.statusCode === 200 ){
      console.log(data);
      res.render("success",{page_name: "contactanos"})
    } else {
      res.render("failure",{page_name: "contactanos"})
      }

    // response.on("data", function(data){
    //   console.log(JSON.parse(data));
  });
  // });
  // request.write(jsonData);
  // request.end();

// })


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});