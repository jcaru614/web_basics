//jshint esversion: 6

//constants for express and bodyparser which were installed
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
// initialize web app
const app = express();
//make app use body parser
app.use(bodyParser.urlencoded({extended: true}));

//use app.get to target home route, then call back function with request and response and pointing towards directory name and index.html
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

//targeting the home route which targets whats in index.html
app.post("/", function(req, res){
  //console.log(req.body.crypto);
// we can take from html page by going through a request, to the body and taking the name
  var crypto = req.body.crypto;
  var fiat = req.body.fiat;
  var amount = req.body.amount;
//creating variables of the original url to make parts and place in the request
    var options = {
      url: "https://apiv2.bitcoinaverage.com/convert/global",
      method: "GET",
      qs: {
        from: crypto,
        to: fiat,
        amount: amount
      }
    };
//sending request to bitcoin ticker API. the statuslog tells you status in terminal
  request(options, function(error, response, body){
//changing into json object and parsing it then grabing last price from api using json viewer ext in chrome
    var data = JSON.parse(body);
    var price = data.price;

    console.log(price);
    var currentDate = data.time;
    res.write("<p>The current date is " + currentDate + "</p>");
    res.write("<h1>The price of " + crypto + " is " + price + fiat + "<h1>");
// only one res,send so use res.write to do more
    res.send();
    });
});

//set up app to listen to port 3000
app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
