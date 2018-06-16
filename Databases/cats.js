var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB

// var pebbles = new Cat({
//     name: "Pebbles",
//     age: 20,
//     temperament: "Friendly"
// });

// pebbles.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong!");
//     } else {
//         console.log("We just saved a cat to the DB:");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snowball",
    age: 15,
    temperament: "Nice"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no, Error!");
        console.log(err);
    } else {
        console.log("All the Cats...");
        console.log(cats);
    }
});