var express = require("express");
var app = express()

app.get("/", function(req,res){
	console.log(req.params);
	res.send("Hello There!");
});

app.get("/bye", function(req,res){
	console.log(req.params);
	res.send("Goodbye!");
});

// what this signifies is that the first link after r will go 
// to the content we set here. That is what the ":" is for

// But it is important to note that something like 
// /r/:something/blahblah would not work here. It will go to 
// the "*" route instead
app.get("/r/:sublink1",function(req,res){
	console.log(req.params);
	var name = req.params.sublink1;
	res.send("Welcome to the " + name + " page!");
});
app.get("/r/:sublink1/comments/:sublink2/:sublink3",function(req,res){
	console.log(req.params);
	res.send("Welcome to the comments section");
})
// -------------------------------------//
// ALWAYS PUT THIS IN THE END OF ROUTES //
// Or else only this link will be rendered //

app.get("*", function(req,res){
	res.send("Not a valid URL");
});

//----------------------------//
//*** This has to follow at the end //
// to denote the port and IP number //
// We can also optionally include a callback function
app.listen(3000, "localhost");
