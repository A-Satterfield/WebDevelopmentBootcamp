var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home")
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
})

app.get("/posts", function (req, res){
    var posts = [
        {title: "You Cant Say That", author: "Susy"},
        {title: "Best Movies Ever?", author: "David"},
        {title: "I don't want to vote...", author: "Colt"}
        ];
        
        res.render("posts", {posts: posts})
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is listening!!")
});