var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" => "Meow!"
app.get("/dog", function(req, res){
    res.send("Meow!");
});


app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS PAGE!");
});

// "*" for everything else, place after others
app.get("*", function(req, res){
    res.send("You are a star!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!!");
});