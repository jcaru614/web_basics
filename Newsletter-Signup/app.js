//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
//refers to static files via relative url
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {

  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;
  //object and part of api for subscribing and unsub
  var data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };
  //for turnign the javascript object above into a json object
  var jsonData = JSON.stringify(data);

  //mailchipmp api
  var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/acdbdae060",
    method: "POST",
    //authentification
    headers: {
      "Authorization": "joey1 77d14d1af9a8ed547957935fb1562f8e-us4"
    },
   body: jsonData
  };

  request(options, function(error, response, body) {
    if (error) {
      res.sendFile(__dirname + "/failure.html");
    } else {
      if (response.statusCode === 200) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }
    }
  });

});

app.post("/failure", function(req, res){
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

//apikey
//77d14d1af9a8ed547957935fb1562f8e-us4
//list key
//acdbdae060
