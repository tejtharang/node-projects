var express = require("express");
var app = express();

// Creating routes here
app.get("/",function(req,res){
	res.send("Hi there, Welcome to my assignment!");
});

app.get("/speak/:animal",function(req,res){
	var animal = req.params.animal.toLowerCase();
	var sounds = {
		pig : "Oink",
		cow : "Moo",
		dog : "Woof Woof",
		cat : "I HATE you human",
		goldfish : "..."
	}
	var sound = sounds[animal];
	res.send("The " + animal + " says '" + sound + "'");

});

app.get("/repeat/:word/:count",function(req,res){
	var word = req.params.word;
	var count = parseInt(req.params.count);
	if(isNaN(count)){
		res.send("Sorry, Page Not Found!");
	}
	console.log(count);
    var sendString = "";
	for(var i=0;i<count;i++){
		sendString += (word + " ");
	}
	res.send(sendString);
});

app.get("*",function(req,res){
	res.send("Sorry,Page Not Found!");
})

app.listen(3000,"localhost");