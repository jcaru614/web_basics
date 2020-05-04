//require both packages we installed
const express = require("express");
const bodyParser = require("body-parser");
//creating app constant using express
const app = express();

var items = [];
let workItems = [];

//creating get route that sends hello
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);
  //render file called list and pass a var called kind of day
  res.render("list", {listTitle: day, newlistItem: items});

});

app.post("/", function(req, res){
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newlistItem: workItems});
});

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

//listen on port 300 and log server is started
app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
